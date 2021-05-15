function cambioImagen(valor) {
    document.getElementsByClassName('informacion')[0].style.display = "flex";
    document.getElementsByClassName('mapaImg')[0].src = "../img/mapa/mapa/"+ valor +".jpg";
    document.getElementsByClassName('img1')[0].src = "../img/mapa/descripcion/"+ valor +"1.jpg";
    document.getElementsByClassName('img2')[0].src = "../img/mapa/descripcion/"+ valor +"2.jpg";

    if(valor == "inicial" || valor == "puertas" || valor == "puertas_musalla" || valor == "puertas_medina" || valor == "c_actual"){
        document.getElementsByClassName('informacion')[0].style.display = "none";

    }

    if(valor == "medina_alcazaba" || valor == "al_mutasin"){
        document.getElementsByClassName('img2')[0].src = "../img/mapa/descripcion/alcazaba2.jpg";
    }

    document.getElementsByClassName("textoDescripcion")[0].innerHTML = texto[valor];
    document.getElementsByClassName("enlaceImagen")[0].href = enlaces[valor];
    document.getElementsByClassName("enlaceImagen")[1].href = enlaces[valor];

}

var texto = {
    inicial:"",
    
    al_medina:"<h2>AL-MEDINA</h2><p>Almería fue 'fundada' por Abd al Rahmán III en el 955 por el simple trámite de concederle estatuto de madina (ciudad) a lo que había sido el arrabal de la torre vigía del puerto de Pechina, o sea al Mariya marsa Bayyana que a partir de ese momento será Madina al Mariya de donde Almaria y por fin Almería.</p></br><p>La nueva condición implica la construcción de una muralla con funciones no solo militares sino también jurídicas y de naturaleza fiscal en tanto acotan el espacio con estatuto de ciudad, o sea la madina (la vieja Almedina). La cerca se traza aprovechando ingeniosamente el perfil del terreno como defensas naturales del recinto: al norte el cerro que fortificado será la Alcazaba, una verdadera acrópolis o pequeña ciudad de gobierno, al sur el mar y las atarazanas (anteriores a la fundación) y a levante y poniente sendos barrancos hoy calle de la Reina y rambla de la Chanca.</p></br><p>El camino posiblemente romano sí no anterior, cruza en diagonal este recinto desde la Puerta de la Imagen (embocadura de Almedina con calle de la Reina) hasta la del Socorro, nombre moderno ya que desconocemos el que tuvo originalmente. En el centro de la medina se alzaba la Mezquita Mayor o Aljama de la que hoy queda el mihrab y parte del muro de la quibla en la Iglesia de San Juan.</p>",
    alcazaba:"<h2>ALCAZABA</h2><p>Mas que un castillo es una ciudadela, una pequeña ciudad amurallada en un espacio alto desde el que domina militarmente la ciudad que se extiende ante ella; es por tanto una acrópolis ('ciudad alta' en griego) organizada como medina independiente en la que existen incluso arrabales separados entre sí con sus autoridades y normas propias.</p></br><p>Conforme la investigación documental y arqueológica avanza, se confirma que ya desde época romana el lugar estuvo habitado y poseía estructuras defensivas desde mucho antes que los Omeyas cordobeses (posiblemente Abd al Rahmán III o Al Hakám II) construyeran una fortaleza con guarnición y sede del gobernador (fata) generándose una población de militares y funcionarios, artesanos, obreros, siervos que junto a sus familias van poblando el cerro que se amuralla conforme crece.</p></br><p>Los almerienses la conocían como 'Castillo de Jayram' (al Qalat Jayram) ya que fue este quien le dio la estructura que básicamente perduró toda la Edad Media hasta que las guerras, la dependencia al reino de Granada y sobre todo los terremotos de los siglos XV y XVI solo nos ha dejado su 'carcasa' de murallas y aún así sin el aspecto original que tuvieron.</p>",
    
    al_mutasin:"<h2>PALACIOS REALES</h2><p>En la zona más alta de la meseta, lugar que hoy ocupa el castillo cristiano construido tras la conquista y los terremotos, y una parte del segundo recinto separada del resto por una muralla (la que aquí representamos que no es el muro de la Vela sino otro más al oeste) estaban los palacios de los reyes taifas con sus propios baños, jardines y salones de recepción que nos han descrito los cronistas y las leyendas (Ventana de la Odalisca por ejemplo) y de los que hoy solo quedan ruinas.</p>",
    medina_alcazaba:"<h2>MEDINA DE LA ALCAZABA</h2><p>Estructural y administrativamente era una ciudad en sí con calles estrechas y pequeñas casas, su propia mezquita, baños y aljibes que ocupaban lo que hoy llamamos 'primer recinto' y parte del segundo entre los que en principio no existía el muro de la Vela.</p></br><p>Habitada por militares, funcionarios, artesanos, siervos y sus familias, además de una 'población flotante' de mercaderes, viajeros, embajadores, sacamuelas, poetas, titiriteros y músicos ambulantes, súbditos que acudían a resolver cuestiones ante el poder, etc. como una ciudad cualquiera tenía sus jueces y alcaldes (al caid ) propios.</p>",
    alcaiceria:"<h2>ALCAICERIA</h2><p>En las ciudades musulmanas incluso ahora, existen varios zocos (mercados) en cada uno de los cuales se ofrece un tipo de mercancía; en Almería el mercado de verduras y pescados se extendía ante la Puerta de la Vega, paños y tejidos a lo largo de la calle de las Lencerías (hoy de Las Tiendas), la venta de esclavos ante la Puerta de los Negros, el aceite y la grasa junto a la de los Aceiteros, los cacharros de barro, tejas y ladrillos en lo que aún conocemos como Rambla de Alfareros, las carnicerías junto a la Puerta de la Carne, la cordelería en donde las actuales calle Cordoneros y Maroneros, etc. aunque al margen de estos mercados existían pequeñas tiendas dispersas por todas partes.</p></br><p>Las alcaicerías eran los zocos especializados en productos caros, joyas, perfumes, plata y oro, objetos exóticos y raros por lo que naturalmente solían estar amuralladas y tener puertas que se cerraban fuera de 'horario comercial', sus 'calles' eran estrechas y techadas formando pasadizos (como en los actuales bazares) y los comerciantes tenían sus domicilios en una segunda planta sobre sus talleres y tiendas.</p></br><p>En Al Mariyat la alcaicería se extendía al sur de la Mezquita Mayor hasta la muralla costera entre la Puerta del Puerto y las Atarazanas.</p>",
    atarazanas:"<h2>ATARANZANAS</h2><p>Es la que puede verse en el Centro de Interpretación Puerta de Almería en el Parque junto a las escalinatas de la Casa del Jardinero del Paseo de San Luis, una puerta anormalmente ancha por lo que algunos investigadores suponen que se utilizaba para pasar los cascos de las embarcaciones entre las Atarazanas y el mar, lo que presenta ciertas dudas y la posibilidad de que existiese al menos otra nave además de la documentada y alineada con la puerta.</p></br><p>En cualquier caso el vano, situado entre dos monumentales torres que no solo se proyectan hacia fuera sino también hacia el interior del recinto, se tapió tras la decadencia de la ciudad dejando un paso estrecho.</p></br><p>Queda un tramo de muralla califal hacia poniente y el arranque de otra torre que fue sin duda el lugar desde el que Chapuy tomó sobre 1840 apuntes o fotografías para su famosa lámina (vista a la izquierda del texto).</p></br><p>El arquitecto y dibujante francés Nicolás Chapuy nos dejó algunas sorprendentes visiones de Almería antes de que se iniciara el derribo de las murallas y las atarazanas que aquí representa como un destartalado almacén en medio de una huerta. El dibujo está tomado desde una de las torres del tramo de muralla que hoy se conserva en el Centro de Interpretación 'Puerta de Almería', junto a la Casa Roda hoy sede de la Cruz Roja.</p></br><p>Es interesante la visión casi fotográfica de la ciudad dominada por la Alcazaba y la inmensa mole de la Catedral; se identifica la cúpula de las Claras pero lo más llamativo es la torre de fundición de perdigones que aparece a la derecha de la imagen y que en realidad no estaba justamente en ese lugar sino algo más cercana y a la derecha del dibujante, fuera de imagen aunque a Chapuy debió gustarle y la introdujo en la escena.</p>",
    mezquita:"<h2>MEZQUITA ALJAMA</h2><p>Su solar lo ocupa hoy la Iglesia de San Juan, la calle ante ella y parte del cuartel hasta la mitad del Patio de los Naranjos (que al contrario de lo que muchos suponen no era el de la mezquita sino el del asilo y hospital de la Misericordia construido en el siglo XVIII), justo en el centro de la medina fundada por Abd al Rahmán III en el 955 aunque su origen probablemente sea anterior, incluso en principio pudo ser una vieja iglesia adaptada al culto musulmán por los marinos de Pechina en el siglo IX.</p></br><p> La conversión en ciudad del arrabal portuario de Bayyana implica el amurallamiento del núcleo urbano y la fundación de una Mezquita Mayor sea de obra nueva sea mejorando una ya existente; en todo caso y a partir de las crónicas y los pocos restos conocidos ( la estructura del mihrab, parte del tramo de la quibla conservada en la iglesia de San Juan y cimientos y piezas halladas en excavaciones) parece que tenía solo tres naves con algo menos de 18 metros de anchura total y unos 25 de longitud incluido el patio lo que parece insuficiente para Aljama de una ciudad fundada por un Califa a partir de un arrabal que ya superaba en habitantes y actividad comercial a la misma Bayyana, por lo que son varios los especialistas que consideran que la mezquita de la época de Abd al Rahmán III ya tenía cinco naves con un ancho total de 25 metros y unos 40 de longitud a imagen de la de Medina Azahara, contemporánea de la almeriense.</p></br><p>A partir de 1014 y bajo el reinado de Jayrán, Al Mariyyat multiplica su población y riqueza lo que se evidencia en la ampliación de la mezquita a la que se adosaron dos naves laterales y posiblemente se pórtico el patio y se alzó el alminar en su localización definitiva que siguiendo la tradición de la era Califal que se mantiene en las primeras taifas, estaría situado al costado occidental de la puerta de la fachada norte, cerca del centro del actual Patio de los Naranjos y en su cuadrante suroeste.</p><p>Las ampliaciones continúan bajo el reinado de Zuhayr que da a la Mezquita sus dimensiones definitivas, unos 45 metros de ancho por 75 a 80 de largo de los que la mitad corresponden al patio y galerías porticadas que lo cierran; según Udri, médico de Almutasim y magnífico cronista, Zuhayr agregó dos nuevas naves ampliando la mezquita por todos sus lados excepto el meridional (el muro de la quibla) y dándole un aspecto monumental. Suponemos que en esta ampliación se dobló el espacio porticado al norte, este y oeste del patio como en las grandes mezquitas aragonesas de esa época.</p></br><p>Tras el esplendor de los grandes reyes eslavonios y una vez definido el edificio, sólo constan reformas puntuales tales la construcción bajo el reinado de Almotacin de una fuente y el enlosado del patio, el recrecimiento del alminar en 1136 y la decoración del mihrab con recubrimiento de yesería almohade tras una primera y efímera reconquista cristiana entre 1147 y 1157 y en la que algunos elementos decorativos de la Aljama almeriense se convirtieron en botín de guerra.</p></br><p>Curiosamente y contra lo que podría suponerse, la transformación en Catedral cristiana en 1489 no alteró el aspecto de la Aljama como se deduce de la descripción que de ella hizo el alemán Munzer tras visitarla en 1494, citando 'más de 80 columnas' y patio como un 'huerto cuadrado con limoneros y una fuente viva' enlosado de mármol blanco, detallándonos además unas asombrosas lámparas de cristal de colores que seguían en uso en la ya cristianizada mezquita a la que calificar como una de las más hermosas del Reino de Granada.</p><p>Fue el terremoto del 22 de septiembre de 1522 el que arruinó la vieja Mezquita, derribó parte de la ciudad y debilitó las murallas hasta el extremo de que los supervivientes se plantearon abandonar Almería, abandono que impidió el enérgico y lúcido Obispo Villalán trasladando la población al antiguo arrabal de Musalla donde inició la construcción de una nueva catedral-fortaleza capaz de acoger a todos los habitantes de la ciudad en caso de un probable ataque berberisco o turco por mar.</p></br><p>El abandono de la entonces 'Catedral de la Almedina' siguió a lo largo del XVI un proceso paralelo al de progresiva despoblación de la vieja ciudad; aunque una parte del edificio se mantuvo en pié gracias a reformas que evitaron su desplome, a mediados del XVI el Cabildo pasó a la nueva Catedral, quedando bajo la advocación de San Juan lo que se mantenía en pié de la vieja Mezquita hasta que a finales del siglo XVII la amenaza de desplome obliga a su abandono definitivo y por fin termina cayendo y sus sillares re aprovechados para la construcción de la iglesia de San Sebastián.</p>",
    
    puertas_medina:"",
    p_aceiteros:"<h2>PUERTA DE LOS ACEITEROS</h2><p>También en el muro oriental de la medina, se abría en la embocadura de la antigua calle del Arsenal (hoy Pedro Jover esquina a La Reina) para dar paso al camino de la costa; cuando Jayram amuralló el arrabal de la Musalla, queda dentro del espacio urbano (como ocurre con la de la Imagen) y sus funciones pasaron a la Puerta de los Negros.</p></br><p>La denominación hace referencia al barrio de los aceiteros (el castellanizado zacatín) que se extendía fuera de la muralla entre esta puerta y la de la Imagen por la zona actualmente a levante de la calle de La Reina que hasta bien entrado el siglo XIX era una rambla.</p></br><p>En la Edad Moderna pasó a denominarse Puerta de las Carretas hasta su desaparición con ese tramo de muralla junto a la de la Imagen.</p>",
    p_atarazanas:"<h2>PUERTA DE LAS ATARANZANAS</h2><p>Del árabe dar al sanaa ('casa de trabajos', taller) derivan los términos 'atarazanas', 'dársena' y 'arsenal', todos referidos a instalaciones costeras para la construcción (astilleros), reparación y base de buques. Lógicamente habiendo sido Almería el mayor y más activo puerto de guerra y comercio de al Ándalus hasta el siglo XII, contó con unas importantes atarazanas en las que los 'marinos de Pechina' construyeron y aparejaron las flotas de guerra que garantizaron el control militar y mercantil del Mar de Alborán por el Califato cordobés, después por Jayram y Zuhayr y finalmente por los temibles almorávides hasta la primera toma de la ciudad por los castellanos, genoveses y catalanes en 1147 cuyos cronistas citan las atarazanas como un importante 'arsenal' y 'navalia' (nombre romano) que les sorprende.</p></br><p>La guerra y los diez años de dominio cristiano bajo la constante amenaza de los almohades, pero sobre todo la apertura en esa época de nuevas y más rentables rutas comerciales entre Oriente y Europa por el Mediterráneo norte, arruinan el antiguo poderío comercial de Al Mariyat que ya nunca se recuperó como tampoco la actividad de las atarazanas convertida en una carpintería de ribera más y almacén de materiales navales y armamento, función que mantenía en 1868 cuando la Junta Revolucionaria decide derribarla junto a los últimos restos de murallas para urbanizar la zona donde se proyectaba el puerto.</p></br><p>Más antiguas que las primeras murallas califales de la medina (no se descarta que fuesen de origen tardo romano o bizantino) su principal edificio era una nave abierta hacia el mar y que por su estructura y diseño podría haber servido de modelo a los aljibes de Jayram que serian 'copia' a menor escala de esta nave de unos 50 metros de largo, 15 de alto y entre 10 y 15 de ancho cubierta por bóveda sobre arcos y pilares entre los que se abrían ventanales superiores protegidos por bocinas para controlar el paso de aire y la temperatura interior más idónea para el secado de la madera de los buques.</p></br><p>Su solar es hoy la calle Atarazanas desde la embocadura de Pedro Jover (antigua del Arsenal) hasta la altura de la casa de Roda (Casa de la Cruz Roja) y un ancho algo mayor que el de la calle por su lado de poniente. En principio se abría directamente al mar formando las murallas un entrante hasta ella pero al perder actividad se cerraron los muros dejándose una puerta hacia la playa.</p>",
    p_imagen:"<h2>PUERTA DE LA IMAGEN</h2><p>Fue la más importante de las abiertas en la cerca de la medina amurallada por Abd al Rahmán III sobre el 955. Situada en el muro oriental ante el cual corría la rambla de Godmar (calle de La Reina) aprovechada como foso natural, se abría en la embocadura de la hoy calle de la Almedina y ante ella confluían el que después fue el camino de la Vega y la antigua vía romana convertida en camino de Bayyana por lo que originalmente debió denominarse 'Puerta de Pechina' (Bab Bayyana) hasta que este nombre pasó en el siglo XI a la que se abrió junto a los aljibes en la muralla levantada por Jayrám en el arrabal de Musalla, pasando a ser la 'Puerta Vieja de Pechina' al menos durante un tiempo.</p></br><p>Todavía en época musulmana se le cita como 'Puerta del Águila' y tras la definitiva conquista cristiana y hasta desaparecer sobre 1775 al ser demolido el tramo de muralla en que se abría, se le conoce como 'Puerta de la Almedina' y 'Puerta de la Imagen' en referencia a la del Cristo que se veneraba en una ermita situada en su patio interior.</p></br><p>La planta original era la típica de la era califal, un vano abierto en el hueco más o menos profundo entre dos torres mas salientes y próximas entre sí que las demás; en los planos de la Edad Moderna las torres que la protegen muestran una planta poligonal que recuerda la gótica de la Puerta de Serranos en Valencia aunque sin sus majestuosas proporciones.</p></br><p>Un detalle que delata la importancia de esta puerta, sobre todo en la era califal y primeras taifas, es que frente a ella y entre los dos caminos que allí confluían se encontraba el oratorio ('musallá') que dio nombre al nuevo arrabal amurallado por Jayram en el siglo XI; el oratorio en concreto estaría en una explanada entre las hoy calles Arraez, Granero, Bailén y Cervantes.</p>",
    p_puerto:"<h2>PUERTA DEL PUERTO</h2><p>La Bab al Marsa fue una de las más importantes puertas de la muralla de la medina construida por orden de Abd al Rahmán III en el siglo X; se abría en el tramo costero dando paso desde la inmediaciones de la Mezquita Mayor (que era el centro de la ciudad) a la playa utilizada como fondeadero en la que habría algunos diques pero no un 'puerto' tal y como hoy lo entendemos sino una ensenada o rada desde las Atarazanas hasta la desembocadura de la rambla de la Chanca donde en época romana se situó la población de Portus Magnus.</p></br><p>Su estructura era la típica de era Califal: un vano protegido por dos grandes torres que sobresalen hacia el exterior y el interior de la línea de la muralla como vimos en la Puerta de las Atarazanas.</p></br><p>Fue excavada y puede visitarse en el Centro Social municipal de la calle Chafarinas donde una de sus torres puede verse bajo un suelo de cristal que la protege; llama la atención un tramo de escaleras de subida al adarve (plataforma o pasillo superior de la muralla).</p>",
    p_socorro:"<h2>PUERTA DEL SOCORRO</h2><p>En realidad tanto el nombre como la estructura conocida de esta puerta que también se denomino 'De la Torre del Tiro', son posteriores a la definitiva conquista de la ciudad por los Reyes Católicos aunque es lógico suponer que ya existía en la Edad Media e incluso y como creen algunos investigadores, fuese esta la llamada 'Puerta del Faro' citada por cronistas.</p></br><p>Se abría hacia poniente frente a la embocadura de la Chanca (que entonces llegaba hasta donde ahora el IES 'Galileo'), muy cerca de la 'esquina' donde la muralla giraba para alejarse de la costa y subir en paralelo a la rambla hasta la Alcazaba. En el lugar que hoy ocupa la plaza en cuesta que lleva su nombre, se extendía un talud que desde el ángulo de la muralla llegaba hasta el mar en la línea del parque actual.</p></br><p>Aunque hoy es muy difícil imaginar el paisaje de hace mil años, la visión de ese ángulo de la muralla elevado sobre un espolón de terreno que se adentraba en el mar cerrando la rada de la Chanca, debió ser impresionante para los viajeros que llegaban por el viejo 'camino romano' o desembarcaban después de navegar por delante del telón que formaban las murallas desde Al- Riyl hasta más allá de donde hoy la Iglesia de Pescadería, y detrás la mole de la Alcazaba.</p></br><p>La vieja puerta fue derribada a mediados del siglo XIX aunque algunos tramos de las murallas costera y de poniente que partían de ella se mantuvieron en pié casi hasta el último tercio de ese siglo y son reconocibles en varias fotografías y grabados.</p>",
    
    musalla:"<h2>AL-MUSALLA</h2><p>En el siglo XI y bajo gobierno del fata Jayran, Almería se convierte en capital de un poderoso y rico reino de taifa multiplicándose su población con los que huyen de las guerras civiles que se extienden entre los distintos territorios desmembrados del antiguo Califato cordobés.</p></br><p>Dénsamente poblada la medina y el entorno del embarcadero, la población crece a lo largo de los principales caminos que conducen a la medina y confluyen ante la Puerta de la Imagen: el de Pechina (calles de Granada, Tiendas, Mariana, Arraez) y el de la vega o de Nijar (Rueda López, Lachambre, Trajano, Eduardo Pérez, Catedral, Bailen). El otro eje de asentamiento fue el camino costero que se dirigía a la Puerta de los Aceiteros.</p></br><p>Manteniendo como ejes esos caminos y un ramblizo que lo cruzaba de norte a sur (la actual calle Real), Jayrán fundó un nuevo arrabal amurallándolo con el ingenioso aprovechamiento como fosos naturales de los cursos originales de las ramblas que hoy denominamos de Obispo Orberá y de Federico García Lorca y construyó unos aljibes junto a la nueva Puerta de Pechina y las conducciones que traían el agua desde la Alhadra.</p></br><p>El centro de vida del nuevo conjunto urbano era la Puerta de la Imagen, por lo que el nuevo barrio recibió el nombre del oratorio al aire libre (musalla) que existía ante la puerta y entre los dos caminos que a ella se dirigían. </p>",
    al_riyl:"<h2>AL-RIYL</h2><p>Era una 'coracha' o espolón, o sea una muralla que se interna en el mar y termina en una torre o baluarte para impedir el paso de los atacantes hacia la franja de playa que se extendía ante el tramo costero de las murallas, una estructura defensiva parecida a las torres albarranas adelantadas respecto al muro. Algunos investigadores creen que al-Riyl se refiere a un 'vado' o paso en el que el agua llegaba hasta las sillas de los caballos.</p></br><p>En la Edad Moderna y conforme la costa fue retrocediendo por los arrastres aportados por la rambla, el espolón quedó en tierra firme, lugar que hoy ocupa el Gran Hotel y principio del Parque. Abandonado este tramo de muralla tras el retranqueo del recinto a partir del siglo XVII solo se mantuvo en pié la llamada 'Torre del Obispo' reutilizada como molino de viento.</p>",
    aljibes:"<h2>ALJIBES DE JAYRÁN</h2><p>Aunque los edificios actuales nos ocultan el perfil original de la ciudad y resulta difícil de percibir, los aljibes están situados en el punto más alto del arrabal de Musalla al que podía llegar el agua a través de acequias y conductos solo de forma 'rodada' desde las fuentes de la Alhadra, lo que delata una depurada técnica y cálculo por parte de sus constructores. Antes de cruzar bajo las murallas, el agua salvaba una rambla mediante un acueducto entre los puntos que hoy ocupan el chaflán de la Casa de las Mariposas y la estatua de Nicolás Salmerón.</p></br><p>Construidos junto a la Puerta de Pechina, (en cuyo patio interior se abrió en fecha no determinada un pasillo de acceso hasta ellos donde estuvo situado 'El Rinconcillo') constaban de las dos naves adosadas que hoy se conservan, otras dos localizadas en la última excavación arqueológica, varios distribuidores y decantadores de arena entre la muralla (acera de la estatua de Salmerón) y las naves conservadas.</p>",
    
    puertas_musalla:"",
    p_vega:"<h2>PUERTA DE LA VEGA</h2><p>También llamada de Oriente, de Nijar, del Marabí y ya en la Edad Moderna y tras el retranqueo de la cerca y abandono del tramo oriental de la muralla de Jayrán entre la Puerta de Pechina y el mar, se la cita como Puerta Cerrada.</p></br><p>Para situarla correctamente hay que advertir que la muralla medieval se levantó dejando ante ella las ramblas aprovechadas como foso; hasta finales del siglo XIX el curso original de la que llamamos 'de Belén' o 'Federico García Lorca' trazaba una gran curva desde el 18 de Julio para bajar por la hoy calle Javier Sanz hasta su actual orientación; la de 'Obispo Orberá' giraba hacia el sur donde ahora el Mercado y continuaba por Garcia Alix confluyendo con la anterior por la actual embocadura de calle Mineros.</p></br><p>El otro elemento de localización es lógicamente el antiguo camino de la vega o Nijar que por esta puerta accedía a la ciudad; y aunque los antiguos trazados de aquellas 'calzadas' se han corregido y alineado al urbanizarse lo que fue campo hasta mediados del siglo XX, a grandes rasgos se corresponden con Calzada de Castro, Carrera de Monserrat y Carrera de los Picos que desde su embocadura actual se orientaba hacia la de calle de Rueda López llamada de la Vega hasta bien entrado el siglo XX ya que en efecto es parte del recorrido urbano de este camino que terminará confluyendo con el de Pechina ante la Puerta de la Imagen.</p></br><p>Advertimos esto porque el trazado actual de la rambla y la situación del Indalo que la identifica hacen suponer que la puerta estaba junto a la fachada sur del IES 'Celia Viñas' cuando en realidad ese punto era parte del cauce de la rambla. La puerta se abría en Rueda López a la altura del 'Minibar' en la muralla que se localizó en el solar del edificio sindical y el de la esquina de Padre Santaella unos metros más atrás de la línea de fachadas; al flanco sur de la puerta, la muralla traza un saliente hasta la embocadura actual de la calle para protegerla.</p></br><p>Sabemos por diversos cronistas que cobijado en ese entrante del muro se situaba el mercado de pescados y verduras.</p>",
    p_mar:"<h2>PUERTA DEL MAR</h2><p>Construidos junto a la Puerta de Pechina, (en cuyo patio interior se abrió en fecha no determinada un pasillo de acceso hasta ellos donde estuvo situado 'El Rinconcillo') constaban de las dos naves adosadas que hoy se conservan, otras dos localizadas en la última excavación arqueológica, varios distribuidores y decantadores de arena entre la muralla (acera de la estatua de Salmerón) y las naves conservadas.</p></br><p>No se encontraba por tanto en el lugar ocupado hoy por la Fuente de los Peces como se suele creer y que en realidad era la playa, sino algo más atrás, en la línea de murallas que con muy poca variación se corresponde con las edificaciones que miran al Parque.</p>",
    p_montana:"<h2>PUERTA DE LA MONTAÑA</h2><p>Es la única puerta original que se mantiene aún en pié y pese a su aparente simplicidad (ya que en realidad era solo un portillo que daba acceso a un camino sin importancia) tiene un gran interés ya que muestra los sucesivos recrecimientos en grosor del muro desde el siglo XI hasta la Edad Moderna.</p></br><p>Se abre en la muralla frente al monumento del Sagrado Corazón, cobijada exteriormente por la torre situada al oeste e interiormente por un baluarte con arpilleras ya de época moderna.</p>",
    p_musa:"<h2>PUERTA DE MUSA</h2><p>Situada en la muralla que atraviesa la Hoya, entonces un arrabal densamente poblado, y dado que se abría en un punto muy bien 'cubierto' por la misma disposición escalonada de ese tramo de muro que además queda dominado desde la Alcazaba y San Cristóbal, la puerta no precisaba de complicados perfiles defensivos (como ocurría con la Puerta de Pechina) ni siquiera de patio interior, por lo que se reducía a un vano entre dos torres según el modelo típico del Califato cordobés antes de extenderse las puertas en codo a partir de las primeras taifas y las posteriores en doble codo.</p></br><p>Lo más interesante que nos ha deparado la excavación en ese sector de la muralla de Jayrán es el ingenioso sistema de paso del agua de lluvia (en realidad la Hoya es un barranco cabecera de la rambla que hoy es la calle de La Reina) evacuada a través de conductos abiertos entre pilares sobre los que se sostiene el muro y que pueden cerrarse mediante rastrillos o simplemente enterrados en épocas de sequia. Suponemos que este ingenioso sistema se empleó también en los muros que atravesaban la rambla de la Chanca, la muralla costera en la embocadura de la rambla de Gorman (calle de La Reina) e incluso la Puerta del Mar ya que la calle Real también era originalmente una rambla.</p>",
    p_negros:"<h2>PUERTA DE LOS NEGROS</h2><p>Daba paso al camino costero que tras cruzarla se dirigía hacia la Puerta de los Aceiteros de la medina; situada en la zona de la actual Plaza Circular y último tramo del Paseo, se abría cerca de la entonces desembocadura de la rambla donde hoy la Plaza de las Velas, un entorno que erróneamente se identificó con el diseñado por Pérez de Villaamil en un famoso grabado que evoca la toledana Puerta del Sol imaginándola junto a una playa.</p></br><p>Se denominó 'Puerta de los Negros' porque junto a ella se encontraba el mercado de esclavos africanos; también se le cita como 'Puerta del León' al menos al principio del siglo XIV, cuando Jaime II sitió la ciudad e instaló su campamento fortificado frente a ella aunque es de suponer que a una distancia fuera del alcance de los arqueros y catapultas, lo que nos llevaría a la altura de Ciudad Jardín.</p>",
    p_pechina:"<h2>PUERTA DE PECHINA</h2><p>La Puerta de Pechina (Bab Bayyana) abierta en la cerca de Musalla construida por el fata Jayrán dando paso al camino de Pechina (antigua vía romana), fue la más importante de las puertas almerienses, la de estructura más compleja y la que mas rastros dejó en la trama urbana actual. Pero curiosamente una serie de errores distorsionaron su nombre y localización hasta el extremo de ser la gran ignorada por la mayoría de los almerienses.</p></br><p>El primer error ocultó su autentica denominación, que era 'Puerta de Pechina', por una mala traducción tras la conquista de la ciudad por los Reyes Católicos en 1489; lo normal era mantener los nombres de los lugares aunque castellanizados, pero los cristianos identificaron erróneamente 'Bayyana' (que en árabe se pronunciaba 'Paschana') como 'Purchena' que entonces era una ciudad notable y conocida por ellos en tanto Pechina hacía tiempo que había dejado de ser la gran Bayyana de los Marinos que fue en el siglo X hasta quedar reducida a poco más que un caserío. Aunque comprensible, la denominación 'Puerta de Pechina' resulta históricamente insostenible aunque seria difícil corregirla tras 500 años de utilización.</p></br><p>El segundo error nos oculta su localización ya que la Puerta de Purchena ocupa lo que era solo un descampado fuera de la muralla, una explanada por la que discurría la rambla que hoy llamamos de Alfareros y de Obispo Orberá, el acueducto que conducía el agua a los aljibes y el camino que se dirigía a la puerta tras cruzar un inmenso cementerio extendido en abanico desde la zona donde hoy el Teatro Apolo hasta la Plaza de Toros y Alfareros.</p></br><p>Para descubrir la razón de este 'traslado' es preciso conocer primero la localización y planta de la puerta original que se abría al fondo de un entrante de la muralla, un gran saco cuya planta aunque algo reducida dio origen a la Plaza Manuel Pérez; la embocadura de este gran patio exterior estaba defendida por dos torres, una ante la esquina de la Puerta de Purchena cerca del kiosco 'Amalia' y la otra entre la Plaza del Carmen  y la calle Regocijos.</p></br><p>El vano de entrada, la puerta en sí, se descubrió al construir el acceso a los refugios de la Guerra Civil; se abre en un ancho muro y descentrada hacia el sur para dar paso a un estrecho patio interior con salida en su extremo norte conformando un recorrido en 'L', disposición que explica por qué la calle de las Tiendas se inicia en un lateral de la plaza y no en el centro. </p></br><p>Definida como 'un inmenso y destartalado patio de Monipodio que oculta un estrecho callejón' (lo que la hizo inexpugnable frente a las técnicas de asalto y armamento medieval), la vieja estructura y parte de las murallas se derribaron en 1837 dando lugar a las plazas de Bilbao (hoy Manuel Perez) y del Carmen y edificios que las rodean. Se levantó la nueva Puerta de Bilbao con dos vanos y aspecto neoclásico en su embocadura, donde hoy el kiosco 'Amalia' y la farmacia en esquina de Regocijos, y finalmente se derribó en 1855 junto a los tramos de muralla que aún subsistían.</p>",
    
    al_hawd:"<h2>ARRABAL DE AL-HAWD</h2><p>Aunque jerárquicamente era un arrabal o barrio adosado a la ciudad (la medina), y amurallado no antes del siglo XI (algunos investigadores creen que en el reinado de Almutasim) Al Hawd o el aljibe estaba ya habitado mucho antes de la fundación de la ciudad, incluso pudo ser parte del Portus Magnus romano y sin duda fue un arrabal mercantil muy dinámico al estar junto al desembarcadero.</p></br><p>Al Hawd se extendía por la actual Pescadería desde el Barranco de Creppi y el de las canteras califales hasta la muralla de la medina que bajaba por la actual calle Cordoneros, dejando dentro de sus muros la rambla de la Chanca desde las torres que aún se mantienen en pié hasta la desembocadura que podemos situar a la altura del popular ancla cerca del IES Galileo.</p>",
    p_faro:"<h2>PUERTA DEL PANTEÓN HEBREO</h2><p>Esta es la puerta sobre la que tenemos más dudas empezando por su denominación ya que algunos investigadores la identifican como la Puerta del Faro aunque este nombre podría haber sido el de la cercana Puerta del Socorro.</p></br><p>Se abría en la cerca del arrabal de Hawd hacia el embarcadero y la montaña por lo que la situamos en la actual Plaza de Moscú o algo más próxima a la playa que entonces llegaba hasta la carretera al mismo pié de las escalinatas que sube a la Iglesia de San Roque, lugar en el que alzaba un ribat o morabito, especie de convento musulmán donde se retiraban los hombres para practicar la oración y ejercicios militares preparatorios para la yihad.</p></br><p>Desde esta puerta se iniciaba la subida al viejo 'camino romano' por el hoy Cerrillo del Hambre que suponemos ocupaba el arrabal extramuros de Yabal al Kunaisa, el monte de la Iglesilla, un barrio cristiano mozárabe heredero del Portus Magnus romano.</p>",
    
    puertas:"",
    c_actual:""
}

