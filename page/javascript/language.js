var flag_cz = document.getElementById("flag-cz");
var flag_en = document.getElementById("flag-en");

const lang = "en"

const en = {
    "nav-btn-text-intro": "Introduction",
    "nav-btn-text-portfolio": "Portfolio",
    "nav-btn-text-about": "About me",
    "nav-btn-text-contact": "Contact",
    "text-portfolio": "Welcome to my<br>portfolio.",
    "text-intro-about": "I am a <span class='text-normal-red'>video game designer</span> and developer. It's a <span class='text-normal-red'>passion of mine</span> that I've been cultivating since I was a kid.",
    "text-creds": "The website was created without a template. Used images are from <a class='text-normal-red' href='https://unsplash.com'>unsplash</a>. The code is publicly available. Web technologies used are listed on the repository.",
    "text-about-me": "About me",
    "text-about-age": "I'm a 20-year-old student.",
    "text-about-prof": "I'm a software engineer.",
    "text-about-philosophy": "I like to spread the philosophy of open and free software.",
    "text-about-objective": "My primary focus is on video game development and design",
    "text-about-interest": "I am interested in cybersecurity.",
    "text-about-cv": "My <a href='downloads/urban_cv_en.pdf' class='text-normal-red underline'>CV</a> download here.",
    "text-about-yt-main": "I own a youtube channel",
    "text-about-yt-info": "I offer technical content created for a teenage audience.",
    "text-about-yt-tainment": "The content serves as <a href='https://en.wikipedia.org/wiki/Infotainment' class='text-normal-red underline'>infotainment</a>.",
    "text-my-projects": "My<br>projects",
    "project-morality-abyss": "Morality Abyss",
    "project-morality-abyss-description": "The project was created in 2020 as a school assignment. It is a 3D horror game inspired by the indie classic 'Slender: The Eight Pages'. The game's story has a faintly comedic basis.",
    "project-farm-escapade": "Farm Escapade",
    "project-farm-escapade-description": "One of my favorite games. The player finds himself in the role of a farmer on a wacky farm, where he must manage to make as much money and plant as many plants as possible while under time constraints.",
    "project-starfighter": "Starfighter",
    "project-starfighter-description": "One of my oldest projects. This is a modern interpretation of the game classic 'Space Invaders'. The game features a custom shop and an endless game mode.",
    "project-hateful": "Hateful (Project on hold)",
    "project-hateful-description": "The project has been submitted as a Graduation game project. The project was not completed(YET) due to the scope of the original plan. The game is on indefinite hold for development. The game features older retro themed graphics and a horror atmosphere.",
    "project-dotfiles": "Lukash Desktop (WM Configuration)",
    "project-dotfiles-description": "This is an archive of changes and configurations to the standalone BSPWM desktop environment for Linux systems. Suitable for systems installed on USB flash drives or other computers with weaker hardware.",
    "project-steel-nemesis": "Steel Nemesis",
    "project-steel-nemesis-description": "Steel Nemesis is a game based on an earlier project of mine called \"Starfighter\". In the game you find yourself in the cockpit of a spaceship shooting through endless waves of enemies. The game is supposed to have a lot more content in its full version. The game is in development.",
    "project-scary-horror-game": "Scary Horror Game",
    "project-scary-horror-game-description": "The game was created as a monthly project for GitHub Game-Jam called 'Game Off 2022', the theme of which was cli-ché. The work is a group project and the code is open-source. The project repository is located on my GitHub. In the game, you put yourself in the shoes of a student working on homework when - in it - everyone from your house disappears.",
    "project-pixel-pong": "Pixel Pong",
    "project-pixel-pong-description": "An old project I created around 2017 for my high school admissions. The game is created in GameMaker Studio engine. The game is an easily modifiable recreation of a game concept called 'Pong'. I have posted the source code of this project on my GitHub.",
    "project-endless-driver": "Endless Driver",
    "project-endless-driver-description": "A game I created as a school project. The game is very simple in concept and has a very small number of scripts. It can be compared to Google's dinosaur game. In the game, you control a car, trying to drive as far as possible without hitting an obstacle.",
    "project-website": "This Website",
    "project-website-description": "You can view this website's source-code if you wish to - it is available on my GitHub.",
    "project-wallpapers": "Custom Wallpapers",
    "project-wallpapers-description": "You can view some wallpapers that are of my creation.",
    "contact-title": "Contact",
    "contact-other": "I am able to agree to other forms of contact by appointment.",
    "contact-mail": "I can be contacted via my email address <a onclick='show_notification(`E-Mail: <a href=mailto:lukas.urbann@seznam.cz>lukas.urbann@seznam.cz</a>`)' class='underline text-normal-red cursor-pointer text-sm md:text-xl'>here</a>",
    "text-thats-me": "That's me",
    "notification-close": "Close",
    "warning-small-window": "The window is too small!",
}

