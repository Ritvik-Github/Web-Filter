function preload(){}
var i = 0;
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if( results.length > 0 ){
        console.log(results);
        console.log("noseX = " + results[0].pose.nose.x);
        console.log("noseY = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log("PoseNet loaded");
}

function draw(){
    image(video, 0, 0, canvas.width, canvas.height);
    canvas.center();
}

function take_snapshot(){
    save("Filter no." + i + " .png");
    i++;
}