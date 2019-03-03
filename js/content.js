
(function (){
  setInterval(function() {
    if (0 < location.search.split('&').map(it => it.split(/=/)).filter(it => it[0] == 's').length)
      return;
    Array.slice(document.querySelectorAll('.lv-subcategory ~ .lv-status[data-simple-status=false]')).map(it => it.previousElementSibling.previousElementSibling.style.display = 'none')
  }, 1000);
})();
