var flag_cz = document.getElementById("flag-cz");
var flag_en = document.getElementById("flag-en");

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
            flag_cz.classList.remove("active-btn");
            flag_en.classList.add("active-btn");
            break;
        case "cz":
            setCookie("language", "cz", 7);
            writeLang("nav-btn-text-intro").innerHTML = "Úvod";
            writeLang("nav-btn-text-portfolio").innerHTML = "Portfólio";
            writeLang("nav-btn-text-about").innerHTML = "O mně";
            writeLang("nav-btn-text-contact").innerHTML = "Kontakt";
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