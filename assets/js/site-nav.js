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

    /* Collapsible menu (hamburger). The CSS hides the inline links on small
       screens; here we copy them into the dropdown so the button can reveal
       them. Copying (not moving) keeps the desktop layout untouched. */
    var nav = document.querySelector('#site-nav.greedy-nav');
    if (!nav) { return; }
    var vlinks = nav.querySelector('.visible-links');
    var hlinks = nav.querySelector('.hidden-links');
    var btn = nav.querySelector('button');
    if (!vlinks || !hlinks || !btn) { return; }

    Array.prototype.forEach.call(vlinks.children, function (li) {
      if (!li.classList.contains('persist')) {
        hlinks.appendChild(li.cloneNode(true));
      }
    });

    btn.addEventListener('click', function () {
      hlinks.classList.toggle('hidden');
      btn.classList.toggle('close');
    });
  });
})();
