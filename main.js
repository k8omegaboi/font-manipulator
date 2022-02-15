difference = 0;
rightwristx= 0;

leftwristx = 0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#969A97');
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftwristx = results[0].pose.leftWristx;
        rightwristx = results[0].pose.rightWristx;
        difference = floor(leftwristx - rightwristx)
        console.log("leftWristX = " + leftwristx + "rightWristX = " + rightwristx)
    }
}