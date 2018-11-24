var windowWidth = $(window).width();  
var listCount = 0;
var addedList = '<li class="parent"><div class="child"><img src="images/no.png"></div></li>'

anime.easings['myCustomEasingName'] = function(t){
  return Math.pow(Math.sin(t*3),3);
  }

for (i = 0; i < windowWidth/2; i++) { 
  $( ".wrapper" ).append(addedList);
  $(".child").eq(i).css('left',2*listCount--);
}

for (i = 0; i < windowWidth/2; i++) { 
  anime({
    targets: 'li:nth-child('+i+') .child img',
    translateY:[
        function(){ return anime.random(-5, 5) +'vh';}, 
        function(){ return anime.random(-80, 80) +'vh';} 
    ],
    duration: function(){ return anime.random(1000, 5000)},
    loop: true,
    elasticity: 5000,
    easing: 'myCustomEasingName',
  });
}

$('.wrapper').click(function(){
  anime({
    targets: 'li .child img',
    translateY: 0,
    duration: 1000,
    direction: 'alternate',
    loop: false,
    elasticity: 10000,
  });
  setTimeout(function(){
    for (i = 0; i < windowWidth/2; i++){ 
      anime({
        targets: 'li:nth-child('+i+') .child img',
        translateY:[
            0, 
            function(){ return anime.random(-80, 80) +'vh';} 
        ],
        duration: function(){ return anime.random(1000, 5000)},
        loop: true,
        elasticity: 5000,
        easing: 'myCustomEasingName',
      });
    }
  },700);
});


var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector(".contents"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}