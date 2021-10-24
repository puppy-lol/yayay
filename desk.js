img = "";
status = "";

function preload() {
    img = loadImage('desk.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
} 

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#FF0000');
    text("Desk", 100, 73);
    noFill();
    stroke("#FF0000");
    rect(90, 63, 500, 350);
}

function back() {
    window.location = "index.html";
}