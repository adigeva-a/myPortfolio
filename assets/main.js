(function () {
  'use strict';

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .cs-card').forEach(function (el) {
    revealObserver.observe(el);
  });

  var funnelObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.f-bar').forEach(function (bar, i) {
          var w = bar.dataset.w;
          bar.style.width = '0';
          setTimeout(function () { bar.style.width = w; }, i * 130 + 200);
        });
        funnelObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.funnel').forEach(function (el) {
    funnelObserver.observe(el);
  });
})();
