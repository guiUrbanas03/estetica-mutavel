const slider = document.querySelector('.carousel-container');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

  console.log('scrollLeft: ', scrollLeft);
  console.log('slider.scrollWidth: ', slider.scrollWidth);
  console.log('slider.clientWidth: ', slider.clientWidth);
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;

  if (slider.scrollWidth - slider.clientWidth === scrollLeft) {
    slider.scrollTo({
      left: 0,
    });
  }
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
