document.addEventListener('DOMContentLoaded', function() {
  const rectangles = document.querySelectorAll('.rectangle');

  rectangles.forEach(function(rectangle) {
    rectangle.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});