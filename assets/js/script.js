function menuToggle() {
    var menuButton = document.getElementById('menu');
    var nav = document.getElementById('nav');
    var article1 = document.getElementById('article-1');
    if(menuButton.classList.contains('clicked')){
        menuButton.classList.remove('clicked');
        menuButton.innerText = 'Menu';
        nav.classList.remove('visibleMenu');
        article1.classList.remove('hide');
    }
    else {
        menuButton.classList.add('clicked');
        menuButton.innerText = 'Close';
        nav.classList.add('visibleMenu');
        article1.classList.add('hide');
    }
}
