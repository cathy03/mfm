var posterWidth = $(".poster").width();
var listCount = 0;
var addedList = '<li class="parent"><div class="child"><img class="keyword" src="images/no.png"></div></li>'

for (i = 0; i < posterWidth; i++) { 
  $( ".wrapper" ).append(addedList);
  $(".child").eq(i).css('left',listCount--);
}

anime.easings['myCustomEasingName'] = function(t){
  return Math.pow(Math.sin(t*3),3);
  }


for (i = 0; i < posterWidth; i++) { 
  anime({
    targets: 'li:nth-child('+i+') .child img',
    translateY: function(){ return anime.random(-85, 85) +'vh';},
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
    for (i = 0; i < posterWidth; i++){ 
      anime({
        targets: 'li:nth-child('+i+') .child img',
        translateY: function(){ return anime.random(-85, 85) +'vh';},
        duration: function(){ return anime.random(1000, 5000)},
        loop: true,
        elasticity: 5000,
        easing: 'myCustomEasingName',
      });
    }
  },700);
});


var animation = bodymovin.loadAnimation({
  container: $('.secondMovie.poster'),
  path: 'data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
})