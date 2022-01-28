function menuToggle() {
    var menuButton = document.getElementById('menu');
    var nav = document.getElementById('nav');
    var top = document.getElementById('top');
    if(menuButton.classList.contains('Notclicked')){
        menuButton.classList.remove('Notclicked');
        menuButton.classList.add('clicked');

        top.classList.add('hidden');
        top.classList.remove('visible');

        nav.classList.add('visibleMenu');
        nav.classList.remove('hiddenMenu');

        menuButton.innerText = 'Close';
    }
    else if (menuButton.classList.contains('clicked')){
        menuButton.classList.remove('clicked');
        menuButton.classList.add('Notclicked');

        top.classList.add('visible');
        top.classList.remove('hidden');

        nav.classList.add('hiddenMenu');
        nav.classList.remove('visibleMenu');

        menuButton.innerText = 'Menu';
    }
}