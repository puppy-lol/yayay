img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('bedroom.jpg');
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
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    
    if(status != "") {
        for(var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x - 800, objects[i].y - 600);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x - 800, objects[i].y - 640, objects[i].width - 100, objects[i].height - 100);
        }
    }
}

function back() {
    window.location = "index.html";
}