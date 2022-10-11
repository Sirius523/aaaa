//160
/*
var leftOffset = 0;

var moveHeading = function() {
    $("h1").offset({left: leftOffset });

    leftOffset++;

    if(leftOffset > 200) {
        leftOffset = 0;
    }
};
setInterval(moveHeading, 30);
*/

//162
/*
var clickHandler = function (event){
    document.write("Клик!" + event.pageX + " " + event.pageY);

};

$("h1").click(clickHandler);
*/
//163(1)
/*
$("html").mousemove(function (event){
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY
  });
  });
*/
//165(1)
/*
$("html").click(function (event){
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY
  });
  });
*/
//165(2)
/*
var direction = 'вправо';
    var offset = 0;

    $("#heading").offset({ left: offset, top: offset });

    var moveHeading = function () {
      if (direction === 'вправо') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 200) {
          offset = 0;
          direction = 'вниз';
        }
      } else if (direction === 'вниз') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 200) {
          offset = 200;
          direction = 'влево';
        }
      } else if (direction === 'влево') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 0) {
          offset = 200;
          direction = 'вверх';
        }
      } else if (direction === 'вверх') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 0) {
          offset = 0;
          direction = 'вправо';
        }
      }
    };

    setInterval(moveHeading, 30);
*/


var direction = 'вправо';
var offset = 0;
var intervalLength = 120;
var clicks = 0;

    $("#heading").offset({ left: offset, top: offset });

    var moveHeading = function () {
      if (direction === 'вправо') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 200) {
          offset = 0;
          direction = 'вниз';
        }
      } else if (direction === 'вниз') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 200) {
          offset = 200;
          direction = 'влево';
        }
      } else if (direction === 'влево') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 0) {
          offset = 200;
          direction = 'вверх';
        }
      } else if (direction === 'вверх') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 0) {
          offset = 0;
          direction = 'вправо';
        }
      }
    };
    var intervalid = 
setInterval(moveHeading, intervalLength);
    $("#heading").click(function()
    {
      clearInterval(intervalid);
      intervalLength /= 2;
      clicks++;
      if (clicks > 10){
$("#heading").text("Накликал-таки!");
      }else{
          intervalid = 
setInterval(moveHeading, intervalLength)
        }
      });
    
    setInterval(moveHeading, 30);