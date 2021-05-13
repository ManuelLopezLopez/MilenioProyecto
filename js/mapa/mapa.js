function cambioImagen(valor) {
    document.getElementsByClassName('informacion')[0].style.display = "flex";
    document.getElementsByClassName('mapaImg')[0].src = "../img/mapa/mapa/"+ valor +".jpg";
    document.getElementsByClassName('img1')[0].src = "../img/mapa/descripcion/"+ valor +"1.jpg";
    document.getElementsByClassName('img2')[0].src = "../img/mapa/descripcion/"+ valor +"2.jpg";

    if(valor == "inicial" || valor == "puertas" || valor == "puertas_musalla" || valor == "puertas_medina"){
        document.getElementsByClassName('informacion')[0].style.display = "none";

    }

    if(valor == "medina_alcazaba" || valor == "al_mutasin"){
        document.getElementsByClassName('img2')[0].src = "../img/mapa/descripcion/alcazaba2.jpg";
    }

}
