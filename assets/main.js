(function () {
  'use strict';

  // --- Nav scroll: shrink + strengthen backdrop on scroll ---
  var nav = document.querySelector('nav');
  if (nav) {
    var scrolled = false;
    var onScroll = function () {
      var shouldScroll = window.scrollY > 24;
      if (shouldScroll !== scrolled) {
        scrolled = shouldScroll;
        nav.classList.toggle('scrolled', scrolled);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Reveal on scroll ---
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.reveal, .cs-card').forEach(function (el) {
    revealObserver.observe(el);
  });

  // --- Funnel bar animation ---
  var funnelObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.f-bar').forEach(function (bar, i) {
          var w = bar.dataset.w;
          bar.style.width = '0';
          setTimeout(function () { bar.style.width = w; }, i * 120 + 250);
        });
        funnelObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.funnel').forEach(function (el) {
    funnelObserver.observe(el);
  });

  // --- Count-up animation for stat numbers ---
  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var text = el.textContent.trim();
      var match = text.match(/^([+↓↑]?)(\d+)(.*)$/);
      if (!match) { countObserver.unobserve(el); return; }

      var prefix = match[1];
      var target = parseInt(match[2], 10);
      var suffix = match[3];
      var duration = 800;
      var start = performance.now();

      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(target * eased);
        el.textContent = prefix + current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num, .kpi-num, .out-num').forEach(function (el) {
    countObserver.observe(el);
  });
})();
