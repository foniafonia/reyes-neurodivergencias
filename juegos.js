// Lista de juguetes e ilustraciones, compartida por las dos páginas.
// Para añadir un juego: copiar una entrada de JUEGOS y rellenar sus campos.
// habilidades: claves de HABILIDADES que trabaja (solo si lo respalda la ficha).
// precio: rango orientativo en euros (precio visto en Amazon.es + referencias de otras tiendas); vacío si no hay enlace. Se revisa a mano: cambia con las ofertas.
// perfiles: claves de PERFILES con los que lo usan los profesionales (solo lo que ellos aportan; vacío hasta que lo validen).
// sugeridos: claves de PERFILES que el equipo propone según lo que exige el juego (se muestran como «Sugerido», aún sin validar).
// porque: por qué se sugiere, en una frase. No es una recomendación clínica: no hay estudios que asignen juguetes a diagnósticos.

var PERFILES = [
  { k: 'tea', n: 'Autismo (TEA)', alias: 'autismo tea espectro autista asperger' },
  { k: 'tdah', n: 'TDAH', alias: 'tdah deficit de atencion hiperactividad' },
  { k: 'dislexia', n: 'Dislexia', alias: 'dislexia lectura lectoescritura dificultad lectora' },
  { k: 'tdl', n: 'Trastorno del lenguaje (TEL/TDL)', alias: 'tel tdl trastorno del lenguaje retraso del lenguaje' },
  { k: 'tartamudez', n: 'Tartamudez', alias: 'tartamudez disfemia fluidez' },
  { k: 'discalculia', n: 'Discalculia', alias: 'discalculia matematicas calculo' },
  { k: 'dispraxia', n: 'Dispraxia y coordinación', alias: 'dispraxia coordinacion motricidad torpeza' },
  { k: 'altas', n: 'Altas capacidades', alias: 'altas capacidades superdotacion' },
  { k: 'di', n: 'Discapacidad intelectual', alias: 'discapacidad intelectual retraso cognitivo' },
  { k: 'down', n: 'Síndrome de Down', alias: 'sindrome de down trisomia 21' }
];

var HABILIDADES = [
  { k: 'lenguaje', n: 'Lenguaje y vocabulario', alias: 'lenguaje vocabulario palabras hablar' },
  { k: 'atencion', n: 'Atención', alias: 'atencion concentracion' },
  { k: 'razonamiento', n: 'Razonamiento y planificación', alias: 'razonamiento planificacion logica resolver problemas' },
  { k: 'espacial', n: 'Visión espacial', alias: 'vision espacial puzle encajar piezas' },
  { k: 'motricidad', n: 'Motricidad y destreza', alias: 'motricidad fina destreza pulso equilibrio coordinacion' },
  { k: 'creatividad', n: 'Creatividad y construcción', alias: 'creatividad construir imaginacion' },
  { k: 'memoria', n: 'Memoria', alias: 'memoria recordar' },
  { k: 'turnos', n: 'Turnos y habilidades sociales', alias: 'turnos esperar social reglas convivencia' },
  { k: 'calculo', n: 'Números y cálculo', alias: 'numeros calculo contar matematicas' }
];

function etiquetaDe(lista, k) {
  for (var i = 0; i < lista.length; i++) if (lista[i].k === k) return lista[i].n;
  return k;
}

