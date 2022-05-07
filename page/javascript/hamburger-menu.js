var menu = document.getElementById("nav-menu");
var menu_button = document.getElementById("nav-menu-button");

function toggleMenu()
{
  if(menu.classList.contains('responsive-show'))
  {
    menu.classList.add('responsive-hide');
    setTimeout(() => menu.classList.remove('responsive-show', 'responsive-hide'), 150);
    menu_button.classList.remove("active-btn");
  }
  else
  {
    menu.classList.toggle("responsive-show");
    menu_button.classList.add("active-btn");
  }
}