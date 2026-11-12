<?php
const EMAIL_TO = 'info@urban-lukas.cz';

function page($title_html, $body_html, $after_html, $button_onclick)
{
    include('../html/upper.html');
    echo "<div class='text-center bg-dark-black p-8 w-max m-12 relative block'>
            <h1 class='text-4xl font-black'>$title_html</h1>
            <br>------------------<br>
            $body_html
            ------------------<br><br>
            $after_html
            <div onclick=\"$button_onclick\" class='notification-btn'><span id='form-error-back'>Back</span></div>
          </div>";
    include('../html/lower.html');
    exit;
}

function problem($error_html)
{
    page(
        "<span id='form-error-header'>Chybně vyplněný formulář!</span>",
        $error_html,
        "<span id='form-error-text'>Prosím, opravte špatně zadané údaje a zašlete formulář znovu.</span><br><br>",
        'window.history.back();'
    );
}

// Only accept POST submissions; anything else goes back to the form.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../html/form.html');
    exit;
}

// Read a POST field as a trimmed string (arrays and missing fields become '').
function field($key)
{
    return is_string($_POST[$key] ?? null) ? trim($_POST[$key]) : '';
}

$name = field('name');
$email = field('email');
$message = field('message');

$errors = '';

// Letters (incl. diacritics), spaces, dots, apostrophes and hyphens; no line breaks.
if (!preg_match("/^[\p{L} .'-]{2,100}\z/u", $name)) {
    $errors .= "<span id='form-error-name'>Jméno je neplatné.</span><br>";
}

// filter_var also rejects line breaks, which blocks e-mail header injection.
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors .= "<span id='form-error-email'>E-Mailová adresa je neplatná.</span><br>";
}

if (!preg_match('/^.{10,5000}\z/us', $message)) {
    $errors .= "<span id='form-error-message'>Zpráva nesmí mít méně než 10 znaků.</span><br>";
}

if ($errors !== '') {
    problem($errors);
}

$subject = '=?UTF-8?B?' . base64_encode("Kontaktní formulář: $name") . '?=';
$body = "Jméno: $name\nE-mail: $email\n\nZpráva:\n$message\n";
$headers = "From: Web <" . EMAIL_TO . ">\r\n"
    . "Reply-To: $email\r\n"
    . "Content-Type: text/plain; charset=UTF-8";

if (!mail(EMAIL_TO, $subject, $body, $headers)) {
    problem("<span id='form-error-send'>Zprávu se nepodařilo odeslat, zkuste to prosím později.</span><br>");
}

page(
    "<span id='form-success'>Formulář úspěšně odeslán!</span>",
    "<span id='form-success-text'>Děkuji za odeslání formuláře. Budu se snažit odpovědět co nejdříve.</span><br>",
    '',
    "location.href = '../../index.html';"
);
