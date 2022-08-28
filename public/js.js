const btnBebidas =  document.querySelector("#btn-bebidas")
btnBebidas.addEventListener("click",function(e){
    e.preventDefault();

    document.getElementById("img-bolos").style.opacity = "0";

});

const btnBolos = document.querySelector("#btn-bolos")
btnBolos.addEventListener("click",function(e){
    e.preventDefault();

    document.getElementById("img-bolos").style.opacity = "1";

});