function hamburgerMenu()
{
  var menu = document.getElementById("nav-menu");
  var menu_icon = document.getElementById("hamburger-menu-icon");

  if(menu.classList.contains('responsive-show'))
  {
    menu.classList.add('responsive-hide');
    setTimeout(() => menu.classList.remove('responsive-show', 'responsive-hide'), 150);
    menu_icon.classList.add('fa-bars');
    menu_icon.classList.remove('fa-times');
  }
  else
  {
    menu.classList.toggle("responsive-show");
    menu_icon.classList.add('fa-times');
    menu_icon.classList.remove('fa-bars');
  }
}