document.addEventListener("click" , e=>{

    const burger = document.getElementById('burger');
    const navLink = document.getElementById('nav-link');

    if (e.target === burger) {
        linkToggle();
    }
        
    function linkToggle(){
        if(navLink.classList.length === 0 || navLink.classList.contains('disable')){
            navLink.classList.remove('disable');
            navLink.classList.add('active');        
        }
        else if (navLink.classList.contains('active')) {
            navLink.classList.remove('active');
            navLink.classList.add('disable');
        }
        
    }


})