function cambioImagen(valor) {
    document.getElementsByClassName('img1')[0].style.display = "block";
    document.getElementsByClassName('img2')[0].style.display = "block";
    document.getElementsByClassName('textoImagen')[0].style.display = "block";
    document.getElementsByClassName('mapaImg')[0].src = "../img/mapa/mapa/"+ valor +".jpg";
    document.getElementsByClassName('img1')[0].src = "../img/mapa/descripcion/"+ valor +"1.jpg";
    document.getElementsByClassName('img2')[0].src = "../img/mapa/descripcion/"+ valor +"2.jpg";

    if(valor == "inicial" || valor == "puertas"){
        document.getElementsByClassName('img1')[0].style.display = "none";
        document.getElementsByClassName('img2')[0].style.display = "none";
        document.getElementsByClassName('textoImagen')[0].style.display = "none";
    }

}
