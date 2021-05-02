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
            //HEADERS
            writeLang("notification-close").innerHTML = "Zavřít";
            writeLang("body-portfolio").innerHTML = "Portfólio vývojáře";
            writeLang("category-projects").innerHTML = "Projekty";
            writeLang("category-education").innerHTML = "Studium";
            writeLang("category-contact").innerHTML = "Kontakt";
            writeLang("category-about").innerHTML = "O mně";
            //NAVMENU
            writeLang("lang-flag").src = "img/cz_flag.png";
            writeLang("nav-projects").innerHTML = "Projekty";
            writeLang("nav-studium").innerHTML = "Studium";
            writeLang("nav-contact").innerHTML = "Kontakt";
            writeLang("nav-about").innerHTML = "O mně";
            //DESCRIPTIONS
            writeLang("desc-mathack").innerHTML = "Jednoduchý program - slouží jako vzdělávací pomůcka matematiky. Program cílen pro širokou veřejnost.";
            writeLang("desc-moralityabyss").innerHTML = "Hra vytvořena pro školní projekt, v projektu byla použita grafika podobná starým hrám z dob PS1.";
            writeLang("desc-spaceinvaders").innerHTML = "Projekt vytvořen jako zadání pro klauzurní práce. Snaha zreplikovat a modernizovat klasickou hru Space Invaders.";
            //TEXTS
            writeLang("studium-text").innerHTML = "Již třetím rokem studuji na střední škole ve Zlíně obor vývoj počítačových her a multimediálních aplikací. Jsem zaměřen převážně na tvorbu desktopových aplikací a vývoj indie video her. Pracuji primárně v jazycích jako Java, Python nebo C++.";
            writeLang("about-text").innerHTML = "Jmenuji se Lukáš Urban a profesně se zabývám programováním a výpočetní technologií. Je to mou vášní již od dětství, kdy jsem tvořil své první prototypy her v GameMakeru. Tvořím moderní, robustní, ale hlavně srozumitelné a snadno použivatelné aplikace.";
            writeLang("contact-text").innerHTML = "Nejrychlejší forma kontaktu je zkrze email nebo discord. Po domluvě jsem ochoten přistoupit i na další formy komunikace";
            //FOOTER
            writeLang("footer-my-profiles").innerHTML = "- Mé profily -";
            break;
        default:
            //HEADERS
            writeLang("notification-close").innerHTML = "Close";
            writeLang("body-portfolio").innerHTML = "Developer portfolio";
            writeLang("category-projects").innerHTML = "Projects";
            writeLang("category-education").innerHTML = "Education";
            writeLang("category-contact").innerHTML = "Contact";
            writeLang("category-about").innerHTML = "About me";
            //NAVMENU
            writeLang("lang-flag").src = "img/en_flag.png";
            writeLang("nav-projects").innerHTML = "Projects";
            writeLang("nav-studium").innerHTML = "Education";
            writeLang("nav-contact").innerHTML = "Contact";
            writeLang("nav-about").innerHTML = "About me";
            //DESCRIPTIONS
            writeLang("desc-mathack").innerHTML = "Simple program - serves as an educational math tool. The program is aimed at the general public.";
            writeLang("desc-moralityabyss").innerHTML = "Game created for a school project, it uses graphics similar to old PS1 games.";
            writeLang("desc-spaceinvaders").innerHTML = "Project created as an assignment for a school project. An attempt to replicate and modernize the classic game Space Invaders.";
            //TEXTS
            writeLang("studium-text").innerHTML = "I have been studying at a high school in Zlín, Czech Republic for three years. I am mainly focused on creating desktop applications and developing indie video games. I work primarily in languages like Java, Python or C++.";
            writeLang("contact-text").innerHTML = "The fastest form of contact is via email or discord. I am willing to accept other forms of communication upon agreement.";
            writeLang("about-text").innerHTML = "My name is Lukáš Urban and I am professionally involved in programming and computer technology. It has been my passion since I was a kid, when I created my first prototypes of games in GameMaker. I create modern, robust, but most importantly understandable and easy to use applications.";
            //FOOTER
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