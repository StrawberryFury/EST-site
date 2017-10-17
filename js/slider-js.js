document.getElementById('slider-left').on-click = sliderLeft;

function sliderLeft(){
  var slider = document.getElementById('slider')
  left = left - 128;
  slider.style.left = left+'px';
}