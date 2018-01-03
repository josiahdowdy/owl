$(function () {
  $('#cloud').hover(function () {
    $('#yourMom').css({'background': 'url("http://art.ucalgary.ca/art321/~josiah.dowdy/site/htmlPages/images/LightningClouds.gif") no-repeat center center fixed', 'background-size': 'cover', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover'});
  },
function () {
    // on mouseout, reset the background colour
    $('#yourMom').css({'background': 'url("http://art.ucalgary.ca/art321/~josiah.dowdy/site/htmlPages/images/galaxy.jpg") no-repeat center center fixed', 'background-size': 'cover', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover'});
  });
});

//url(../../htmlPages/images/LightningClouds.gif)
//url(../../htmlPages/images/galaxy.jpg)