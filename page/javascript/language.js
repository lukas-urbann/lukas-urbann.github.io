const flag_cz = document.getElementById("flag-cz");
const flag_en = document.getElementById("flag-en");

const en = {
    "nav-btn-text-intro": "Intro",
    "nav-btn-text-portfolio": "Portfolio",
    "nav-btn-text-about": "About me",
    "nav-btn-text-contact": "Contact",
    "text-portfolio": "Welcome to my<br>portfolio.",
    "text-intro-about": "I am a <span class='text-normal-red'>video game designer</span> and developer. It's a <span class='text-normal-red'>passion of mine</span> that I've been cultivating since I was a kid.",
    "text-creds": "Used images are from <a class='text-normal-red' href='https://unsplash.com'>unsplash</a>. The code is publicly available. Web technologies used are listed on the repository.",
    "text-about-me": "About me",
    "text-about-1": "I'm a 21-year-old student.",
    "text-about-2": "I focus on creating video games and video game assets.",
    "text-about-3": "I study Bachelor of Software Engineering at <a href='https://fai.utb.cz/'>UTB</a>.",
    "text-about-4": "I created my first game at the age of 6 in GameMaker.",
    "text-about-5": "I specialize in C# programming.",
    "text-about-6": "I have excellent communication and teamwork skills.",
    "text-about-7": "I have been working with Polyperfect for a long time - a leading creator of game assets.",
    "text-about-8": "I am very flexible and adapt easily to new situations.",
    "text-about-9": "I fit well into a team and contribute to a positive working atmosphere.",
    "text-about-10": "I am open to collaboration and accept commissions.",
    "text-my-projects": "Projects<br>I worked on",
    "project-morality-abyss": "Morality Abyss",
    "project-morality-abyss-description": "The project was created in 2020 as a school assignment. It is a 3D horror game inspired by the indie classic 'Slender: The Eight Pages'. The game's story has a faintly comedic basis.",
    "project-farm-escapade": "Farm Escapade",
    "project-farm-escapade-description": "One of my favorite games. The player finds himself in the role of a farmer on a wacky farm, where he must manage to make as much money and plant as many plants as possible while under time constraints.",
    "project-starfighter": "Starfighter",
    "project-starfighter-description": "One of my oldest projects. This is a modern interpretation of the game classic 'Space Invaders'. The game features a custom shop and an endless game mode.",
    "project-hateful": "Hateful (Project on hold)",
    "project-hateful-description": "The project has been submitted as a Graduation game project. The project was not completed due to the scope of the original plan. The game is on indefinite hold for development. The game features older retro themed graphics and a horror atmosphere.",
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
    "project-wallpapers-description": "You can view some wallpapers that are of my creation. There are not many, but some may like them.",
    "project-polylithic": "Polylithic",
    "project-polylithic-description": "The Polylithic is an atmospheric 3rd person crafting survival set in the Paleolithic/Neolithic era where the player crafts items, unlocks technology, discovers the world, builds bases, and can either grow the tribe and command the settlement or play the game solo.",
    "project-fff": "FFF",
    "project-fff-description": "Friends Friends Friends or FFF for short is a funny game about friendship, family, and fun. You are a newly elected space emperor, and your goal is to make everyone your friend. Even if they don't want to be. You will travel through the vast expanse of space, spreading your kindness to anyone. ",
    "project-dvzscm": "A day in the life of a real Czech man",
    "project-dvzscm-description": "A Day in the Life of an Average Czech Guy takes you on a journey through the ordinary joys and worries of an ordinary guy. Wake up in the pub where you spend most of your time.",
    "project-chaloupka": "Gretel and Hansel",
    "project-chaloupka-description": "Deep in the impenetrable forest, in the eerie shadow of a gingerbread house, two children were lost. To have a chance to save themselves, their only hope is to reunite in the maze of forest paths and trails. But there are many dangers lurking in the gloom of the forest. In her flying mortar, Baba Yaga traverses the skies above the forest, while her wicked servants scour every nook and cranny. Will Hansel and Gretel be reunited?",
    "project-low-poly-fantasy-pack": "Low Poly Animated Fantasy Creatures",
    "project-low-poly-fantasy-pack-description": "Asset pack of high quality low-poly animated creatures ready for use in Unity3D. Created by Polyperfect",
    "contact-title": "Contact",
    "contact-work": "Interested? <a href='page/html/form.html' class='text-normal-red underline'>Let's work together!</a>",
    "contact-mail": "I can be contacted via my email address <a onclick='show_notification(`E-Mail: <a href=mailto:kontakt@urban-lukas.cz>kontakt@urban-lukas.cz</a>`)' class='underline text-normal-red cursor-pointer text-sm md:text-xl'>here</a>",
    "text-thats-me": "That's me",
    "notification-close": "Close",
    "warning-small-window": "The window is too small!",
    "flag-tooltip-en": "English Version",
    "flag-tooltip-cz": "Czech Version",
    "form-send": "Send",
    "form-header": "Contact Form",
    "form-name": "&nbsp;Name",
    "form-email": "&nbsp;E-Mail",
    "form-message": "&nbsp;Message",
    "form-back": "&nbsp;Return to Main Page",
    "form-error-header": "Incorrectly filled out form!",
    "form-error-name": "The name is invalid.",
    "form-error-email": "E-Mail address is invalid.",
    "form-error-message": "The message must be no less than 10 characters.",
    "form-error-back": "Back",
    "form-error-general": "Incorrect data found.",
    "form-error-text": "Please correct the incorrect information and resubmit the form.",
}

