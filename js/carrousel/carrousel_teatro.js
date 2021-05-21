window.onload = function () {
    // Variables
    const IMAGENES = [
        '../../img/carrousel/Teatro/1.jpg',
        '../../img/carrousel/Teatro/2.jpg',
        '../../img/carrousel/Teatro/3.jpg',
        '../../img/carrousel/Teatro/4.jpg',
        '../../img/carrousel/Teatro/5.jpg',
        '../../img/carrousel/Teatro/6.jpg',
        '../../img/carrousel/Teatro/7.jpg',
        '../../img/carrousel/Teatro/8.jpg',
        '../../img/carrousel/Teatro/9.jpg',
        '../../img/carrousel/Teatro/10.jpg',
        '../../img/carrousel/Teatro/11.jpg',
        '../../img/carrousel/Teatro/12.jpg',
        '../../img/carrousel/Teatro/13.jpg',
        '../../img/carrousel/Teatro/14.jpg',
        '../../img/carrousel/Teatro/15.jpg',
        '../../img/carrousel/Teatro/16.jpg',
        '../../img/carrousel/Teatro/17.jpg',
        '../../img/carrousel/Teatro/18.jpg',
        '../../img/carrousel/Teatro/19.jpg',
        '../../img/carrousel/Teatro/20.jpg',
        '../../img/carrousel/Teatro/21.jpg',
        '../../img/carrousel/Teatro/22.jpg',
        '../../img/carrousel/Teatro/23.jpg',
        '../../img/carrousel/Teatro/24.jpg',
        '../../img/carrousel/Teatro/25.jpg',
        '../../img/carrousel/Teatro/26.jpg',
        '../../img/carrousel/Teatro/27.jpg',
        '../../img/carrousel/Teatro/28.jpg',
        '../../img/carrousel/Teatro/29.jpg',
        '../../img/carrousel/Teatro/30.jpg',
        '../../img/carrousel/Teatro/31.jpg',
        '../../img/carrousel/Teatro/32.jpg',
        '../../img/carrousel/Teatro/33.jpg',
        '../../img/carrousel/Teatro/34.jpg',
        '../../img/carrousel/Teatro/35.jpg',
        '../../img/carrousel/Teatro/36.jpg',
        '../../img/carrousel/Teatro/37.jpg',
        '../../img/carrousel/Teatro/38.jpg',
        '../../img/carrousel/Teatro/39.jpg',
        '../../img/carrousel/Teatro/40.jpg',
        '../../img/carrousel/Teatro/41.jpg',
        '../../img/carrousel/Teatro/42.jpg',
        '../../img/carrousel/Teatro/43.jpg',
        '../../img/carrousel/Teatro/44.jpg',
        '../../img/carrousel/Teatro/45.jpg',
        '../../img/carrousel/Teatro/46.jpg',
        '../../img/carrousel/Teatro/47.jpg',
        '../../img/carrousel/Teatro/48.jpg',
        '../../img/carrousel/Teatro/49.jpg',
        '../../img/carrousel/Teatro/50.jpg',
        '../../img/carrousel/Teatro/51.jpg',
        '../../img/carrousel/Teatro/52.jpg',
        '../../img/carrousel/Teatro/53.jpg',
        '../../img/carrousel/Teatro/54.jpg',
        '../../img/carrousel/Teatro/55.jpg',
        '../../img/carrousel/Teatro/56.jpg',
        '../../img/carrousel/Teatro/57.jpg',
        '../../img/carrousel/Teatro/58.jpg',
        '../../img/carrousel/Teatro/59.jpg',
        '../../img/carrousel/Teatro/60.jpg',
        '../../img/carrousel/Teatro/61.jpg',
        '../../img/carrousel/Teatro/62.jpg',
        '../../img/carrousel/Teatro/63.jpg',
        '../../img/carrousel/Teatro/64.jpg',
        '../../img/carrousel/Teatro/65.jpg',
        '../../img/carrousel/Teatro/66.jpg',
        '../../img/carrousel/Teatro/67.jpg',
        '../../img/carrousel/Teatro/68.jpg',
        '../../img/carrousel/Teatro/69.jpg',
        '../../img/carrousel/Teatro/70.jpg',
        '../../img/carrousel/Teatro/71.jpg',
        '../../img/carrousel/Teatro/72.jpg',
        '../../img/carrousel/Teatro/73.jpg',
        '../../img/carrousel/Teatro/74.jpg',
        '../../img/carrousel/Teatro/75.jpg',
        

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
