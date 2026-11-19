/* Contador anónimo de visitas (abacus). No guarda nombres ni datos personales: solo números.
   - Cuenta aperturas, aparatos distintos, página, canal (?c=wa, tg, fb, ig, sk, ln, th, og) y acciones.
   - Entrar una vez con ?yo=1 hace que ese aparato no cuente (útil para José). ?yo=0 lo vuelve a activar. */
(function () {
  var NS = 'https://abacus.jasoncameron.dev/hit/foniafonia-reyes/';
  var CANALES = ['wa', 'tg', 'fb', 'ig', 'sk', 'ln', 'th', 'og'];
  var QS = new URLSearchParams(location.search);
  function lee(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function graba(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  if (QS.get('yo') === '1') graba('reyes-no-contar', '1');
  if (QS.get('yo') === '0') { try { localStorage.removeItem('reyes-no-contar'); } catch (e) {} }
  var contar = location.hostname === 'foniafonia.github.io' && lee('reyes-no-contar') !== '1';
  function hit(k) { if (!contar) return; try { new Image().src = NS + k; } catch (e) {} }
  window.contarReyes = hit;

  var ult = location.pathname.split('/').pop().replace(/\.html$/, '');
  var pag = { '': 'inicio', inicio: 'inicio', index: 'profesionales', familias: 'familias', catalogo: 'catalogo' }[ult] || 'otra';
  var c = QS.get('c');
  if (c && CANALES.indexOf(c) >= 0) graba('reyes-canal', c); else c = lee('reyes-canal');
  if (!c || CANALES.indexOf(c) < 0) c = 'sin';
  var d = new Date(), dia = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2);

  var nuevo = lee('reyes-visto') !== '1'; if (nuevo) graba('reyes-visto', '1');
  var nuevaPag = lee('reyes-vio-' + pag) !== '1'; if (nuevaPag) graba('reyes-vio-' + pag, '1');
  hit('reyes_aperturas'); hit('reyes_pag_' + pag); hit('reyes_canal_' + c + '_aperturas'); hit('reyes_dia_' + dia + '_aperturas');
  if (nuevo) { hit('reyes_personas'); hit('reyes_canal_' + c + '_personas'); hit('reyes_dia_' + dia + '_personas'); }
  if (nuevaPag) hit('reyes_pag_' + pag + '_personas');

  document.addEventListener('click', function (e) {
    var t = e.target; if (!t || !t.closest) return;
    var b;
    if ((b = t.closest('#imprimir, #imprimirPdf'))) hit(pag === 'catalogo' ? 'reyes_acc_catalogo_imprimir' : 'reyes_acc_carta_imprimir');
    else if (t.closest('#wa')) hit('reyes_acc_carta_whatsapp');
    else if (t.closest('#copiar')) hit('reyes_acc_carta_copiar');
    else if (t.closest('button.quiero')) hit('reyes_acc_carta_juguete');
    else if (t.closest('a[href*="skool.com"]')) { hit('reyes_acc_skool'); hit('reyes_acc_skool_desde_' + pag); }
    else if (t.closest('#irFamilias')) hit('reyes_acc_inicio_familias');
    else if (t.closest('#irProfesionales')) hit('reyes_acc_inicio_profesionales');
    else if (t.closest('#irCatalogo')) hit('reyes_acc_inicio_catalogo');
    else if (t.closest('a[data-ventana="juego-nuevo"]')) hit('reyes_acc_abrir_proponer');
    else if (t.closest('a[data-ventana="cuenta"], a[data-juego]')) hit('reyes_acc_abrir_experiencia');
  }, true);

  // Envíos al buzón que han llegado bien: votos, propuestas y comentarios.
  if (typeof window.fetch === 'function') {
    var f0 = window.fetch;
    window.fetch = function (url, init) {
      var p = f0.apply(this, arguments);
      try {
        if (init && init.method === 'POST' && String(url).indexOf('script.google.com') >= 0) {
          var cuerpo = String(init.body || '');
          var tipo = /"tipo":"voto"/.test(cuerpo) ? 'voto' : /propuesta-juego/.test(cuerpo) ? 'propuesta' : 'comentario';
          p.then(function (r) { try { r.clone().json().then(function (j) { if (j && j.ok) hit('reyes_acc_envio_' + tipo); }); } catch (e) {} }).catch(function () {});
        }
      } catch (e) {}
      return p;
    };
  }
})();
