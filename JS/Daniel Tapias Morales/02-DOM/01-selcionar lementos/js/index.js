(function(){
    const nomeUsuario = "Michael"
    //document.querySelector(".top-bar p").textContent = "Bem-vindo(a) " + nomeUsuario;
    const elemento = document.querySelector(".top-bar p")
    //elemento.textContent = "Bem-vindo(a), " + nomeUsuario
    //elemento.textContent = elemento.textContent + nomeUsuario
    //elemento.textContent += nomeUsuario;
    elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
})();


