window.onload = function () {
    // Variables
    const IMAGENES = [
        '../../img/carrousel/PuertaMarMusallaAlcazaba/1.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/2.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/3.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/4.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/5.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/6.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/7.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/8.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/9.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/10.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/11.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/12.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/13.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/14.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/15.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/16.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/17.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/18.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/19.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/20.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/21.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/22.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/23.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/24.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/25.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/26.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/27.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/28.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/29.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/30.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/31.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/32.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/33.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/34.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/35.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/36.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/37.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/38.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/39.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/40.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/41.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/42.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/43.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/44.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/45.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/46.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/47.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/48.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/49.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/50.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/51.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/52.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/53.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/54.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/55.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/56.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/57.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/58.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/59.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/60.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/61.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/62.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/63.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/64.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/65.jpg',
        '../../img/carrousel/PuertaMarMusallaAlcazaba/66.jpg',

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
