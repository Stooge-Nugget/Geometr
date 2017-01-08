//Prototype for Geometric Art program: By Alexander Genovese

'use strict';

const pointSize = 10;

var canvas;
var ctx;

(function setup(){
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

//Default for now, eventually select from standard resolutions
canvas.width = 840//1024;
canvas.height = 480//768;
canvas.style = "background: #333; margin: auto; display: block;";

document.body.appendChild(canvas);
})();

function populate(ammount){
  var points = [];
  var width = canvas.width;
  var height = canvas.height;

  //Currently working with symetry in mind
  for(var i = 0; i < ammount; i++){
    var randomX = Math.floor( (Math.random() * (width/2 - pointSize)) + pointSize );
    var randomY = Math.floor( (Math.random() * (height - pointSize)) + pointSize );//Investigate later...

    // console.log(randomX + " : " + randomY);
    console.log( (randomX > width - pointSize) + " : " + (randomY > height - pointSize));

    points.push([randomX, randomY]);
  }

  return points;
}

function draw(points, lineToggle){
  ctx.fillStyle = "#fff";

  for(var i = 0; i < points.length; i++){
    ctx.beginPath();
    ctx.arc(points[i][0], points[i][1], pointSize/2, 0, 2 * Math.PI);
    ctx.arc(canvas.width - points[i][0], points[i][1], pointSize/2, 0, 2 * Math.PI);//Accounts for symetry
    ctx.fill();
    ctx.closePath();
  }

  if(lineToggle){
    ctx.strokeStyle = "#fff"

    for(var i = 0; i < points.length; i++){
      for(var j = 0; j < points.length; j++){
        ctx.beginPath();
        ctx.moveTo(points[i][0], points[i][1]);
        ctx.lineTo(canvas.width - points[j][0], points[j][1]);//Only draws to other side...
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function render(){
  var pointCount = document.getElementById("pointCount").value;
  var lineToggle = document.getElementById("lineToggle").checked;
  var bgColour = document.getElementById("bgColour").value;
  var points;

  // alert("test: " + pointCount + " " + lineToggle + " " + bgColour);
  points = populate(pointCount);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw(points, lineToggle);
  canvas.style = "background: " + bgColour + "; margin: auto; display: block;";

}

//UI controls

function openControls(){
  document.getElementById("sideMenu").style.width = "400px";
}

function closeControls(){
  document.getElementById("sideMenu").style.width = "0px";
}
