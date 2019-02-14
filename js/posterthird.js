$('#poster-third').append('<canvas id="whiplash" width="420" height="420"> </canvas>');


var canvas;
var ctx;
var x = 0;
var rs;
var delta = 1;

window.onload = function() {
  canvas = document.getElementById("whiplash");
  if (canvas == null || canvas.getContext == null) return;
  ctx = canvas.getContext("2d");
  ctxEffect = canvas.getContext("2d");
  ctx.translate(-20, -90);
  ctx.rotate((Math.PI / 180) * 20);
  $('#poster-third').click(function(){
      rs = 23;
      setInterval(draw, 30);
      setInterval(drawEffect, 30);
  });

}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineWidth = x;
  ctx.strokeStyle = "white";  
  ctx.lineCap = 'square';
  ctx.beginPath();
  ctx.arc(108, 178, 23, 0, Math.PI * 2);
  ctx.arc(108,215,23,0,1*Math.PI);
  ctx.stroke();


  ctx.moveTo(187,178);
  ctx.arc(164, 178, 23, 0, Math.PI * 2);
  ctx.stroke();


  ctx.moveTo(243,178);
  ctx.arc(220, 178, 23, 0, Math.PI * 2);
  ctx.stroke();


  ctx.moveTo(299,178);
  ctx.arc(276, 178, 23, 0, Math.PI * 2);
  ctx.lineTo(299,125);
  ctx.stroke();

  ctx.moveTo(220,178);
  ctx.lineTo(220,234);
  ctx.arc(197,234,23,0,1*Math.PI);
  ctx.stroke();


  ctx.moveTo(276,234);
  ctx.arc(253, 234, 23, 0, Math.PI * 2);
  ctx.stroke();


  ctx.moveTo(332,234);
  ctx.arc(309, 234, 23, 0, Math.PI * 2);
  ctx.moveTo(286,234);
  ctx.lineTo(286,173);
  ctx.stroke();


  if(x > 10 || x < 0){
    delta = -delta;
  }
  x += delta;
}
  
function drawEffect(){
  ctxEffect.lineWidth = 1;
  ctxEffect.beginPath();
  ctxEffect.arc(108, 178, rs, 0, Math.PI * 2);
  ctxEffect.stroke();
  ctxEffect.strokeStyle = "white";

  if(rs < 500){
    ++rs;
  } else{
    rs = 23;
  }
}

