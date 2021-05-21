window.onload = function () {
    // Variables
    const IMAGENES = [
        '../../img/carrousel/CIPV/1.jpg',
        '../../img/carrousel/CIPV/2.jpg',
        '../../img/carrousel/CIPV/3.jpg',
        '../../img/carrousel/CIPV/4.jpg',
        '../../img/carrousel/CIPV/5.jpg',
        '../../img/carrousel/CIPV/6.jpg',
        '../../img/carrousel/CIPV/7.jpg',
        '../../img/carrousel/CIPV/8.jpg',
        '../../img/carrousel/CIPV/9.jpg',
        '../../img/carrousel/CIPV/10.jpg',
        '../../img/carrousel/CIPV/11.jpg',
        '../../img/carrousel/CIPV/12.jpg',
        '../../img/carrousel/CIPV/13.jpg',
        '../../img/carrousel/CIPV/14.jpg',
        '../../img/carrousel/CIPV/15.jpg',
        '../../img/carrousel/CIPV/16.jpg',
        '../../img/carrousel/CIPV/17.jpg',
        '../../img/carrousel/CIPV/18.jpg',
        '../../img/carrousel/CIPV/19.jpg',
        '../../img/carrousel/CIPV/20.jpg',
        '../../img/carrousel/CIPV/21.jpg',
        '../../img/carrousel/CIPV/22.jpg',
        '../../img/carrousel/CIPV/23.jpg',
        '../../img/carrousel/CIPV/24.jpg',
        '../../img/carrousel/CIPV/25.jpg',
        '../../img/carrousel/CIPV/26.jpg',
        '../../img/carrousel/CIPV/27.jpg',
        '../../img/carrousel/CIPV/28.jpg',
        '../../img/carrousel/CIPV/29.jpg',
        '../../img/carrousel/CIPV/30.jpg',
        '../../img/carrousel/CIPV/31.jpg',
        '../../img/carrousel/CIPV/32.jpg',
        '../../img/carrousel/CIPV/33.jpg',
        '../../img/carrousel/CIPV/34.jpg',
        '../../img/carrousel/CIPV/35.jpg',
        '../../img/carrousel/CIPV/36.jpg',
        '../../img/carrousel/CIPV/37.jpg',
        '../../img/carrousel/CIPV/38.jpg',
        '../../img/carrousel/CIPV/39.jpg',
        '../../img/carrousel/CIPV/40.jpg',
        '../../img/carrousel/CIPV/41.jpg',
        '../../img/carrousel/CIPV/42.jpg',
        '../../img/carrousel/CIPV/43.jpg',
        '../../img/carrousel/CIPV/44.jpg',
        '../../img/carrousel/CIPV/45.jpg',
        '../../img/carrousel/CIPV/46.jpg',
        '../../img/carrousel/CIPV/47.jpg',
        '../../img/carrousel/CIPV/48.jpg',
        '../../img/carrousel/CIPV/49.jpg',
        '../../img/carrousel/CIPV/50.jpg',
        '../../img/carrousel/CIPV/51.jpg',
        '../../img/carrousel/CIPV/52.jpg',
        '../../img/carrousel/CIPV/53.jpg',
        '../../img/carrousel/CIPV/54.jpg',
        '../../img/carrousel/CIPV/55.jpg',
        '../../img/carrousel/CIPV/56.jpg',
        '../../img/carrousel/CIPV/57.jpg',
        '../../img/carrousel/CIPV/58.jpg',
        '../../img/carrousel/CIPV/59.jpg',
        '../../img/carrousel/CIPV/60.jpg',
        '../../img/carrousel/CIPV/61.jpg',
        '../../img/carrousel/CIPV/62.jpg',
        '../../img/carrousel/CIPV/63.jpg',
        '../../img/carrousel/CIPV/64.jpg',
        '../../img/carrousel/CIPV/65.jpg',

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
