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

        setLang(lang);
    }
}

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

function setLang(lang)
{
    switch(lang)
    {
        case "cs-CZ":
            writeLang("lang-flag").src = "img/cz_flag.png";
            writeLang("nav-projects").innerHTML = "Projekty";
            writeLang("nav-studium").innerHTML = "Studium";
            writeLang("nav-contact").innerHTML = "Kontakt";
            writeLang("nav-about").innerHTML = "O mně";
            writeLang("notification-close").innerHTML = "Zavřít";
            writeLang("footer-my-profiles").innerHTML = "- Mé profily -";
            break;
        default:
            writeLang("lang-flag").src = "img/en_flag.png";
            writeLang("nav-projects").innerHTML = "Projects";
            writeLang("nav-studium").innerHTML = "Education";
            writeLang("nav-contact").innerHTML = "Contact";
            writeLang("nav-about").innerHTML = "About me";
            writeLang("notification-close").innerHTML = "Close";
            writeLang("footer-my-profiles").innerHTML = "- My profiles -";
            break;
    }
}

function writeLang(id)
{
    return document.getElementById(id);
}

window.onload = function()
{
    changeLanguage(getLang());
};