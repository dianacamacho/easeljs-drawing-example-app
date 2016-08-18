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
  // add the photo to the stage
  stage.addChild(wrigley);

  // update the stage with all changes/additions, drawn objects should now be visible on the canvas when you visit the page
  stage.update();

  // draw restroom icon photo onto canvas over wrigley photo
  var restroom = new createjs.Bitmap("assets/restroom.png");
  // pre-load the image
  restroom.image.onload = function() {
    stage.update();
  }
};