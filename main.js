status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video.size(480,380);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}

function draw(){
    image(0, 0, 480, 380);
}
