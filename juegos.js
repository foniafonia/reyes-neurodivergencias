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
    foto: 'assets/junk-art-revolution.jpg', url: 'https://www.amazon.es/dp/B0FN8TP7ZK', precio: '40–46 €', opiniones: [] }
];

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
