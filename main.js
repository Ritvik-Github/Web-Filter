var noseX = 0;
var noseY = 0;

function preload() {
    img = loadImage("https://i.postimg.cc/sshfQbg3/m.png", console.log("succes loaded image"), console.log("failed to load image"));
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(canvas.width, canvas.height);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(img, noseX-25, noseY-5, 60,40);
}
function take_snapshot() {
    save("Filter.png");
}