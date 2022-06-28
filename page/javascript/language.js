var flag_cz = document.getElementById("flag-cz");
var flag_en = document.getElementById("flag-en");

console.log("i use arch btw")

function changeLang(lang)
{

    switch(lang)
    {
        case "en":
            setCookie("language", "en", 7);
            writeLang("nav-btn-text-intro").innerHTML = "Introduction";
            writeLang("nav-btn-text-portfolio").innerHTML = "Portfolio";
            writeLang("nav-btn-text-about").innerHTML = "About me";
            writeLang("nav-btn-text-contact").innerHTML = "Contact";
            writeLang("text-portfolio").innerHTML = "Welcome to my portfolio.";
            writeLang("text-intro-about").innerHTML = "I am a <span class='text-normal-red'>video game designer</span> and developer. It's a <span class='text-normal-red'>passion of mine</span> that I've been cultivating since I was a kid.";
            writeLang("text-creds").innerHTML = "The website was created without a template. Used images are from <a class='text-normal-red' href='https://unsplash.com'>unsplash</a>. The code is publicly available. Web technologies used are listed on the repository.";
            writeLang("text-about-me").innerHTML = "About me";
            writeLang("text-about-age").innerHTML = "I'm a 19-year-old student.";
            writeLang("text-about-prof").innerHTML = "I'm a software engineer.";
            writeLang("text-about-philosophy").innerHTML = "I like to spread the philosophy of open and free software.";
            writeLang("text-about-objective").innerHTML = "My primary focus is on video game development and design";
            writeLang("text-about-interest").innerHTML = "I am interested in cybersecurity.";
            writeLang("text-about-cv").innerHTML = "My <a href='downloads/urban_cv_en.pdf' class='text-normal-red underline'>CV</a> download here.";
            writeLang("text-about-yt-main").innerHTML = "I own a youtube channel";
            writeLang("text-about-yt-info").innerHTML = "I offer technical content created for a teenage audience.";
            writeLang("text-about-yt-tainment").innerHTML = "The content serves as <a href='https://en.wikipedia.org/wiki/Infotainment' class='text-normal-red underline'>infotainment</a>.";
            writeLang("text-my-projects").innerHTML = "My<br>projects";
            writeLang("project-morality-abyss").innerHTML = "Morality Abyss";
            writeLang("project-morality-abyss-description").innerHTML = "The project was created in 2020 as a school assignment. It is a 3D horror game inspired by the indie classic 'Slender: The Eight Pages'. The game's story has a faintly comedic basis.";
            writeLang("project-farm-escapade").innerHTML = "Farm Escapade";
            writeLang("project-farm-escapade-description").innerHTML = "One of my favorite games. The player finds himself in the role of a farmer on a wacky farm, where he must manage to make as much money and plant as many plants as possible while under time constraints.";
            writeLang("project-starfighter").innerHTML = "Starfighter";
            writeLang("project-starfighter-description").innerHTML = "One of my oldest projects. This is a modern interpretation of the game classic 'Space Invaders'. The game features a custom shop and an endless game mode.";
            writeLang("project-drainage").innerHTML = "Drainage (Concept)";
            writeLang("project-drainage-description").innerHTML = "A short story game concept working on the basis of a strong atmosphere. Its full development has not yet begun.";
            writeLang("project-hateful").innerHTML = "Hateful (On hold)";
            writeLang("project-hateful-description").innerHTML = "The project has been submitted as a Graduation game project. The project was not completed due to the scope of the original plan. The game is on indefinite hold for development. The game features older retro themed graphics and a horror atmosphere.";
            writeLang("project-lukashos").innerHTML = "Lukash Desktop (WM Configuration)";
            writeLang("project-lukashos-description").innerHTML = "This is an archive of changes and configurations to the standalone BSPWM desktop environment for Linux systems. Suitable for systems installed on USB flash drives or other computers with weaker hardware.";
            writeLang("project-wallpapers").innerHTML = "Custom Wallpapers";
            writeLang("project-wallpapers-description").innerHTML = "Wallpapers created by my hand.";
            writeLang("project-website").innerHTML = "This Web";
            writeLang("project-website-description").innerHTML = "The source code of the website you are currently on.";
            writeLang("contact-title").innerHTML = "Contact";
            writeLang("contact-other").innerHTML = "I am able to agree to other forms of contact by appointment. You can download my CV <a href='downloads/urban_cv_en.pdf' class='text-normal-red underline'>here</a>.";
            writeLang("contact-mail").innerHTML = "I can be contacted via my email address <a onclick='show_notification(`E-Mail: <a href=mailto:lukas.urbann@seznam.cz>lukas.urbann@seznam.cz</a>`)' class='underline text-normal-red cursor-pointer text-sm md:text-xl'>here</a>";
            writeLang("text-thats-me").innerHTML = "That's me";
            writeLang("notification-close").innerHTML = "Close";
            flag_cz.classList.remove("active-btn");
            flag_en.classList.add("active-btn");
            break;
        case "cz":
            setCookie("language", "cz", 7);
            writeLang("nav-btn-text-intro").innerHTML = "Úvod";
            writeLang("nav-btn-text-portfolio").innerHTML = "Portfólio";
            writeLang("nav-btn-text-about").innerHTML = "O mně";
            writeLang("nav-btn-text-contact").innerHTML = "Kontakt";
            writeLang("text-portfolio").innerHTML = "Vítej na mém portfóliu.";
            writeLang("text-intro-about").innerHTML = "<span class='text-normal-red'>Věnuji se tvorbě videoher</span> a videohernímu designu. <span class='text-normal-red'>Je to má vášeň,</span> kterou si pěstuji od svého dětství.";
            writeLang("text-creds").innerHTML = "Web byl vytvořen bez předlohy. Použité obrázky z webu <a class='text-normal-red' href='https://unsplash.com'>unsplash</a>. Kód webu je veřejně dostupný. Použité technologie webu jsou vypsané na repozitáři.";
            writeLang("text-about-me").innerHTML = "O mně";
            writeLang("text-about-age").innerHTML = "Jsem devatenáctiletý student.";
            writeLang("text-about-prof").innerHTML = "Studuji obor Softwarového inženýra.";
            writeLang("text-about-philosophy").innerHTML = "Rád šířím filozofii otevřeného a svobodného softwaru.";
            writeLang("text-about-objective").innerHTML = "Zaměřuji se primárně na tvorbu a design videoher.";
            writeLang("text-about-interest").innerHTML = "Zajímám se o kyberbezpečnost.";
            writeLang("text-about-cv").innerHTML = "Moje <a href='downloads/urban_cv_cz.pdf' class='text-normal-red underline'>CV</a> ke stažení zde.";
            writeLang("text-about-yt-main").innerHTML = "Vlastním youtube kanál.";
            writeLang("text-about-yt-info").innerHTML = "Nabízím technický obsah tvořený pro mladistvé publikum.";
            writeLang("text-about-yt-tainment").innerHTML = "Obsah slouží jako <a href='https://cs.wikipedia.org/wiki/Infotainment' class='text-normal-red underline'>infotainment</a>.";
            writeLang("text-my-projects").innerHTML = "Moje<br>projekty";
            writeLang("project-morality-abyss").innerHTML = "Morality Abyss";
            writeLang("project-morality-abyss-description").innerHTML = "Projekt vznikl v roce 2020 jako úkol do školy. Jedná se o horrorovou 3D hru inspirovanou indie klasikou 'Slender: The Eight Pages'. Herní příběh má slabě komedický základ.";
            writeLang("project-farm-escapade").innerHTML = "Farmářská eskapáda";
            writeLang("project-farm-escapade-description").innerHTML = "Jedna z mých nejoblíbenějších her. Hráč se ocitne v roli farmáře na potrhlé farmě, kde musí za doprovodu časového omezení stihnout vydělat co nejvíce peněz a zasadit co nejvíc rostlin.";
            writeLang("project-starfighter").innerHTML = "Starfighter";
            writeLang("project-starfighter-description").innerHTML = "Jeden z mých nejstarších projektu. Jedná se o moderní interpretaci herní klasiky 'Space Invaders'. Hra obsahuje vlastní obchod a nekonečný herní mód.";
            writeLang("project-drainage").innerHTML = "Drainage (Koncept)";
            writeLang("project-drainage-description").innerHTML = "Koncept krátké příběhové hry fungující na základě silné atmosféry. Její plný vývoj ještě nebyl zahájen.";
            writeLang("project-hateful").innerHTML = "Hateful (Pozastavený)";
            writeLang("project-hateful-description").innerHTML = "Projekt byl odevzdán jako Maturitní práce. Projekt nebyl dokončen vzhledem k rozsahu původního plánu. Hra je na dobu neurčitou ve fázi pozdržení vývoje. Hra disponuje starší retro tématickou grafiku a hororovou atmosféru.";
            writeLang("project-lukashos").innerHTML = "Lukash Desktop (WM Konfigurace)";
            writeLang("project-lukashos-description").innerHTML = "Jedná se o archív změn a konfigurací samostatně fungujícího desktop prostředí BSPWM pro Linuxové systémy. Vhodné pro systémy nainstalované na USB flash discích čí jiné počítače se slabším hardwarem.";
            writeLang("project-wallpapers").innerHTML = "Vlastní Tapety";
            writeLang("project-wallpapers-description").innerHTML = "Tapety vytvořené mojí rukou.";
            writeLang("project-website").innerHTML = "Tento Web";
            writeLang("project-website-description").innerHTML = "Zdrojový kód webu, na kterém se právě nacházíte.";
            writeLang("contact-title").innerHTML = "Kontakt";
            writeLang("contact-other").innerHTML = "Na jiné formy kontaktu jsem schopen přistoupit po domluvě. <a href='downloads/urban_cv_cz.pdf' class='text-normal-red underline'>CV</a> ke stažení zde.";
            writeLang("contact-mail").innerHTML = "Je možné mě kontaktovat skrze moji e-mailovou adresu <a onclick='show_notification(`E-Mail: <a href=mailto:lukas.urbann@seznam.cz>lukas.urbann@seznam.cz</a>`)' class='underline text-normal-red cursor-pointer text-sm md:text-xl'>zde</a>.";
            writeLang("text-thats-me").innerHTML = "To jsem já";
            writeLang("notification-close").innerHTML = "Zavřít";
            flag_en.classList.remove("active-btn");
            flag_cz.classList.add("active-btn");
            break;
    }
}

function writeLang(id)
{
    return document.getElementById(id);
}

window.onload = function()
{
    switch(getCookie("language"))
    {
        case "en":
            changeLang("en");
        break;
        case "cz":
            changeLang("cz");
        break;
        default:
            changeLang("en");
        break;
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++)
    {
      let c = ca[i];

      while (c.charAt(0) == ' ')
      {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0)
      {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}