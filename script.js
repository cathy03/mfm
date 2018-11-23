var windowWidth = $(window).width();  
var listCount = 0;
var addedList = '<li class="parent"><div class="child"><img src="images/no.svg"></div></li>'

anime.easings['myCustomEasingName'] = function(t){
  return Math.pow(Math.sin(t*3),3);
  }

for (i = 0; i < windowWidth/2; i++) { 
  $( ".wrapper" ).append(addedList);
  $(".child").eq(i).css('left',2*listCount--);
}

for (i = 0; i < windowWidth/2; i++) { 
  anime({
    targets: 'li:nth-child('+i+') .child',
    translateY:[
        function(){ return anime.random(-5, 5) +'vh';}, 
        function(){ return anime.random(-75, 75) +'vh';} 
    ],
    duration: function(){ return anime.random(1000, 5000)},
    loop: true,
    elasticity: 5000,
    easing: 'myCustomEasingName',
  });
}

$('.wrapper').click(function(){
  anime({
    targets: 'li .child',
    translateY: 0,
    duration: 1000,
    direction: 'alternate',
    loop: false,
    elasticity: 10000,
  });
  setTimeout(function(){
    for (i = 0; i < windowWidth/2; i++){ 
      anime({
        targets: 'li:nth-child('+i+') .child',
        translateY:[
            0, 
            function(){ return anime.random(-75, 75) +'vh';} 
        ],
        duration: function(){ return anime.random(1000, 5000)},
        loop: true,
        elasticity: 5000,
        easing: 'myCustomEasingName',
      });
    }
  },700);
});
