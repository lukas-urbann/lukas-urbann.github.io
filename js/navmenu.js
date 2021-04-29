function hamburgerMenu()
{
  var menu = document.getElementById("nav-menu");
  var menu_icon = document.getElementById("hamburger-menu-icon");

  if(menu.classList.contains('responsive-show'))
  {
    menu.classList.add('responsive-hide');
    setTimeout(() => menu.classList.remove('responsive-show', 'responsive-hide'), 150);
  }
  else
  {
    menu.classList.toggle("responsive-show");
  }

  if(menu_icon.classList.contains('fa-bars'))
  {
    menu_icon.classList.add('fa-times');
    menu_icon.classList.remove('fa-bars');
  }
  else
  {
    menu_icon.classList.remove('fa-times');
    menu_icon.classList.add('fa-bars');
  }
}