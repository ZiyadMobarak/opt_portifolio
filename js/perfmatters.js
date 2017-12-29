function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

function ga(w, g) {
  w['GoogleAnalyticsObject'] = g;
  w[g] = w[g] || function() {
    (w[g].q = w[g].q || []).push(arguments)
  };
  w[g].l = 1 * new Date();
}

window.addEventListener("load", function(event) {
  logCRP();

  WebFont.load({
    google: {
      families: ['Open Sans']
    }
  });

  ga('create', 'UA-111735627-1');
  ga('send', 'pageview');
});