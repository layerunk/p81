var canvas = document.getElementById("can");

var ctx = canvas.getContext("2d");

ctx.beginPath(); 
ctx.lineWidth = 2; 
ctx.rect(150, 143, 430, 200,);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "blue";
ctx.lineWidth = 5; 
ctx.arc(270, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "black";
ctx.lineWidth = 5; 
ctx.arc(370, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "red";
ctx.lineWidth = 5; 
ctx.arc(470, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5; 
ctx.arc(320, 250, 40, 0, 2*Math.PI);
ctx.stroke();ctx.beginPath(); 

ctx.strokeStyle = "green";
ctx.lineWidth = 5; 
ctx.arc(420, 250, 40, 0, 2*Math.PI);
ctx.stroke();