var enlaces = {
    inicial:"",
    al_medina:"https://www.google.es/maps/place/Calle+de+la+Almedina,+50,+04002+Almer%C3%ADa/@36.8387008,-2.4712141,424m/data=!3m1!1e3!4m7!1m4!3m3!1s0xd7076089699d357:0xb6592b16f0692d7c!2sCalle+de+la+Almedina,+50,+04002+Almer%C3%ADa!3b1!3m1!1s0xd7076089699d357:0xb6592b16f0692d7c!6m1!1e1",
    alcazaba:"https://www.google.es/maps/place/Calle+Descanso,+33,+04002+Almer%C3%ADa/@36.8407202,-2.4710172,424m/data=!3m1!1e3!4m2!3m1!1s0xd7076062ad1b435:0xd6dc5d0c66938e31",
    al_mutasin:"https://www.google.es/maps/place/Calle+Descanso,+33,+04002+Almer%C3%ADa/@36.8407202,-2.4710172,424m/data=!3m1!1e3!4m2!3m1!1s0xd7076062ad1b435:0xd6dc5d0c66938e31",
    medina_alcazaba:"https://www.google.es/maps/place/Calle+Descanso,+33,+04002+Almer%C3%ADa/@36.8407202,-2.4710172,424m/data=!3m1!1e3!4m2!3m1!1s0xd7076062ad1b435:0xd6dc5d0c66938e31",
    alcaiceria:"https://www.google.es/maps/place/Calle+Albor%C3%A1n,+5,+04002+Almer%C3%ADa/@36.8377365,-2.4706989,106m/data=!3m1!1e3!4m2!3m1!1s0xd707608ae08af51:0xc9aaa2a9593caabc",
    atarazanas:"https://www.google.es/maps/dir//36.8373158,-2.4701102/@36.8372316,-2.4700633,106m/data=!3m1!1e3",
    mezquita:"https://www.google.es/maps/place/Calle+de+la+Almedina,+2,+04002+Almer%C3%ADa/@36.8392117,-2.4689276,106m/data=!3m1!1e3!4m2!3m1!1s0x0d7076064625dce7:0x3ae0e01a014e1050",
    puertas_medina:"",
    p_aceiteros:"https://www.google.es/maps/place/Calle+de+la+Reina,+49,+04002+Almer%C3%ADa/@36.8375233,-2.4690245,106m/data=!3m1!1e3!4m2!3m1!1s0xd70760672ec4e61:0x33787dc4a6e70315",
    p_atarazanas:"https://www.google.es/maps/place/Parque+de+Nicol%C3%A1s+Salmer%C3%B3n,+62,+04002+Almer%C3%ADa/@36.8370181,-2.4698359,106m/data=!3m1!1e3!4m2!3m1!1s0xd707605fc4befe5:0x54866563bf7e064a",
    p_imagen:"https://www.google.es/maps/place/Calle+de+la+Almedina,+2,+04002+Almer%C3%ADa/@36.8392117,-2.4689276,106m/data=!3m1!1e3!4m2!3m1!1s0x0d7076064625dce7:0x3ae0e01a014e1050",
    p_puerto:"https://www.google.es/maps/place/Calle+Chafarinas,+6,+04002+Almer%C3%ADa/@36.8379756,-2.4722504,106m/data=!3m1!1e3!4m2!3m1!1s0xd707608dac12ed9:0xb8def57cf33c3787",
    p_socorro:"https://www.google.es/maps/place/Parque+de+Nicol%C3%A1s+Salmer%C3%B3n,+65,+04002+Almer%C3%ADa/@36.8379339,-2.4751218,106m/data=!3m1!1e3!4m2!3m1!1s0xd70760959d0fc39:0x8c0452b522b89ba1",
    musalla:"https://www.google.es/maps/place/MUSEO+DEL+ACEITE/@36.8404793,-2.4660231,849m/data=!3m1!1e3!4m2!3m1!1s0xd7076072852e94b:0x1ca798cc946eda9f!6m1!1e1",
    al_riyl:"https://www.google.es/maps/place/Calle+Reina+Regente,+8,+04001+Almer%C3%ADa/@36.8344271,-2.4636382,106m/data=!3m1!1e3!4m2!3m1!1s0xd7076030869526b:0xc434c1836560c10c",
    aljibes:"https://www.google.es/maps/place/Calle+Tenor+Iribarne,+20,+04001+Almer%C3%ADa/@36.8413363,-2.4647847,106m/data=!3m1!1e3!4m2!3m1!1s0xd707600c8195f2b:0x7125e40daf1badbc",
    puertas_musalla:"",
    p_vega:"https://www.google.es/maps/place/Calle+Rueda+L%C3%B3pez,+12,+04004+Almer%C3%ADa/@36.8377463,-2.461844,106m/data=!3m1!1e3!4m2!3m1!1s0xd7076018e98849f:0xea233ab571de62a",
    p_mar:"https://www.google.es/maps/place/Parque+de+Nicol%C3%A1s+Salmer%C3%B3n,+18,+04002+Almer%C3%ADa/@36.8360988,-2.4668986,106m/data=!3m1!1e3!4m2!3m1!1s0xd707605e77d20c3:0x4a737fd014c2e1df",
    p_montana:"https://www.google.es/maps/place/Camino+Loma+San+Cristobal,+113,+04003+Almer%C3%ADa/@36.8428568,-2.4686203,106m/data=!3m1!1e3!4m2!3m1!1s0xd7075fd629ce29d:0x981cf53ff9bd9b36",
    p_musa:"https://www.google.es/maps/place/Calle+Noya,+04002+Almer%C3%ADa/@36.8420073,-2.4707432,212m/data=!3m1!1e3!4m2!3m1!1s0xd70760804535bf5:0x5ae0eac7ac3a0c34",
    p_negros:"https://www.google.es/maps/place/Plaza+Emilio+P%C3%A9rez,+3,+04001+Almer%C3%ADa/@36.8354327,-2.4630933,106m/data=!3m1!1e3!4m2!3m1!1s0xd707603b3c6e36d:0xdabec9aba691d4b6",
    p_pechina:"https://www.google.es/maps/place/Plaza+Manuel+P%C3%A9rez+Garc%C3%ADa,+6,+04003+Almer%C3%ADa/@36.8417522,-2.464636,106m/data=!3m1!1e3!4m2!3m1!1s0xd707600b0bc8aef:0x254f9289de656!6m1!1e1",
    al_hawd:"https://www.google.es/maps/place/Calle+Juan+Goytisolo,+33,+04002+Almer%C3%ADa/@36.8389493,-2.4769919,424m/data=!3m1!1e3!4m2!3m1!1s0xd70760bb1f475fd:0x76276a873a61134d!6m1!1e1",
    p_faro:"https://www.google.es/maps/place/Calle+Rosario,+54,+04002+Almer%C3%ADa/@36.839043,-2.4783105,106m/data=!3m1!1e3!4m2!3m1!1s0xd70760b0f8dda7f:0x6325a53797f6d385",
    puertas:"",
    c_actual:""
}