const cz = {
    "nav-btn-text-intro": "Úvod",
    "nav-btn-text-portfolio": "Portfólio",
    "nav-btn-text-about": "O mně",
    "nav-btn-text-contact": "Kontakt",
    "text-portfolio": "Vítej na<br>mém portfóliu.",
    "text-intro-about": "<span class='text-normal-red'>Věnuji se tvorbě videoher</span> a videohernímu designu. <span class='text-normal-red'>Je to má vášeň,</span> kterou si pěstuji od svého dětství.",
    "text-creds": "Web byl vytvořen bez předlohy. Použité obrázky z webu <a class='text-normal-red' href='https://unsplash.com'>unsplash</a>. Kód webu je veřejně dostupný. Použité technologie webu jsou vypsané na repozitáři.",
    "text-about-me": "O mně",
    "text-about-age": "Jsem 20-letý student.",
    "text-about-prof": "Studuji obor Softwarového inženýra.",
    "text-about-philosophy": "Rád šířím filozofii otevřeného a svobodného softwaru.",
    "text-about-objective": "Zaměřuji se primárně na tvorbu a design videoher.",
    "text-about-interest": "Zajímám se o kyberbezpečnost.",
    "text-about-cv": "Moje <a href='downloads/urban_cv_cz.pdf' class='text-normal-red underline'>CV</a> ke stažení zde.",
    "text-about-yt-main": "Vlastním youtube kanál.",
    "text-about-yt-info": "Nabízím technický obsah tvořený pro mladistvé publikum.",
    "text-about-yt-tainment": "Obsah slouží jako <a href='https://cs.wikipedia.org/wiki/Infotainment' class='text-normal-red underline'>infotainment</a>.",
    "text-my-projects": "Moje<br>projekty",
    "project-morality-abyss": "Morality Abyss",
    "project-morality-abyss-description": "Projekt vznikl v roce 2020 jako úkol do školy. Jedná se o horrorovou 3D hru inspirovanou indie klasikou 'Slender: The Eight Pages'. Herní příběh má slabě komedický základ.",
    "project-farm-escapade": "Farmářská eskapáda",
    "project-farm-escapade-description": "Jedna z mých nejoblíbenějších her. Hráč se ocitne v roli farmáře na potrhlé farmě, kde musí za doprovodu časového omezení stihnout vydělat co nejvíce peněz a zasadit co nejvíc rostlin.",
    "project-starfighter": "Starfighter",
    "project-starfighter-description": "Jeden z mých nejstarších projektu. Jedná se o moderní interpretaci herní klasiky 'Space Invaders'. Hra obsahuje vlastní obchod a nekonečný herní mód.",
    "project-hateful": "Hateful (Pozastavený vývoj)",
    "project-hateful-description": "Projekt byl odevzdán jako Maturitní práce. Projekt nebyl dokončen(ZATÍM) vzhledem k rozsahu původního plánu. Hra je na dobu neurčitou ve fázi pozdržení vývoje. Hra disponuje starší retro tématickou grafiku a hororovou atmosféru.",
    "project-dotfiles": "Lukash Desktop (WM Konfigurace)",
    "project-dotfiles-description": "Jedná se o archív změn a konfigurací samostatně fungujícího desktop prostředí BSPWM pro Linuxové systémy. Vhodné pro systémy nainstalované na USB flash discích čí jiné počítače se slabším hardwarem.",
    "project-steel-nemesis": "Steel Nemesis",
    "project-steel-nemesis-description": "Steel Nemesis je hra založena na mém starším projektu zvaném \"Starfighter\". Ve hře se ocitnete v kokpitu vesmírné lodě střílející skrze nekonečné vlny nepřátel. Hra má mít ve své plné verzi mnohem více obsahu. Hra je ve vývoji.",
    "project-scary-horror-game": "Strašidelná Horrorová Hra",
    "project-scary-horror-game-description": "Hra byla vytvořena jako měsíční projekt pro GitHub Game-Jam zvaný 'Game Off 2022', jehož téma bylo cli-ché. Práce je skupinová a její kód je open-source. Repozitář projektu se nachází na mém GitHubu. Ve hře se ocitnete v kůži studenta pracujícího na domácích úkolech, když v tom - všichni z vašeho domu zmizí.",
    "project-pixel-pong": "Pixel Pong",
    "project-pixel-pong-description": "Starý projekt, který jsem vytvořil okolo roku 2017 na přijímací řízení mé střední školy. Hra je vytvořena v enginu GameMaker Studio. Hra je lehce modifikovatelná rekreace herního konceptu zvaného 'Pong'. Zdrojový kód tohoto projektu jsem zveřejnil na svém GitHubu.",
    "project-endless-driver": "Endless Driver",
    "project-endless-driver-description": "Hra, kterou jsem vytvořil jako projekt do školy. Hra má velmi jednoduché pojetí a má velmi malý počet skriptů. Dá se přirovnat k dinousaří hře od Googlu. Ve hře ovládáte auto, snažíte se dojet co nejdále a nestrefit při tom překážku.",
    "project-website": "Tento Web",
    "project-website-description": "Můžeš se podívat na zdrojový kód tohoto webu, pokud si přeješ - je dostupný na mém GitHubu.",
    "project-wallpapers": "Vlastní Tapety",
    "project-wallpapers-description": "Můžete si prohlédnout některé tapety, které jsem vytvořil.",
    "contact-title": "Kontakt",
    "contact-other": "Na jiné formy kontaktu jsem schopen přistoupit po domluvě.",
    "contact-mail": "Je možné mě kontaktovat skrze moji e-mailovou adresu <a onclick='show_notification(`E-Mail: <a href=mailto:lukas.urbann@seznam.cz>lukas.urbann@seznam.cz</a>`)' class='underline text-normal-red cursor-pointer text-sm md:text-xl'>zde</a>.",
    "text-thats-me": "To jsem já",
    "notification-close": "Zavřít",
    "warning-small-window": "Okno je příliš malé!",
}

