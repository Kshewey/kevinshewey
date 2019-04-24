$(document).ready(function() {
 // init ScrollMagic
 const controller = new ScrollMagic.Controller();

 // build a scene

 const ourScene = new ScrollMagic.Scene({
   triggerElement: '#about',
   duration: 200
 })
.setClassToggle('#nav-background', 'nav-background-color') //add class
.addIndicators({
  name: 'fade scene',
  colorTrigger: 'black',
  colorStart: '#75C6905',
  colorEnd: 'pink'
})
.addTo(controller);
});
