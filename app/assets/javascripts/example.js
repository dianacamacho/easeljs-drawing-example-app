function init() {
  // code here.

  // the stage will hold all objects displayed on the canvas
  // pass in the canvas element id
  var stage = new createjs.Stage("demoCanvas");

  // create a Bitmap, which draws the image given (wrigley field map) onto the canvas
  var wrigley = new createjs.Bitmap("assets/wrigley.png");
  // this is just preloading the image, so it will be ready to show on the canvas once it's added to the drawing stage
  wrigley.image.onload = function() {
    stage.update();
  }
};