var PRECIO_FECHA = '18 de noviembre de 2026';
var JUEGOS = [
  { n: 'Kit de fuertes Tiny Land', cats: ['construir', 'mesa'], etiqueta: 'Construir', area: 'Construcción y resolución de problemas', jug: 'Kit de 130 piezas', edad: 5, color: '#4a9d3f', motivo: 'torre',
    desc: 'Construcción de fuertes con 44 bolas y 86 varillas que se encajan, y bolsa de transporte para guardarlo todo.',
    habilidades: ['razonamiento', 'creatividad'], perfiles: [],
    foto: 'assets/tiny-land-fortaleza.jpg', url: 'https://www.amazon.es/dp/B09M875VVC', precio: '50–60 €',
    opiniones: ['A los hijos de una familia del grupo les encantó, y todo se guarda en una bolsa: no ocupa.'] },
  { n: 'Kit de 7 experimentos de madera', cats: ['construir', 'pensar'], etiqueta: 'Construir', area: 'Ciencia práctica: óptica, magnetismo y movimiento', jug: '7 montajes', edad: 6, color: '#1d4d5e', motivo: 'puzle',
    desc: 'Siete montajes de madera para explorar óptica, magnetismo y movimiento: generador manual, periscopio, telescopio, brújula flotante y más.',
    habilidades: ['razonamiento', 'motricidad'], perfiles: [], sugeridos: ['altas'],
    porque: 'Retos de ciencia con montaje paso a paso: curiosidad, razonamiento y constancia.',
    foto: 'assets/kit-experimentos-7en1.jpg', url: 'https://www.amazon.es/dp/B0GYNHLSPP', precio: '25–30 €',
    opiniones: ['En el grupo cuentan que este tipo de kits trae cada experimento en su bolsita con las instrucciones.'] },
  { n: 'Laberinto', cats: ['mesa', 'pensar'], etiqueta: 'Mesa', jug: '2–4 jugadores', edad: 7, color: '#c91f3a', motivo: 'laberinto',
    desc: 'Tablero de laberinto con cartas de tesoros y peones. Unos 20–30 minutos.', habilidades: [], perfiles: [],
    foto: 'assets/laberinto-ravensburger.jpg', url: 'https://www.amazon.es/dp/B00FE9TNA0', precio: '20–30 €', opiniones: [] },
  { n: 'Batalla de genios', cats: ['mesa', 'pensar'], etiqueta: 'Pensar', area: 'Planificación, velocidad y visión espacial', jug: '1–2 jugadores', edad: 6, color: '#1f9d93', motivo: 'puzle',
    desc: 'Puzle de planificación, velocidad y visión espacial (The Genius Square).', habilidades: ['razonamiento', 'espacial'], perfiles: [], sugeridos: ['tdah', 'altas'],
    porque: 'Pide planificar antes de mover y resolver con reglas fijas: planificación y funciones ejecutivas.',
    foto: 'assets/batalla-de-genios.jpg', url: 'https://www.amazon.es/dp/B07X4B2TWY', precio: '24–28 €', opiniones: [] },
  { n: 'Palabrea', cats: ['palabras', 'cartas'], etiqueta: 'Palabras', area: 'Palabras y vocabulario', jug: '2–6 jugadores', edad: 6, color: '#e4672c', motivo: 'letras',
    desc: 'Juego de cartas de palabras tipo Basta, de Ludilo. Hay una versión 2 con categorías nuevas que se combina con la original.', habilidades: ['lenguaje'], perfiles: [], sugeridos: ['tdl'],
    porque: 'Exige recordar y encontrar palabras por categorías: vocabulario y evocación de palabras.',
    foto: 'assets/palabrea.jpg', url: 'https://www.amazon.es/dp/B011LATCVU', precio: '13–16 €', opiniones: [] },
  { n: 'Pera Limonera', cats: ['cartas'], etiqueta: 'Cartas', jug: '', edad: null, color: '#7b4ea3', motivo: 'cartas',
    desc: '', habilidades: [], perfiles: [],
    foto: '', url: '', opiniones: [] },
  { n: 'Polilla tramposa', cats: ['cartas'], etiqueta: 'Cartas', jug: '3–5 jugadores', edad: 7, color: '#d6457a', motivo: 'polilla',
    desc: 'Juego de cartas de Devir. Unos 15–25 minutos.', habilidades: [], perfiles: [],
    foto: 'assets/polilla-tramposa.jpg', url: 'https://www.amazon.es/dp/B00BBYDARY', precio: '10–15 €', opiniones: [] },
  { n: 'Exploding Kittens', cats: ['cartas'], etiqueta: 'Cartas', jug: '2–5 jugadores', edad: 7, color: '#e08a00', motivo: 'gato',
    desc: 'Juego de cartas de estrategia y azar. Existe una versión para 2 jugadores.', habilidades: [], perfiles: [],
    foto: 'assets/exploding-kittens.jpg', url: 'https://www.amazon.es/dp/B09ZLVN5HS', precio: '15–20 €', opiniones: [] },
  { n: 'Ubongo', cats: ['pensar', 'mesa'], etiqueta: 'Pensar', area: 'Encajar piezas y visión espacial', jug: '1–4 jugadores', edad: 8, color: '#1d4d5e', motivo: 'puzle',
    desc: 'Rompecabezas de piezas para encajar en el tiempo. Edición de Devir.', habilidades: ['espacial'], perfiles: [], sugeridos: ['dispraxia'],
    porque: 'Pide encajar piezas con rapidez: visión espacial y manipulación fina.',
    foto: 'assets/ubongo.jpg', url: 'https://www.amazon.es/dp/B07T772JV5', precio: '25–30 €', opiniones: [] },
  { n: 'Guess in 10', cats: ['cartas', 'pensar'], etiqueta: 'Preguntas', area: 'Hacer preguntas y deducir', jug: '2–6 jugadores', edad: 6, color: '#4a9d3f', motivo: 'preguntas',
    desc: 'Preguntas de sí o no para adivinar en diez pasos. Hay varias temáticas; esta es la de animales.', habilidades: ['lenguaje', 'razonamiento'], perfiles: [], sugeridos: ['tdl', 'tea'],
    porque: 'Pide formular preguntas de sí o no, escuchar las pistas y esperar turno: lenguaje, comunicación y deducción.',
    foto: 'assets/guess-in-10.jpg', url: 'https://www.amazon.es/dp/B09ZV2P35V', precio: '11–15 €', opiniones: [] },
  { n: 'La cuenta', cats: ['mesa'], etiqueta: 'Números', jug: '', edad: null, color: '#2f7fd1', motivo: 'numeros',
    desc: '', habilidades: [], perfiles: [],
    foto: '', url: '', opiniones: [] },
  { n: 'Junk Art Revolution', cats: ['mesa'], etiqueta: 'Mesa', area: 'Destreza manual y equilibrio', jug: '2–6 jugadores', edad: 8, color: '#b3541e', motivo: 'torre',
    desc: 'Apilar y equilibrar piezas para construir estructuras en distintas ciudades: pulso, equilibrio y algo de suerte. 30 minutos por partida.', habilidades: ['motricidad'], perfiles: [], sugeridos: ['dispraxia'],
    porque: 'Pide pulso y equilibrio al apilar piezas: motricidad fina y coordinación.',
    foto: 'assets/junk-art-revolution.jpg', url: 'https://www.amazon.es/dp/B0FN8TP7ZK', precio: '40–46 €', opiniones: [] },
  { n: 'Hedbanz', nuevo: '2026-11-18', cats: ['palabras', 'cartas'], etiqueta: 'Preguntas', area: 'Adivinar con preguntas y categorizar', jug: '2–6 jugadores', edad: 7, color: '#2f7fd1', motivo: 'preguntas',
    desc: 'Cada jugador lleva una carta en la frente sin verla y hace preguntas de sí o no para adivinar qué es. Edición de Spin Master.',
    habilidades: ['lenguaje', 'atencion', 'memoria', 'turnos'], perfiles: [],
    foto: 'assets/hedbanz.jpg', url: 'https://www.amazon.es/dp/B09M4G25ZR', precio: '18–22 €',
    opiniones: ['Noelia, psicóloga del grupo, lo propone: se trabaja el acceso léxico, la memoria y la categorización. Lo ve para TDAH, dislexia, trastorno del lenguaje y tartamudez, a partir de 7 años.'] },
  { n: 'Jenga', nuevo: '2026-11-18', cats: ['mesa'], etiqueta: 'Mesa', area: 'Pulso, turnos y gestión de la frustración', jug: '', edad: 6, color: '#b3541e', motivo: 'torre',
    desc: 'Torre de bloques de madera: se retira un bloque por turno y se coloca arriba sin que se caiga. Edición clásica de Hasbro, 54 bloques.',
    habilidades: ['atencion', 'razonamiento', 'turnos'], perfiles: [],
    foto: 'assets/jenga.jpg', url: 'https://www.amazon.es/dp/B077PD5W25', precio: '14–20 €', opiniones: ['Noelia, psicóloga del grupo, lo propone para trabajar la gestión de la frustración, la atención, la planificación y los turnos. Ella lo ve ya desde los 3 años; la caja indica 6 o más.'] },
  { n: 'El 1%', nuevo: '2026-11-18', cats: ['mesa', 'pensar', 'cartas'], etiqueta: 'Pensar', area: 'Lógica, observación y sentido común', jug: 'Hasta 6 jugadores', edad: 8, color: '#1f9d93', motivo: 'preguntas',
    desc: 'Juego de preguntas inspirado en el programa de televisión: pone a prueba la lógica y la observación más que la cultura general. 216 tarjetas por dificultad y reloj de arena. Edición de Educa.',
    habilidades: ['atencion', 'razonamiento', 'espacial', 'creatividad', 'memoria', 'turnos'], perfiles: [],
    foto: 'assets/el-1-por-ciento.jpg', url: 'https://www.amazon.es/dp/B0FP5DHJHB', precio: '30–35 €',
    opiniones: ['Noelia, psicóloga del grupo, lo propone desde los 8 años para altas capacidades. Dice que es un juego muy completo, para toda la familia, y que trabaja también la velocidad de procesamiento.'] },
  { n: "Rubik's Race", nuevo: '2026-11-19', cats: ['mesa', 'pensar'], etiqueta: 'Pensar', area: 'Lógica y velocidad', jug: '2 jugadores', edad: 8, color: '#c91f3a', motivo: 'puzle',
    desc: 'Duelo de lógica y velocidad para dos: cada jugador desliza las piezas para copiar el patrón de la carta antes que el otro. Inspirado en el cubo de Rubik.',
    habilidades: ['razonamiento'], perfiles: [],
    foto: 'assets/rubiks-race.jpg', url: 'https://www.amazon.es/dp/B0BJ2D2GXX', precio: '13–18 €', opiniones: ['Lo compartieron en el grupo de profesionales como juego para los Reyes.'] },
  { n: 'Pista de bolas Lupilu', nuevo: '2026-11-19', cats: ['construir'], etiqueta: 'Construir', area: 'Construcción y causa y efecto', jug: '', edad: 3, color: '#2f7fd1', motivo: 'torre',
    desc: 'Pista de bolas de 140 piezas (tubos, embudos, molinos y catapultas) con canicas. Es de la marca Lupilu, de Lidl: se vendió a unos 12 €. No está en Amazon y puede no seguir a la venta.',
    habilidades: ['creatividad'], perfiles: [],
    foto: 'assets/pista-de-bolas.jpg', url: '', opiniones: ['Una profesional del grupo lo compartió y dijo: «este me lo piden todos».'] },
  { n: 'Cortex Challenge', nuevo: '2026-11-19', cats: ['cartas', 'pensar'], etiqueta: 'Pensar', area: 'Razonamiento, memoria y rapidez', jug: '2–6 jugadores', edad: 8, color: '#7b4ea3', motivo: 'cartas',
    desc: 'Juego de cartas con pruebas cortas de cerebro: memoria, lógica, cálculo y observación, contra reloj. Partidas de unos 15 minutos. Edición de Asmodee, con instrucciones en español.',
    habilidades: ['atencion', 'razonamiento', 'memoria'], perfiles: [],
    foto: 'assets/cortex-challenge.jpg', url: 'https://www.amazon.es/dp/B09LM6DQVY', precio: '10–15 €',
    opiniones: ['Noelia, psicóloga del grupo, lo propone desde los 8 años para TDAH y altas capacidades: razonamiento, memoria y rapidez. Lo escribió como «Córtex Challenger».'] },
  { n: '¡Sin etiquetas!', nuevo: '2026-11-19', cats: ['cartas'], etiqueta: 'Emociones', area: 'Inclusión, empatía y convivencia', jug: '2–4 jugadores', edad: 6, color: '#2f7fd1', motivo: 'cartas',
    desc: 'Juego educativo para descubrir que todos somos diferentes: trabaja la inclusión, la diversidad, los valores y la empatía. Pensado también para el aula. De Atomo Games.',
    habilidades: ['lenguaje', 'atencion'], perfiles: [],
    foto: 'assets/sin-etiquetas.jpg', url: 'https://www.amazon.es/dp/B0GZW1KHZ3', precio: '15–18 €',
    opiniones: ['Noelia, psicóloga del grupo, lo propone desde los 6 años para autismo, TDAH y dislexia: lenguaje, atención y empatía. Dice que sirve para descubrir que todos somos diferentes.'] },
  { n: 'Empâtik', nuevo: '2026-11-19', cats: ['cartas'], etiqueta: 'Emociones', area: 'Educación emocional y empatía', jug: '', edad: 4, color: '#d6457a', motivo: 'cartas',
    desc: 'Cartas de emociones para entrenar la empatía y reconocer lo que sienten los demás. Para todas las edades a partir de 4 años, en español.',
    habilidades: ['atencion'], perfiles: [],
    foto: 'assets/empatik.jpg', url: 'https://www.amazon.es/dp/B0D47LJWXQ', precio: '12–16 €',
    opiniones: ['Noelia, psicóloga del grupo, lo propone desde los 4 años como educación emocional, trabajando la empatía. Lo ve útil para todos los perfiles de la guía.'] },
  { n: 'EmoKids', nuevo: '2026-11-19', cats: ['cartas'], etiqueta: 'Emociones', area: 'Inteligencia emocional', jug: 'Desde 2 jugadores', edad: 4, color: '#e4672c', motivo: 'cartas',
    desc: 'Cartas de doble cara para nombrar y gestionar emociones, con 8 modos de juego y partidas de 15 a 30 minutos. Para casa y para el aula.',
    habilidades: ['atencion'], perfiles: [],
    foto: 'assets/emokids.jpg', url: 'https://www.amazon.es/dp/B0G36WZ7SQ', precio: '12–16 €',
    opiniones: ['Noelia, psicóloga del grupo, lo propone desde los 4 años para trabajar la inteligencia emocional y la empatía.'] },
  { n: 'Color Line', nuevo: '2026-11-19', cats: ['mesa'], etiqueta: 'Mesa', area: 'Atención y rapidez', jug: '2–4 jugadores', edad: 5, color: '#c91f3a', motivo: 'puzle',
    desc: 'Juego de atención y rapidez: cada jugador completa las líneas de su tarjeta con las bolas de colores que salen al azar del sacabolas, y toca el timbre solo si necesita la que ha salido. Edición de Cayro.',
    habilidades: ['atencion', 'turnos'], perfiles: [],
    foto: 'assets/color-line.jpg', url: 'https://www.amazon.es/dp/B07D5RK1BD', precio: '25–30 €',
    opiniones: ['Una psicóloga del grupo lo propone desde los 5 años para autismo y TDAH: atención, turnos, control inhibitorio y velocidad de procesamiento.'] },
  { n: 'Baldosas sensoriales (lote de 4)', nuevo: '2026-11-19', cats: ['construir'], etiqueta: 'Sensorial', area: 'Estimulación multisensorial y movimiento', jug: '', edad: null, color: '#1f9d93', motivo: 'puzle',
    desc: 'Cuatro baldosas de 50 cm con base antideslizante, rellenas de un gel de colores que se mueve al pisarlo o tocarlo. Material de aula y de sala, no de juguetería: precio de la tienda Hermex.',
    habilidades: ['espacial', 'motricidad'], perfiles: [],
    foto: 'assets/baldosas-sensoriales.jpg', url: 'https://www.hermex.es/tienda/articulo/baldosas-sensoriales-lote-de-4', precio: 'Unos 126 €',
    opiniones: ['Cristina, maestra del grupo, las propone para todas las edades en autismo: favorecen la estimulación visual y propioceptiva, la atención, la coordinación motriz y la conciencia corporal, y promueven la exploración sensorial.'] },
  { n: 'Arena mágica de color (1 kg)', nuevo: '2026-11-19', cats: ['construir'], etiqueta: 'Sensorial', area: 'Experimentación sensorial', jug: '', edad: null, color: '#8e5bd1', motivo: 'puzle',
    desc: 'Arena kinética que se moldea y fluye sin ensuciar, en bote de 1 kg con tapa. Sirve para hacer huellas con moldes, esconder y buscar animales o llenar y vaciar recipientes. Material de aula: precio de la tienda Hermex.',
    habilidades: ['espacial', 'motricidad'], perfiles: [],
    foto: 'assets/arena-magica.jpg', url: 'https://www.hermex.es/tienda/articulo/arena-dimanica-bote-1-kg', precio: 'Unos 10 €',
    opiniones: ['Cristina, maestra del grupo, la usa con alumnado con autismo para experimentar a través de los sentidos: esconder animales y buscarlos, hacer huellas con moldes, llenar y vaciar recipientes. La propone para todas las edades.'] },
  { n: 'Puzle táctil de texturas', nuevo: '2026-11-19', cats: ['construir'], etiqueta: 'Sensorial', area: 'Discriminación táctil y atención', jug: '', edad: null, color: '#e08a1e', motivo: 'puzle',
    desc: 'Tablero de madera de 35 × 30 cm con 9 piezas encajables de madera y plástico, cada una con una textura distinta. Piezas grandes, fáciles de agarrar. Material de aula: precio de la tienda Hermex; ahora mismo figura sin stock.',
    habilidades: ['atencion', 'espacial', 'motricidad', 'memoria'], perfiles: [],
    foto: 'assets/puzle-tactil.jpg', url: 'https://www.hermex.es/tienda/articulo/puzzle-encajable-tactil-distintos-materiales-al-tacto-la-unidad', precio: 'Unos 52 €',
    opiniones: ['Cristina, maestra del grupo, lo propone para todas las edades, según las necesidades de cada niño: trabaja la exploración y discriminación de texturas, la atención y la motricidad fina, y favorece la integración táctil. Dice que es apto para niños con ceguera o dificultades de visión.'] },
  { n: 'Orbito', nuevo: '2026-11-19', cats: ['mesa', 'pensar'], etiqueta: 'Pensar', area: 'Estrategia y planificación', jug: '2 jugadores', edad: 7, color: '#2f7fd1', motivo: 'puzle',
    desc: 'Juego de estrategia para dos: se colocan canicas de un color en un tablero de 4 × 4 y, al pulsar el botón, todas se desplazan un puesto. Gana quien consigue primero cuatro en raya. Edición de FlexiQ.', habilidades: ['razonamiento'], perfiles: [],
    foto: 'assets/orbito.jpg', url: 'https://www.amazon.es/dp/B0C85SMRWK', precio: '23–27 €', opiniones: [] },
  { n: 'Tiburón Beach', nuevo: '2026-11-19', cats: ['cartas'], etiqueta: 'Cartas', area: 'Decidir si seguir o plantarse', jug: '2–5 jugadores', edad: 6, color: '#1f9d93', motivo: 'cartas',
    desc: 'Juego de cartas de suerte y riesgo: en tu turno robas y decides si seguir o plantarte, porque si sale el tiburón lo pierdes todo. Gana quien reúne 3 tablas de surf. Partidas de unos 15 minutos, en caja pequeña. De Lúdilo.', habilidades: [], perfiles: [],
    foto: 'assets/tiburon-beach.jpg', url: 'https://www.amazon.es/dp/B0GHR6YYC1', precio: '14–16 €', opiniones: [] },
  { n: 'Story Cubes', nuevo: '2026-11-19', cats: ['palabras'], etiqueta: 'Palabras', area: 'Contar historias y creatividad', jug: '1–12 jugadores', edad: 6, color: '#e4672c', motivo: 'letras',
    desc: 'Nueve dados con dibujos para inventar historias: se lanzan y se cuenta un relato que incluya todos los resultados. Reglas que se explican en segundos y partidas de unos 10 minutos. Edición de Asmodee.', habilidades: ['lenguaje', 'creatividad'], perfiles: [],
    foto: 'assets/story-cubes.jpg', url: 'https://www.amazon.es/dp/B08R7RXG4W', precio: '10–13 €', opiniones: [] },
  { n: 'Spy Guy. El pequeño detective', nuevo: '2026-11-19', cats: ['mesa'], etiqueta: 'Mesa', area: 'Pistas y cooperación', jug: 'Desde 1 jugador', edad: 5, color: '#2f7fd1', motivo: 'puzle',
    desc: 'Juego cooperativo de detectives: entre todos hay que encontrar pistas para atrapar al malvado Morty antes de que acabe el reloj de arena. Tablero grande con cartas de pistas. De Atomo Games.', habilidades: ['atencion', 'memoria'], perfiles: [],
    foto: 'assets/spy-guy.jpg', url: 'https://www.amazon.es/dp/B0C7QQ9RL5', precio: '22–25 €', opiniones: [] },
  { n: 'Little Action', nuevo: '2026-11-19', cats: ['mesa'], etiqueta: 'Mesa', area: 'Retos y reflejos', jug: '', edad: 3, color: '#1f9d93', motivo: 'puzle',
    desc: 'Juego de retos y acción de Djeco para los más pequeños, con animales de la selva y una figura de tigre. En la caja figura para niños de 2 años y medio a 5.', habilidades: [], perfiles: [],
    foto: 'assets/little-action.jpg', url: 'https://www.amazon.es/dp/B01M0N312H', precio: '30–35 €', opiniones: [] },
  { n: 'Jungle Speed', nuevo: '2026-11-19', cats: ['cartas'], etiqueta: 'Cartas', area: 'Atención y rapidez', jug: '2–10 jugadores', edad: 7, color: '#c91f3a', motivo: 'cartas',
    desc: 'Juego de cartas de velocidad y observación: hay que reconocer símbolos iguales y ser el más rápido en agarrar el tótem de madera. Partidas de unos 10 minutos. Edición de Asmodee, en español y portugués.', habilidades: ['atencion'], perfiles: [],
    foto: 'assets/jungle-speed.jpg', url: 'https://www.amazon.es/dp/B08DRRS4VN', precio: '14–18 €', opiniones: [] },
  { n: 'Mr. Potato', nuevo: '2026-11-19', cats: ['construir'], etiqueta: 'Construir', area: 'Creatividad y juego simbólico', jug: '', edad: null, color: '#8e5bd1', motivo: 'torre',
    desc: 'El Señor Patata: un muñeco para montar y personalizar con ojos, nariz, boca, orejas y accesorios. Es el juguete de Potato Head, no un juego de mesa.', habilidades: ['creatividad'], perfiles: [],
    foto: 'assets/mr-potato.jpg', url: 'https://www.amazon.es/dp/B0CP42LHNQ', precio: '9–12 €', opiniones: [] },
  { n: 'Topologix', nuevo: '2026-11-19', cats: ['pensar', 'mesa'], etiqueta: 'Pensar', area: 'Orientación en el espacio', jug: '', edad: 4, color: '#d6457a', motivo: 'puzle',
    desc: 'Juego educativo de Djeco, de la colección Eduludo, con tablero de cuadrícula y tarjetas ilustradas para colocar fichas según su posición. En la caja figura para niños de 4 a 6 años.', habilidades: ['espacial'], perfiles: [],
    foto: 'assets/topologix.jpg', url: 'https://www.amazon.es/dp/B00NTO5KVS', precio: '28–33 €', opiniones: [] }
];


