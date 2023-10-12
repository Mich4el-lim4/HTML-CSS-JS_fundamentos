(function(){
    const nomeUsuario = null;
    const elemento = document.querySelector(".top-bar p")
    
    if(nomeUsuario){
        console.log(elemento.textContent)
        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    } else {
        elemento.parentElement.style.display = "none"
    }
    console.log(elemento)
})();


