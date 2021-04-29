let lang;

function changeLanguage(currLang)
{
    if(arguments.length == 0)
    {
        switch(lang)
        {
            case "cs-CZ":
                changeLanguage("en-US");
                break;
            default:
                changeLanguage("cs-CZ");
                break;
        }
    }
    else
    {
        switch(currLang)
        {
            case "cs-CZ":
                console.log("lang set to cz");
                lang = "cs-CZ";
                break;
            default:
                console.log("lang set to en");
                lang = "en-US";
                break;
        }

        setFlag(lang);
    }
}

window.onload = function()
{
    console.log("Hello!");
    changeLanguage(getLang());
};

function getLang()
{
    if (navigator.languages != undefined)
    {
        console.log("setting lang to: " + navigator.languages[0]);
        lang = navigator.languages[0]
        return navigator.languages[0];
    }
    else
    {
        console.log("setting lang to: " + navigator.language);
        lang = navigator.language;
        return navigator.language;
    }
}

function setFlag(lang)
{
    switch(lang)
    {
        case "cs-CZ":
            writeLang("lang-flag").src = "img/cz_flag.png";
            writeLang("nav-projects").innerHTML = "Projekty";
            writeLang("nav-studium").innerHTML = "Studium";
            writeLang("nav-contact").innerHTML = "Kontakt";
            writeLang("nav-about").innerHTML = "O mně";
            writeLang("notification-text").innerHTML = "Text zkopírován";
            writeLang("notification-close").innerHTML = "Zavřít";
            writeLang("header-portfolio").innerHTML = "Vývojářské portfólio";
            writeLang("section-projects").innerHTML = "Projekty";
            writeLang("section-studium").innerHTML = "Studium";
            writeLang("section-contact").innerHTML = "Kontakt";
            writeLang("section-about").innerHTML = "O mně";
            break;
        default:
            writeLang("lang-flag").src = "img/en_flag.png";
            writeLang("nav-projects").innerHTML = "Projects";
            writeLang("nav-studium").innerHTML = "Studium";
            writeLang("nav-contact").innerHTML = "Contact";
            writeLang("nav-about").innerHTML = "About me";
            writeLang("notification-text").innerHTML = "Text copied";
            writeLang("notification-close").innerHTML = "Close";
            writeLang("header-portfolio").innerHTML = "Developer portfolio";
            writeLang("section-projects").innerHTML = "Projects";
            writeLang("section-studium").innerHTML = "Studium";
            writeLang("section-contact").innerHTML = "Contact";
            writeLang("section-about").innerHTML = "About me";
            break;
    }
}

function writeLang(id)
{
    return document.getElementById(id);
}