// «Recién añadido»: cada juego nuevo lleva nuevo: 'AAAA-MM-DD'. La insignia se ve NUEVO_DIAS días.
var NUEVO_DIAS = 4;
function esNuevo(j) {
  if (!j.nuevo) return false;
  var p = j.nuevo.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]), hoy = new Date();
  var dias = Math.floor((new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()) - d) / 86400000);
  return dias >= 0 && dias < NUEVO_DIAS;
}
function insigniaNuevo(j) { return esNuevo(j) ? '<span class="nuevo">Recién añadido</span>' : ''; }
function textoTotal() {
  var n = JUEGOS.length, nn = JUEGOS.filter(esNuevo).length;
  return n + ' juguetes en la guía' + (nn ? ' · ' + nn + (nn === 1 ? ' recién añadido' : ' recién añadidos') : '');
}

// ---- Ilustraciones (cuando aún no hay foto) ---------------------------
function ilustracion(motivo, c) {
  var o = {
    cartas: '<g transform="translate(100 108)"><rect x="-38" y="-66" width="76" height="112" rx="10" transform="rotate(-24)" fill="#fff" opacity=".55"/><rect x="-38" y="-66" width="76" height="112" rx="10" transform="rotate(24)" fill="#fff" opacity=".75"/><rect x="-38" y="-66" width="76" height="112" rx="10" fill="#fff"/><circle cx="0" cy="-10" r="17" fill="' + c + '"/><rect x="-14" y="22" width="28" height="8" rx="4" fill="' + c + '" opacity=".5"/></g>',
    laberinto: '<rect x="26" y="30" width="148" height="148" rx="14" fill="#fff"/><path d="M48 52 H150 V82 H70 V112 H152 V152 H48 V124" fill="none" stroke="' + c + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="48" cy="52" r="9" fill="' + c + '"/><path d="M48 124 l8 -14 h-16z" fill="' + c + '"/>',
    puzle: '<g fill="#fff"><rect x="40" y="38" width="44" height="44" rx="9"/><rect x="88" y="38" width="44" height="44" rx="9" opacity=".8"/><rect x="40" y="86" width="44" height="44" rx="9" opacity=".8"/><rect x="40" y="134" width="44" height="44" rx="9" opacity=".6"/><rect x="118" y="108" width="44" height="44" rx="9" transform="rotate(14 140 130)"/></g>',
    letras: '<g fill="#fff"><rect x="24" y="70" width="46" height="62" rx="9"/><rect x="77" y="62" width="46" height="62" rx="9" transform="rotate(-6 100 93)"/><rect x="130" y="72" width="46" height="62" rx="9" transform="rotate(5 153 103)"/></g><g fill="' + c + '" font-size="40" font-weight="900" font-family="Avenir Next, Trebuchet MS, sans-serif" text-anchor="middle"><text x="47" y="115">P</text><text x="100" y="105" transform="rotate(-6 100 93)">A</text><text x="153" y="116" transform="rotate(5 153 103)">L</text></g>',
    preguntas: '<rect x="22" y="38" width="124" height="84" rx="24" fill="#fff"/><path d="M52 118 l-8 28 l30 -22z" fill="#fff"/><text x="84" y="104" font-size="72" font-weight="900" font-family="Avenir Next, Trebuchet MS, sans-serif" text-anchor="middle" fill="' + c + '">?</text><circle cx="148" cy="144" r="34" fill="#fff" opacity=".95"/><text x="148" y="156" font-size="34" font-weight="900" font-family="Avenir Next, Trebuchet MS, sans-serif" text-anchor="middle" fill="' + c + '">10</text>',
    gato: '<polygon points="52,86 60,34 98,66" fill="#fff"/><polygon points="148,86 140,34 102,66" fill="#fff"/><circle cx="100" cy="112" r="56" fill="#fff"/><circle cx="80" cy="106" r="8" fill="' + c + '"/><circle cx="120" cy="106" r="8" fill="' + c + '"/><polygon points="92,124 108,124 100,134" fill="' + c + '"/><path d="M88 142 Q100 152 112 142" fill="none" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/><polygon points="168,40 174,56 190,58 177,68 181,84 168,75 155,84 159,68 146,58 162,56" fill="#fff" opacity=".9"/>',
    polilla: '<ellipse cx="66" cy="96" rx="42" ry="58" transform="rotate(-18 66 96)" fill="#fff" opacity=".9"/><ellipse cx="134" cy="96" rx="42" ry="58" transform="rotate(18 134 96)" fill="#fff" opacity=".9"/><circle cx="62" cy="92" r="12" fill="' + c + '" opacity=".6"/><circle cx="138" cy="92" r="12" fill="' + c + '" opacity=".6"/><rect x="92" y="54" width="16" height="104" rx="8" fill="' + c + '"/><path d="M96 56 Q86 30 70 24 M104 56 Q114 30 130 24" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
    numeros: '<g fill="#fff"><rect x="24" y="70" width="46" height="62" rx="9"/><rect x="77" y="62" width="46" height="62" rx="9" transform="rotate(-6 100 93)"/><rect x="130" y="72" width="46" height="62" rx="9" transform="rotate(5 153 103)"/></g><g fill="' + c + '" font-size="42" font-weight="900" font-family="Avenir Next, Trebuchet MS, sans-serif" text-anchor="middle"><text x="47" y="116">1</text><text x="100" y="106" transform="rotate(-6 100 93)">2</text><text x="153" y="117" transform="rotate(5 153 103)">3</text></g>',
    torre: '<g fill="#fff"><rect x="48" y="146" width="104" height="30" rx="8"/><rect x="62" y="114" width="70" height="30" rx="8" transform="rotate(-4 97 129)" opacity=".85"/><rect x="82" y="82" width="60" height="30" rx="8" transform="rotate(6 112 97)"/><rect x="74" y="52" width="38" height="28" rx="8" transform="rotate(-8 93 66)" opacity=".85"/><circle cx="128" cy="44" r="14"/></g>',
    signo: '<text x="100" y="150" font-size="150" font-weight="900" font-family="Avenir Next, Trebuchet MS, sans-serif" text-anchor="middle" fill="#fff">?</text>'
  };
  return '<svg viewBox="0 0 200 200" aria-hidden="true">' + (o[motivo] || o.signo) + '</svg>';
}

