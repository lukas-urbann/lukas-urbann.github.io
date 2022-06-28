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