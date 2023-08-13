noseX=0;
noseY=0;

difference = 0;
rightwristX = 0;
leftwristX = 0;


function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(820, 150);


    video = createCapture(VIDEO);
    video.size(450, 550);
    video.position(160, 150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969a97');

    document.getElementById("size").innerHTML = "Width And Height of a font will be = " + difference+"px";
    textSize(difference);
    fill(0, 155, 255);
    text("Hello World", 50, 400)
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX = " + leftwristX + "rightwristX = " +rightwristX + "diffrence = " + difference);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}
