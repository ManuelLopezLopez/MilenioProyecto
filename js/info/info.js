var arrayInfo = document.getElementsByClassName("showInfo");
var btnCerrar = document.getElementsByClassName("exit");

for(var x = 0; x < arrayInfo.length; x++){
    arrayInfo[x].addEventListener("mouseover", añadirClase);
    btnCerrar[x].addEventListener("click", function (event) { 
        var objetivo = event.currentTarget.classList[1];
        document.getElementsByClassName("showInfo " + objetivo)[0].classList.remove("infoEnabled");
    });
}

function añadirClase(event){
    event.currentTarget.classList.add("infoEnabled");
}