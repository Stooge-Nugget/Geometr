//Prototype for Geometric Art program: By Alexander Genovese

'use strict';

const pointSize = 10;

var canvas;
var ctx;

(function setup(){
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

//Default for now, eventually select from standard resolutions
canvas.width = 1920//840//1024;
canvas.height = 1080//480//768;
canvas.style = "margin: auto; display: block;";

ctx.fillStyle = "#333";//default background-color
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.body.appendChild(canvas);
})();

function populate(ammount){
  var ammount = document.getElementById("pointCount").value;
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

function draw(points){
  var lineToggle = document.getElementById("lineToggle").checked;
  var bgColour = document.getElementById("bgColour").value;

  ctx.fillStyle = bgColour;//default background-color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = document.getElementById("pointCol").value;

  for(var i = 0; i < points.length; i++){
    ctx.beginPath();
    ctx.arc(points[i][0], points[i][1], pointSize/2, 0, 2 * Math.PI);
    ctx.arc(canvas.width - points[i][0], points[i][1], pointSize/2, 0, 2 * Math.PI);//Accounts for symetry
    //Might be better to create extra coords for symetry, instead of derive values
    ctx.fill();
    ctx.closePath();
  }

  if(lineToggle){
    // ctx.strokeStyle = document.getElementById("lineCol").value;

    for(var i = 0; i < points.length; i++){
      for(var j = 0; j < points.length; j++){

        // var grd = ctx.createLinearGradient(points[i][0], points[i][1], canvas.width - points[j][0], points[j][1]);//Make into function
        var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);//Make into function
        grd.addColorStop(0, "blue");
        grd.addColorStop(1, "purple");
        ctx.strokeStyle = grd;

        ctx.beginPath();
        ctx.moveTo(points[i][0], points[i][1]);
        ctx.lineTo(canvas.width - points[j][0], points[j][1]);//Only draws to other side...
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

// function getColour(type){
//   var colour;
//
//   switch(){
//     case "point":
//       colour = document.getElementById("pointCol").value;
//       break;
//     case "line":
//       colour = document.getElementById("lineCol").value;
//       break;
//     case ""
//   }
// }

function render(){
  var bgColour = document.getElementById("bgColour").value;
  var points;

  points = populate();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw(points);
  canvas.style = "background: " + bgColour + "; margin: auto; display: block;";
}

function save(){
  var dataURL = canvas.toDataURL('image/png');

  window.open(dataURL, "_blank");
}

//UI controls

function openControls(){
  document.getElementById("sideMenu").style.width = "400px";
}

function closeControls(){
  document.getElementById("sideMenu").style.width = "0px";
}
