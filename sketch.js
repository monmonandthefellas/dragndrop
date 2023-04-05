var dropzone;
var canvas;

function setup() {
  canvas = createCanvas(0,0);
  dropzone = select ('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight)
}

function highlight(){
  dropzone.style('background-color', '#ccc');
}

function unhighlight(){
  dropzone.style('background-color', '#fff');
}

function gotFile(file){ // this arg is inherent to p5
  
  var img = createImg(file.data , " ");
  img.size(100,100);
  img.style('display', 'inline');
  
}

function draw() {
  background(220);
}