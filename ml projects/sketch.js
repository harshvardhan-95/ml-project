let mobilenet;
let video;
let labels=''
function modelReady(){
  console.log('Model is Ready');
  mobilenet.predict(gotResults);
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    labels=results[0].label;
    // let conf=results[0].confidence;
   
  mobilenet.predict(gotResults);

  }
}

// function imageReady(){
//   image(puffin,0,0,width,height);
// }

function setup() {
  createCanvas(640, 550);
  video=createCapture(VIDEO);
  video.hide();
  background(0);

  mobilenet= ml5.imageClassifier('MobileNet',video,modelReady);
}
function draw(){
  image(video,0,0);
  fill(0);
    textSize(60);
    text(labels,10,height-100);
    // text(conf,10,height-50);
}

