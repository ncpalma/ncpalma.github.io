(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {
    /* Author "Follow" dropdown */
    var followBtn = document.querySelector('.author__urls-wrapper > button');
    if (followBtn) {
      var urls = document.querySelector('.author__urls');
      followBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (urls) { urls.classList.toggle('is--visible'); }
        followBtn.classList.toggle('open');
      });
    }

    /* Collapsible menu (hamburger) */
    var nav = document.querySelector('#site-nav.greedy-nav');
    if (!nav) { return; }
    var vlinks = nav.querySelector('.visible-links');
    var hlinks = nav.querySelector('.hidden-links');
    var btn = nav.querySelector('button');
    if (!vlinks || !hlinks || !btn) { return; }

    var movable = [];
    Array.prototype.forEach.call(vlinks.children, function (li) {
      if (!li.classList.contains('persist')) { movable.push(li); }
    });

    function tailRef() {
      for (var i = 1; i < vlinks.children.length; i++) {
        if (vlinks.children[i].classList.contains('persist')) { return vlinks.children[i]; }
      }
      return null;
    }

    var MOBILE = 925;
    var collapsed = null;

    function collapse() {
      if (collapsed === true) { return; }
      movable.forEach(function (li) { hlinks.appendChild(li); });
      collapsed = true;
    }
    function expand() {
      if (collapsed === false) { return; }
      var ref = tailRef();
      movable.forEach(function (li) { vlinks.insertBefore(li, ref); });
      hlinks.classList.add('hidden');
      btn.classList.remove('close');
      collapsed = false;
    }
    function sync() {
      if (window.innerWidth <= MOBILE) { collapse(); } else { expand(); }
    }

    btn.addEventListener('click', function () {
      hlinks.classList.toggle('hidden');
      btn.classList.toggle('close');
    });

    sync();
    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(sync, 150);
    });
  });
})();