const blank = {
    "nav-btn-text-intro": "",
    "nav-btn-text-portfolio": "",
    "nav-btn-text-about": "",
    "nav-btn-text-contact": "",
    "text-portfolio": "",
    "text-intro-about": "",
    "text-creds": "",
    "text-about-me": "",
    "text-about-age": "",
    "text-about-prof": "",
    "text-about-philosophy": "",
    "text-about-objective": "",
    "text-about-interest": "",
    "text-about-cv": "",
    "text-about-yt-main": "",
    "text-about-yt-info": "",
    "text-about-yt-tainment": "",
    "text-my-projects": "",
    "project-morality-abyss": "",
    "project-morality-abyss-description": "",
    "project-farm-escapade": "",
    "project-farm-escapade-description": "",
    "project-starfighter": "",
    "project-starfighter-description": "",
    "project-hateful": "",
    "project-hateful-description": "",
    "project-dotfiles": "",
    "project-dotfiles-description": "",
    "project-steel-nemesis": "",
    "project-steel-nemesis-description": "",
    "project-scary-horror-game": "",
    "project-scary-horror-game-description": "",
    "project-pixel-pong": "",
    "project-pixel-pong-description": "",
    "project-endless-driver": "",
    "project-endless-driver-description": "",
    "project-website": "",
    "project-website-description": "",
    "project-wallpapers": "",
    "project-wallpapers-description": "",
    "contact-title": "",
    "contact-other": "",
    "contact-mail": "",
    "text-thats-me": "",
    "notification-close": "",
    "warning-small-window": "",
}

function changeLang (lang) {
  switch (lang) {
    case "en":
        langHandler("en", en)
        flag_cz.classList.remove("active-btn");
        flag_en.classList.add("active-btn");
      break;
    case "cz":
        langHandler("cz", cz);
        flag_en.classList.remove("active-btn");
        flag_cz.classList.add("active-btn");
      break;
    default:
        langHandler("blank", blank);
        flag_en.classList.remove("active-btn");
        flag_cz.classList.remove("active-btn");
      break;
  }
}

function langHandler (lang, langOptions) {
  setCookie("language", lang, 7)
  
  Object.keys(langOptions).forEach(x => {
    writeLang(x).innerHTML = langOptions[x]
  })
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