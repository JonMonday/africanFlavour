document.addEventListener("click" , e=>{

    const burger = document.getElementById('burger');
    const navLink = document.getElementById('nav-link');
    const firstArticle = document.getElementById('first-article');

    if (e.target === burger) {
        linkToggle();
    }
        
    function linkToggle(){
        if(navLink.classList.length === 0 || navLink.classList.contains('disable')){
            navLink.classList.remove('disable');
            navLink.classList.add('active');   
            firstArticle.classList.add('srink-article');
            firstArticle.classList.remove('expand-article');     
        }
        else if (navLink.classList.contains('active')) {
            navLink.classList.remove('active');
            navLink.classList.add('disable');
            firstArticle.classList.remove('srink-article');
            firstArticle.classList.add('expand-article');  
        }
        
    }


})