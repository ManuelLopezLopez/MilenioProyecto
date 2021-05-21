window.onload = function () {
    // Variables
    const IMAGENES = [
        '../../img/carrousel/Gincana/1.jpg',
        '../../img/carrousel/Gincana/2.jpg',
        '../../img/carrousel/Gincana/3.jpg',
        '../../img/carrousel/Gincana/4.jpg',
        '../../img/carrousel/Gincana/5.jpg',
        '../../img/carrousel/Gincana/6.jpg',
        '../../img/carrousel/Gincana/7.jpg',
        '../../img/carrousel/Gincana/8.jpg',
        '../../img/carrousel/Gincana/9.jpg',
        '../../img/carrousel/Gincana/10.jpg',
        '../../img/carrousel/Gincana/11.jpg',
        '../../img/carrousel/Gincana/12.jpg',
        '../../img/carrousel/Gincana/13.jpg',
        '../../img/carrousel/Gincana/14.jpg',
        '../../img/carrousel/Gincana/15.jpg',
        '../../img/carrousel/Gincana/16.jpg',
        '../../img/carrousel/Gincana/17.jpg',
        '../../img/carrousel/Gincana/18.jpg',
        '../../img/carrousel/Gincana/19.jpg',
        '../../img/carrousel/Gincana/20.jpg',
        '../../img/carrousel/Gincana/21.jpg',
        '../../img/carrousel/Gincana/22.jpg',
        '../../img/carrousel/Gincana/23.jpg',
        '../../img/carrousel/Gincana/24.jpg',
        '../../img/carrousel/Gincana/25.jpg',
        '../../img/carrousel/Gincana/26.jpg',
        '../../img/carrousel/Gincana/27.jpg',
        '../../img/carrousel/Gincana/28.jpg',
        '../../img/carrousel/Gincana/29.jpg',
        '../../img/carrousel/Gincana/30.jpg',
        '../../img/carrousel/Gincana/31.jpg',
        '../../img/carrousel/Gincana/32.jpg',
        '../../img/carrousel/Gincana/33.jpg',
        '../../img/carrousel/Gincana/34.jpg',
        '../../img/carrousel/Gincana/35.jpg',
        '../../img/carrousel/Gincana/36.jpg',
        '../../img/carrousel/Gincana/37.jpg',
        '../../img/carrousel/Gincana/38.jpg',
        '../../img/carrousel/Gincana/39.jpg',
        '../../img/carrousel/Gincana/40.jpg',
        '../../img/carrousel/Gincana/41.jpg',
        '../../img/carrousel/Gincana/42.jpg',
        '../../img/carrousel/Gincana/43.jpg',
        '../../img/carrousel/Gincana/44.jpg',
        '../../img/carrousel/Gincana/45.jpg',
        '../../img/carrousel/Gincana/46.jpg',
        '../../img/carrousel/Gincana/47.jpg',
        '../../img/carrousel/Gincana/48.jpg',
        '../../img/carrousel/Gincana/49.jpg',
        '../../img/carrousel/Gincana/50.jpg',
        '../../img/carrousel/Gincana/51.jpg',
        '../../img/carrousel/Gincana/52.jpg',
        '../../img/carrousel/Gincana/53.jpg',

    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}
