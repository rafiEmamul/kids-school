const link = document.getElementById('something');

link.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'blog.html';
});