const cz = {
    "nav-btn-text-intro": "Úvod",
    "nav-btn-text-portfolio": "Portfólio",
    "nav-btn-text-about": "O mně",
    "nav-btn-text-contact": "Kontakt",
    "text-portfolio": "Vítej na<br>mém portfóliu.",
    "text-intro-about": "<span class='text-normal-red'>Věnuji se tvorbě videoher</span> a videohernímu designu. <span class='text-normal-red'>Je to má vášeň,</span> kterou si pěstuji od svého dětství.",
    "text-creds": "Použité obrázky z webu <a class='text-normal-red' href='https://unsplash.com'>unsplash</a>. Kód webu je veřejně dostupný. Použité technologie webu jsou vypsané na repozitáři.",
    "text-about-me": "O mně",
    "text-about-1": "Jsem 21-letý student, programátor.",
    "text-about-2": "Zaměřuji se na tvorbu video her a videoherních assetů.",
    "text-about-3": "Studuji bakalářský obor Softwarového inženýra na <a href='https://fai.utb.cz/' class='text-normal-red underline'>UTB</a>.\n",
    "text-about-4": "Svou první hru jsem vytvořil v 6 letech v GameMakeru 8.",
    "text-about-5": "Specializuji se na programování v jazyce C#.",
    "text-about-6": "Disponuji vynikajícími komunikačními a týmovými schopnostmi.",
    "text-about-7": "Dlouhodobě spolupracuji s firmou PolyPerfect, která je předním tvůrcem herních assetů.",
    "text-about-8": "Jsem velmi flexibilní a snadno se přizpůsobuji novým situacím.",
    "text-about-9": "Dobře zapadám do kolektivu a přispívám k pozitivní pracovní atmosféře.",
    "text-about-10": "Jsem otevřený spolupráci a přijímám zakázky.",
    "text-my-projects": "Projekty,<br>na kterých<br>jsem pracoval",
    "project-morality-abyss": "Morality Abyss",
    "project-morality-abyss-description": "Projekt vznikl v roce 2020 jako úkol do školy. Jedná se o horrorovou 3D hru inspirovanou indie klasikou 'Slender: The Eight Pages'. Herní příběh má slabě komedický základ.",
    "project-farm-escapade": "Farmářská eskapáda",
    "project-farm-escapade-description": "Jedna z mých nejoblíbenějších her. Hráč se ocitne v roli farmáře na potrhlé farmě, kde musí za doprovodu časového omezení stihnout vydělat co nejvíce peněz a zasadit co nejvíc rostlin.",
    "project-starfighter": "Starfighter",
    "project-starfighter-description": "Jeden z mých nejstarších projektu. Jedná se o moderní interpretaci herní klasiky 'Space Invaders'. Hra obsahuje vlastní obchod a nekonečný herní mód.",
    "project-hateful": "Hateful (Pozastavený vývoj)",
    "project-hateful-description": "Projekt byl odevzdán jako Maturitní práce. Projekt nebyl dokončen vzhledem k rozsahu původního plánu. Hra je na dobu neurčitou ve fázi pozdržení vývoje. Hra disponuje starší retro tématickou grafiku a hororovou atmosféru.",
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
    "project-wallpapers-description": "Můžete si prohlédnout některé tapety, které jsem vytvořil. Není jich mnoho, ale mohou se někomu líbit.",
    "project-polylithic": "Polylithic",
    "project-polylithic-description": "Polylithic se odehrává v dobách pravěku a jde o crafting survival z pohledu třetí osoby s důrazem na správu kmene. Ve hře lovíte, stavíte, odemykáte nové vylepšení, ale zároveň se staráte i o potřeby a štěstí své pravěké rodiny.",
    "project-fff": "FFF",
    "project-fff-description": "FFF je zábavná příběhová idle hra, kde hodně mačkáte klávesu F! Lepší název nás bohužel nenapadl. Jste nově zvolený vesmírný císař a vaším cílem je, aby se každý stal vaším přítelem. A to i v případě, že o to nestojí. Budete cestovat rozlehlým vesmírem a šířit svou laskavost ke každému.",
    "project-dvzscm": "Den v životě skutečného českého maníka",
    "project-dvzscm-description": "Hra Den v životě průměrného českého maníka vás vezme na cestu za běžnými radostmi a starostmi obyčejného chlapíka. Probuďte se do hospody, kde trávíte většinu času.",
    "project-chaloupka": "Mařenka a Jeníček",
    "project-chaloupka-description": "Hluboko v neprostupném lese, v hrozivém stínu perníkové chaloupky se ztratily dvě děti. Aby měly šanci se zachránit, je jejich jedinou nadějí se v bludišti lesních stezek a pěšinek znovu setkat. V šeru hvozdu však číhá spousta nebezpečí. Baba Jaga ve svém létajícím hmoždíři brázdí nebe nad lesem, zatímco její zlotřilí služebníci pročesávají každé lesní zákoutí. Podaří se Jeníčkovi a Mařence se znovu shledat?",
    "project-low-poly-fantasy-pack": "Low Poly Animated Fantasy Creatures",
    "project-low-poly-fantasy-pack-description": "Asset pack kvalitních low-poly animovaných bytostí připraven pro použití v Unity3D. Vytvořen společností Polyperfect.",
    "contact-title": "Kontakt",
    "contact-work": "Máte zájem? <a href='page/html/form.html' class='text-normal-red underline'>Pojďme spolupracovat!</a>",
    "contact-mail": "Je možné mě kontaktovat skrze moji e-mailovou adresu <a onclick='show_notification(`E-Mail: <a href=mailto:kontakt@urban-lukas.cz>kontakt@urban-lukas.cz</a>`)' class='underline text-normal-red cursor-pointer text-sm md:text-xl'>zde</a>.",
    "text-thats-me": "To jsem já",
    "notification-close": "Zavřít",
    "warning-small-window": "Okno je příliš malé!",
    "flag-tooltip-en": "Anglická verze",
    "flag-tooltip-cz": "Česká verze",
    "form-send": "Odeslat",
    "form-header": "Kontaktní formulář",
    "form-name": "&nbsp;Jméno",
    "form-email": "&nbsp;E-Mail",
    "form-message": "&nbsp;Zpráva",
    "form-back": "&nbsp;Zpět na hlavní stránku",
    "form-error-header": "Chybně vyplněný formulář!",
    "form-error-name": "Jméno je neplatné.",
    "form-error-email": "E-Mailová adresa je neplatná.",
    "form-error-message": "Zpráva nesmí mít méně než 10 znaků.",
    "form-error-back": "Zpět",
    "form-error-general": "Nalezeny chybně vyplněné údaje.",
    "form-error-text": "Prosím, opravte špatně zadané údaje a zašlete formulář znovu.",
}