// ---- Votos de profesionales ---------------------------------------------
// Destino del buzón (hoja de Google con Apps Script): comentarios, propuestas y votos.
var BUZON_URL = 'https://script.google.com/macros/s/AKfycbwPJWaqqchcHrIQAc88IjXLmuy_QZXcZNuFXGPvYTfVhBuiRkCU6OKkarD5QqbY64iItQ/exec';
// Con este número de votos de profesionales, una etiqueta pasa de «con votos» a «validada».
var UMBRAL_VALIDADO = 3;
// Recuentos leídos de la hoja: { 'Nombre del juego': { perfil: {clave: n}, habilidad: {clave: n}, votantes: n } }
var VOTOS = {};
var ROLES_VOTO = ['Logopeda', 'Maestra o maestro', 'Psicóloga o psicólogo', 'Terapeuta ocupacional', 'Otro perfil profesional'];

function votosN(j, tipo, k) {
  var v = VOTOS[j.n];
  return (v && v[tipo] && v[tipo][k]) || 0;
}
function listaDe(tipo) { return tipo === 'perfil' ? PERFILES : HABILIDADES; }

// Etiquetas validadas: las de la ficha y las que ya alcanzaron el umbral de votos.
function validadas(j, tipo) {
  var l = (tipo === 'perfil' ? (j.perfiles || []) : (j.habilidades || [])).slice();
  listaDe(tipo).forEach(function (o) { if (votosN(j, tipo, o.k) >= UMBRAL_VALIDADO && l.indexOf(o.k) === -1) l.push(o.k); });
  return l;
}
// Etiquetas aún sin validar: las sugeridas por el equipo (solo diagnósticos) y las que tienen pocos votos.
function sueltas(j, tipo) {
  var val = validadas(j, tipo), l = [];
  if (tipo === 'perfil') (j.sugeridos || []).forEach(function (k) { l.push(k); });
  listaDe(tipo).forEach(function (o) { var n = votosN(j, tipo, o.k); if (n > 0 && n < UMBRAL_VALIDADO) l.push(o.k); });
  return l.filter(function (k, i) { return l.indexOf(k) === i && val.indexOf(k) === -1; });
}
function perfilesDe(j, conSueltas) { return conSueltas ? validadas(j, 'perfil').concat(sueltas(j, 'perfil')) : validadas(j, 'perfil'); }
function habilidadesDe(j, conSueltas) { return conSueltas ? validadas(j, 'habilidad').concat(sueltas(j, 'habilidad')) : validadas(j, 'habilidad'); }

