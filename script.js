//Prototype for Geometric Art program: By Alexander Genovese

'use strict';

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

function draw(){

}

function render(){
  //Test values
  var pointCount = document.getElementById("pointCount").value;
  var lineToggle = document.getElementById("lineToggle").checked;
  var bgColour = document.getElementById("bgColour").value;

  alert("test: " + pointCount + " " + lineToggle + " " + bgColour);
}

//UI controls

function openControls(){
  document.getElementById("sideMenu").style.width = "400px";
}

function closeControls(){
  document.getElementById("sideMenu").style.width = "0px";
}
