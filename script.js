var noseX = 0;
var noseY = 0;

function preload(){
    img = loadImage("https://i.postimg.cc/sshfQbg3/m.png");
}
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
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
    }
}

function modelLoaded(){
    console.log("PoseNet loaded");
}

function draw(){
    image(video, 0, 0, canvas.width, canvas.height);
    image(img, noseX-25, noseY-10);
    canvas.center();
}

function take_snapshot(){
    save("Filter no." + i + " .png");
    i++;
}