function textoVotos(n) { return n + (n === 1 ? ' voto' : ' votos'); }

// Etiquetas de una ficha: habilidades (o «Para pasarlo bien»), diagnósticos validados y sueltos.
function pastillas(j) {
  function una(tipo, k, clase, suelta) {
    var et = etiquetaDe(listaDe(tipo), k), n = votosN(j, tipo, k);
    var texto = n ? et + ' · ' + textoVotos(n) : (suelta && tipo === 'perfil' ? 'Sugerido: ' + et : et);
    var aviso = suelta ? ' title="' + (n ? 'Pocos votos todavía' : 'Sugerido por el equipo, pendiente de validar por profesionales') + '"' : (n ? ' title="Validado por profesionales"' : '');
    return '<span class="' + clase + (suelta ? ' sug' : '') + '"' + aviso + '>' + texto + '</span>';
  }
  var hv = validadas(j, 'habilidad'), hs = sueltas(j, 'habilidad');
  var h = hv.map(function (k) { return una('habilidad', k, 'pill-area', false); }).join('') +
          hs.map(function (k) { return una('habilidad', k, 'pill-area', true); }).join('');
  if (!h) h = '<span class="pill-juego">Para pasarlo bien</span>';
  var p = validadas(j, 'perfil').map(function (k) { return una('perfil', k, 'pill-perf', false); }).join('') +
          sueltas(j, 'perfil').map(function (k) { return una('perfil', k, 'pill-perf', true); }).join('');
  return h + p;
}