const blank = {
    "nav-btn-text-intro": "",
    "nav-btn-text-portfolio": "",
    "nav-btn-text-about": "",
    "nav-btn-text-contact": "",
    "text-portfolio": "",
    "text-intro-about": "",
    "text-creds": "",
    "text-about-1": "",
    "text-about-2": "",
    "text-about-3": "",
    "text-about-4": "",
    "text-about-5": "",
    "text-about-6": "",
    "text-about-7": "",
    "text-about-8": "",
    "text-about-9": "",
    "text-about-10": "",
    "text-my-projects": "",
    "project-morality-abyss": "",
    "project-morality-abyss-description": "",
    "project-farm-escapade": "",
    "project-farm-escapade-description": "",
    "project-starfighter": "",
    "project-starfighter-description": "",
    "project-hateful": "",
    "project-hateful-description": "",
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
    "project-polylithic": "",
    "project-polylithic-description": "",
    "project-fff": "",
    "project-fff-description": "",
    "project-dvzscm": "",
    "project-dvzscm-description": "",
    "project-chaloupka": "",
    "project-chaloupka-description": "",
    "project-low-poly-fantasy-pack": "",
    "project-low-poly-fantasy-pack-description": "",
    "contact-title": "",
    "contact-work": "",
    "contact-mail": "",
    "text-thats-me": "",
    "notification-close": "",
    "warning-small-window": "",
    "flag-tooltip-en": "",
    "flag-tooltip-cz": "",
    "form-send": "",
    "form-header": "",
    "form-name": "",
    "form-email": "",
    "form-message": "",
    "form-back": "",
    "form-error-header": "",
    "form-error-name": "",
    "form-error-email": "",
    "form-error-message": "",
    "form-error-back": "",
    "form-error-general": "",
    "form-error-text": "",
}

function changeLang(lang) {
    switch (lang) {
        case "en":
            langHandler("en", en)
            if (flag_cz === null || flag_en === null) {
                return;
            }
            flag_cz.classList.remove("active-btn");
            flag_en.classList.add("active-btn");
            break;
        case "cz":
            langHandler("cz", cz);
            if (flag_cz === null || flag_en === null) {
                return;
            }
            flag_en.classList.remove("active-btn");
            flag_cz.classList.add("active-btn");
            break;
        default:
            langHandler("blank", blank);
            if (flag_cz === null || flag_en === null) {
                return;
            }
            flag_en.classList.remove("active-btn");
            flag_cz.classList.remove("active-btn");
            break;
    }
}

function langHandler(lang, langOptions) {
    setCookie("language", lang, 7)

    Object.keys(langOptions).forEach(x => {
        if (writeLang(x) === null) {
            return;
        }
        writeLang(x).innerHTML = langOptions[x]
    })
}

function writeLang(id) {
    return document.getElementById(id);
}

window.onload = function () {
    switch (getCookie("language")) {
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

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}