var canvas = document.getElementById("can");

var ctx = canvas.getContext("2d");

ctx.beginPath(); 
ctx.lineWidth = 2; 
ctx.arc(100, 100, 40, 0, 2*Math.PI);

ctx.stroke();