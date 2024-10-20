<?php
if (isset($_POST['email'])) {
    $email_to = "kontakt@urban-lukas.cz";

    function problem($error)
    {
        include('../html/upper.html');
        echo "<div class='text-center bg-dark-black p-8 w-max m-12 relative block'>
                <div>
                    <h1 class='text-center text-4xl font-black'><span id='form-error-header'>Chybně vyplněný formulář!</span></h1>
                </div>
                <br>
                ------------------
                <br>";
        echo $error;
        echo "------------------
                <br>
                <br>
                <span id='form-error-text'>Prosím, opravte špatně zadané údaje a zašlete formulář znovu.</span><br>
                <br>
                <div onclick='window.history.go(-1); return false;' class='notification-btn'><span id='form-error-back'>Back</span></p>
           </div>";
        include('../html/lower.html');
        die();
    }

    if (
        !isset($_POST['name']) ||
        !isset($_POST['message'])
    ) {
        problem('<span id="form-error-general">Nalezeny chybně vyplněné údaje.</span>');
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    $email_subject = "Kontaktni Formular: ".iconv('UTF-8', 'ASCII//TRANSLIT', $name);

    if (!preg_match($email_exp, $email)) {
        $error_message .= '<span id=\'form-error-email\'>E-Mailová adresa je neplatná.</span><br>';
    }

    $string_exp = "~[^\\pL\d]+~u";

    if (!preg_match($string_exp, $name)) {
        $error_message .= '<span id=\'form-error-name\'>Jméno je neplatné.</span><br>';
    }

    if (strlen($message) < 10) {
        $error_message .= '<span id=\'form-error-message\'>Zpráva nesmí mít méně než 10 znaků.</span><br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Obsah formulare\n-------------------------------\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Jmeno: " . iconv('UTF-8', 'ASCII//TRANSLIT', clean_string($name)) . "\n\n";
    $email_message .= "E-mailova adresa: " . clean_string($email) . "\n\n";
    $email_message .= "Zprava:\n" . iconv('UTF-8', 'ASCII//TRANSLIT', clean_string($message)) . "\n";

    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);

    include('../html/upper.html');
            echo "<div class='text-center bg-dark-black p-8 w-max m-12 relative block'>
                    <div>
                        <h1 class='text-center text-4xl font-black'><span id='form-success'>Formulář úspěšně odeslán!</span></h1>
                    </div>
                    <br>
                    ------------------
                    <br>
                    <span id='form-success-text'>Děkuji za odeslání formuláře. Budu se snažit odpovědět co nejdříve.</span>
                    <br>
                    ------------------
                    <br><br>
                    <div onclick=\"location.href = 'https://urban-lukas.cz';\" class='notification-btn'><span id='form-error-back'>Back</span></p>
               </div>";
            include('../html/lower.html');
}
?>