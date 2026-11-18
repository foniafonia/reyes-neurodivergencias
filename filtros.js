// Panel lateral de búsqueda y filtros, compartido por las dos páginas.
// Necesita: JUEGOS, PERFILES, HABILIDADES y etiquetaDe (juegos.js), y tarjetas <li class="juego" data-i="N"> dentro de #grid.
// Uso: Filtros.montar(document.getElementById('lateral'));
var Filtros = (function () {
  var TIPOS = [
    { k: 'cartas', n: 'Cartas' }, { k: 'mesa', n: 'Mesa' }, { k: 'palabras', n: 'Palabras' },
    { k: 'pensar', n: 'Pensar' }, { k: 'construir', n: 'Construir' }
  ];
  var EDADES = [
    { k: 'hasta5', n: 'Hasta 5 años', ok: function (e) { return e <= 5; } },
    { k: '6-7', n: '6–7 años', ok: function (e) { return e >= 6 && e <= 7; } },
    { k: '8mas', n: '8 años o más', ok: function (e) { return e >= 8; } }
  ];
  var GRUPOS = [
    { k: 'area', n: 'Trabajan una habilidad' },
    { k: 'diversion', n: 'Para pasarlo bien' }
  ];
  var estado = { q: '', perf: [], hab: [], edad: [], tipo: [], grupo: [] };
  var verSugeridos = true;   // incluir etiquetas «Sugerido» (aún sin validar por profesionales)
  var lateral = null;

  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function tiene(lista, k) { return (lista || []).indexOf(k) !== -1; }
  function tramo(k) { for (var i = 0; i < EDADES.length; i++) if (EDADES[i].k === k) return EDADES[i]; return null; }
  // Etiquetas de un juego: las validadas (ficha o votos) y, si el interruptor está activo, las sugeridas o con pocos votos.
  function grupoDe(j) { return habilidadesDe(j, false).length ? 'area' : 'diversion'; }

  // Texto en el que busca el cuadro de búsqueda: nombre, fichas, opiniones y etiquetas con sus sinónimos.
  function textoDe(j) {
    var partes = [j.n, j.etiqueta, j.area, j.desc, j.jug, (j.opiniones || []).join(' ')];
    habilidadesDe(j, verSugeridos).forEach(function (k) { HABILIDADES.forEach(function (h) { if (h.k === k) partes.push(h.n, h.alias); }); });
    perfilesDe(j, verSugeridos).forEach(function (k) { PERFILES.forEach(function (p) { if (p.k === k) partes.push(p.n, p.alias); }); });
    return norm(partes.join(' '));
  }

  function cumple(j) {
    var palabras = norm(estado.q).split(/\s+/).filter(Boolean);
    var texto = textoDe(j);
    function alguno(sel, f) { return !sel.length || sel.some(f); }
    return palabras.every(function (p) { return texto.indexOf(p) !== -1; }) &&
      alguno(estado.perf, function (k) { return tiene(perfilesDe(j, verSugeridos), k); }) &&
      alguno(estado.hab, function (k) { return tiene(habilidadesDe(j, verSugeridos), k); }) &&
      alguno(estado.edad, function (k) { return !!j.edad && tramo(k).ok(j.edad); }) &&
      alguno(estado.tipo, function (k) { return tiene(j.cats, k); }) &&
      alguno(estado.grupo, function (k) { return k === grupoDe(j); });
  }

  function contar(g, k) {
    return JUEGOS.filter(function (j) {
      if (g === 'perf') return tiene(perfilesDe(j, verSugeridos), k);
      if (g === 'hab') return tiene(habilidadesDe(j, verSugeridos), k);
      if (g === 'edad') return !!j.edad && tramo(k).ok(j.edad);
      if (g === 'tipo') return tiene(j.cats, k);
      return grupoDe(j) === k;
    }).length;
  }

  function grupoHtml(titulo, g, lista) {
    var chips = lista.map(function (o) {
      var n = contar(g, o.k);
      return '<button type="button" class="op' + (n ? '' : ' vacia') + '" aria-pressed="false" data-g="' + g + '" data-k="' + o.k + '">' +
        o.n + ' <span class="n">' + n + '</span></button>';
    }).join('');
    return '<h3>' + titulo + '</h3><div class="opciones">' + chips + '</div>';
  }

  function refrescarContadores() {
    if (!lateral) return;
    lateral.querySelectorAll('.op').forEach(function (b) {
      var n = contar(b.getAttribute('data-g'), b.getAttribute('data-k'));
      b.querySelector('.n').textContent = n;
      b.classList.toggle('vacia', !n);
    });
  }

  function aplicar() {
    var tarjetas = document.querySelectorAll('#grid .juego');
    var visibles = 0;
    tarjetas.forEach(function (li) {
      var j = JUEGOS[Number(li.getAttribute('data-i'))];
      var si = cumple(j);
      li.style.display = si ? '' : 'none';
      if (si) visibles++;
    });
    var cuenta = document.getElementById('cuentaResultados');
    if (cuenta) cuenta.textContent = 'Mostrando ' + visibles + ' de ' + JUEGOS.length + ' juguetes';
    var vacio = document.getElementById('sinResultados');
    if (vacio) {
      vacio.hidden = visibles !== 0;
      vacio.textContent = estado.perf.length
        ? 'Todavía no hay juegos marcados para ese diagnóstico. Los profesionales del grupo los van sumando; mientras, prueba a buscar por habilidad.'
        : 'No hay juegos con esos filtros. Prueba a quitar alguno.';
    }
    var hay = estado.q || estado.perf.length || estado.hab.length || estado.edad.length || estado.tipo.length || estado.grupo.length;
    var limpiar = lateral && lateral.querySelector('.limpiar');
    if (limpiar) limpiar.hidden = !hay;
    var boton = lateral && lateral.querySelector('.lateral-boton');
    if (boton) boton.textContent = 'Buscar y filtrar' + (hay ? ' · ' + visibles + ' resultados' : '');
  }

  function limpiar() {
    estado = { q: '', perf: [], hab: [], edad: [], tipo: [], grupo: [] };
    var q = lateral.querySelector('#buscar'); if (q) q.value = '';
    lateral.querySelectorAll('.op').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    aplicar();
  }

  function montar(el) {
    lateral = el;
    el.innerHTML =
      '<button type="button" class="lateral-boton" aria-expanded="false">Buscar y filtrar</button>' +
      '<div class="lateral-cuerpo">' +
        '<h2>Encuentra su juguete</h2>' +
        '<label class="buscador"><span class="solo-lector">Buscar</span>' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5" stroke-linecap="round"/></svg>' +
          '<input type="search" id="buscar" autocomplete="off" placeholder="Nombre, diagnóstico o habilidad"></label>' +
        grupoHtml('Dificultad o diagnóstico', 'perf', PERFILES) +
        '<label class="interruptor"><input type="checkbox" id="verSug" checked> Incluir sugerencias y etiquetas con pocos votos</label>' +
        grupoHtml('Habilidad que trabaja', 'hab', HABILIDADES) +
        grupoHtml('Edad', 'edad', EDADES) +
        grupoHtml('Tipo de juego', 'tipo', TIPOS) +
        grupoHtml('Para qué', 'grupo', GRUPOS) +
        '<p class="resultados" id="cuentaResultados" aria-live="polite"></p>' +
        '<button type="button" class="limpiar" hidden>Quitar filtros</button>' +
        '<p class="aviso-lateral">Las etiquetas se validan con los votos de los profesionales del grupo; mientras, aparecen como «Sugerido» o con pocos votos. Son orientativas y no sustituyen la valoración de un especialista.</p>' +
      '</div>';

    el.addEventListener('click', function (e) {
      var op = e.target.closest ? e.target.closest('.op') : null;
      if (op) {
        var g = op.getAttribute('data-g'), k = op.getAttribute('data-k'), i = estado[g].indexOf(k);
        if (i === -1) estado[g].push(k); else estado[g].splice(i, 1);
        op.setAttribute('aria-pressed', i === -1 ? 'true' : 'false');
        aplicar();
        return;
      }
      if (e.target.closest && e.target.closest('.limpiar')) { limpiar(); return; }
      var btn = e.target.closest && e.target.closest('.lateral-boton');
      if (btn) {
        var abierto = el.classList.toggle('abierto');
        btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      }
    });
    el.querySelector('#buscar').addEventListener('input', function (e) { estado.q = e.target.value; aplicar(); });
    el.querySelector('#verSug').addEventListener('change', function (e) { verSugeridos = e.target.checked; refrescarContadores(); aplicar(); });
    refrescarContadores();
    aplicar();
  }

  // Vuelve a calcular contadores y resultados (por ejemplo, cuando llegan los votos de la hoja).
  function refrescar() { refrescarContadores(); aplicar(); }

  return { montar: montar, aplicar: aplicar, refrescar: refrescar, estado: function () { return estado; } };
})();
