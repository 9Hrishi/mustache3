nosex=0;
nosey=0;

function preload()
{
 mustache=loadImage('https://i.postimg.cc/44zdYm3y/m.png');
}

function setup()
{
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  posenet=ml5.poseNet(video,modelloaded);
  posenet.on('pose',gotposes);
}
  
function modelloaded()
{
  console.log('posenet is initialized');
}

function gotposes(results)
{
  if(results.length >0)
  {
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex"+ results[0].pose.nose.x);
    console.log("nosey"+ results[0].pose.nose.y);
  }
}

function draw()
{
  image(video,0,0,300,300);
  image(mustache,nosex-20,nosey+5,50,30);

}
function take_snapshot()
{
    save(filter_image.png);
}