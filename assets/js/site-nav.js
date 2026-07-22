(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {
    /* Author "Follow" dropdown */
    var followBtn = document.querySelector('.author__urls-wrapper > button');
    if (!followBtn) { return; }
    var urls = document.querySelector('.author__urls');
    followBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (urls) { urls.classList.toggle('is--visible'); }
      followBtn.classList.toggle('open');
    });
  });
})();