// Línea «Se sugiere para…» con su porqué (solo si el juego tiene sugerencias).
function porqueHtml(j) {
  if (!(j.sugeridos || []).length) return '';
  return '<p class="porque"><strong>Se sugiere para:</strong> ' +
    j.sugeridos.map(function (k) { return etiquetaDe(PERFILES, k); }).join(', ') + '. ' + (j.porque || '') + '</p>';
}

// Rango de precio en euros, o aviso si aún no hay enlace.
function precioHtml(j) {
  return j.precio
    ? '<span class="precio" title="Precio orientativo mirado en Amazon.es el ' + PRECIO_FECHA + '. Cambia con las ofertas.">' + j.precio + '</span>'
    : '<span class="precio sin">Precio por confirmar</span>';
}

// Barras con lo que votan los profesionales en un juego.
function votosHtml(j) {
  var v = VOTOS[j.n];
  if (!v || !v.votantes) return '<p class="vacio">Aún nadie ha votado.</p>';
  function filas(tipo) {
    var cl = v[tipo] || {};
    return Object.keys(cl).sort(function (a, b) { return cl[b] - cl[a]; }).map(function (k) {
      var n = cl[k], pct = Math.round(100 * n / v.votantes), ok = n >= UMBRAL_VALIDADO;
      return '<li' + (ok ? ' class="validada"' : '') + '><span class="v-et">' + etiquetaDe(listaDe(tipo), k) + (ok ? ' <em>validada</em>' : '') + '</span>' +
        '<span class="v-barra"><i style="width:' + pct + '%"></i></span><b>' + n + '</b></li>';
    }).join('');
  }
  var f1 = filas('perfil'), f2 = filas('habilidad');
  return '<p class="v-total">' + v.votantes + (v.votantes === 1 ? ' profesional ha votado' : ' profesionales han votado') + '. Con ' + UMBRAL_VALIDADO + ' votos una etiqueta queda validada.</p>' +
    (f1 ? '<h5>Diagnósticos</h5><ul class="votos">' + f1 + '</ul>' : '') +
    (f2 ? '<h5>Habilidades</h5><ul class="votos">' + f2 + '</ul>' : '');
}

// Lee los recuentos de la hoja (solo cifras, sin datos de quién votó). Llama a listo() si hay datos nuevos.
function cargarVotos(listo) {
  if (!BUZON_URL || typeof fetch !== 'function') return;
  fetch(BUZON_URL + '?accion=votos')
    .then(function (r) { return r.json(); })
    .then(function (res) { if (res && res.ok && res.votos) { VOTOS = res.votos; if (listo) listo(); } })
    .catch(function () { /* sin conexión: se muestran las fichas sin votos */ });
}
