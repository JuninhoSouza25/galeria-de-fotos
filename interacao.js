document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.galeria-stream');
    var items = document.querySelectorAll('.galeria-item');
    var prev = document.querySelector('.galeria-prev');
    var next = document.querySelector('.galeria-next');
  
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.galeria-item');
    });
  
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.galeria-item');
    });
  });