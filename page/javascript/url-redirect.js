let currentLocation = window.location.href;
let oldUrl = 'lukas-urbann.github.io';
let redirectUrl = 'https://www.urban-lukas.cz';

if (currentLocation.includes(oldUrl)) {
    window.location.replace(redirectUrl);
}