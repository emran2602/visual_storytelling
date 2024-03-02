

var scrolly = document.querySelector("#scrolly");
console.log(scrolly)
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  var el = response.element;

  // remove is-active from all steps
  // then add is-active to this step
  steps.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');

  // update graphic based on step
  sticky.querySelector("p").innerText = el.dataset.step;

}


function init() {
  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.5,
      debug: false
    })
    .onStepEnter(handleStepEnter);


  // setup resize event
  window.addEventListener("resize", scroller.resize);
}

// kick things off
init();

 


document.addEventListener('DOMContentLoaded', function() {
  const rectangles = document.querySelectorAll('.rectangle');

  rectangles.forEach(function(rectangle) {
    rectangle.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetRect = targetElement.getBoundingClientRect();
        const offset = targetRect.top  - (window.innerHeight / 2) + window.scrollY;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });
});

