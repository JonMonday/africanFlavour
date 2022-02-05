function services(){
    var terms1 = document.getElementById("terms1")
    if(terms1.classList.contains("visible")){
        terms1.classList.remove("visible")
    }
    else{
        terms1.classList.add("visible")
    }
}

function policies(){
    console.log("jdjdjjd")
    var terms2 = document.getElementById("terms2")
    if(terms2.classList.contains("visible")){
        terms2.classList.remove("visible")
    }
    else{
        terms2.classList.add("visible")
    }
}



function submit(){
    var data = new Array.from(document.querySelectorAll('#form input')).reduce((acc, input) => ({...acc, [input.name]: input.value}), {}); 
    console.log(data)
}
