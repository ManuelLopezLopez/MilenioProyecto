window.onload = function () {
    // Variables
    const IMAGENES = [
        '../../img/carrousel/PuertasdeAcceso/1.jpg',
        '../../img/carrousel/PuertasdeAcceso/2.jpg',
        '../../img/carrousel/PuertasdeAcceso/3.jpg',
        '../../img/carrousel/PuertasdeAcceso/4.jpg',
        '../../img/carrousel/PuertasdeAcceso/5.jpg',
        '../../img/carrousel/PuertasdeAcceso/6.jpg',
        '../../img/carrousel/PuertasdeAcceso/7.jpg',
        '../../img/carrousel/PuertasdeAcceso/8.jpg',
        '../../img/carrousel/PuertasdeAcceso/9.jpg',
        '../../img/carrousel/PuertasdeAcceso/10.jpg',
        '../../img/carrousel/PuertasdeAcceso/11.jpg',
        '../../img/carrousel/PuertasdeAcceso/12.jpg',
        '../../img/carrousel/PuertasdeAcceso/13.jpg',
        '../../img/carrousel/PuertasdeAcceso/14.jpg',
        '../../img/carrousel/PuertasdeAcceso/15.jpg',
        '../../img/carrousel/PuertasdeAcceso/16.jpg',
        '../../img/carrousel/PuertasdeAcceso/17.jpg',
        '../../img/carrousel/PuertasdeAcceso/18.jpg',
        '../../img/carrousel/PuertasdeAcceso/19.jpg',
        '../../img/carrousel/PuertasdeAcceso/20.jpg',
        '../../img/carrousel/PuertasdeAcceso/21.jpg',
        '../../img/carrousel/PuertasdeAcceso/22.jpg',
        '../../img/carrousel/PuertasdeAcceso/23.jpg',
        '../../img/carrousel/PuertasdeAcceso/24.jpg',
        '../../img/carrousel/PuertasdeAcceso/25.jpg',
        '../../img/carrousel/PuertasdeAcceso/26.jpg',
        '../../img/carrousel/PuertasdeAcceso/27.jpg',
        '../../img/carrousel/PuertasdeAcceso/28.jpg',
        '../../img/carrousel/PuertasdeAcceso/29.jpg',
        '../../img/carrousel/PuertasdeAcceso/30.jpg',
        '../../img/carrousel/PuertasdeAcceso/31.jpg',
        '../../img/carrousel/PuertasdeAcceso/32.jpg',
        '../../img/carrousel/PuertasdeAcceso/33.jpg',
        '../../img/carrousel/PuertasdeAcceso/34.jpg',
        '../../img/carrousel/PuertasdeAcceso/35.jpg',
        '../../img/carrousel/PuertasdeAcceso/36.jpg',
        '../../img/carrousel/PuertasdeAcceso/37.jpg',
        '../../img/carrousel/PuertasdeAcceso/38.jpg',
        '../../img/carrousel/PuertasdeAcceso/39.jpg',
        '../../img/carrousel/PuertasdeAcceso/40.jpg',
        '../../img/carrousel/PuertasdeAcceso/41.jpg',
        '../../img/carrousel/PuertasdeAcceso/42.jpg',
        '../../img/carrousel/PuertasdeAcceso/43.jpg',
        '../../img/carrousel/PuertasdeAcceso/44.jpg',
        '../../img/carrousel/PuertasdeAcceso/45.jpg',


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
