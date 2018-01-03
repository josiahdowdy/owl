     var cloudPic = "images/cloud.svg";
     var owlSrc = "images/barnOwlSMALL.jpg";
     var owlBlackSrc = "animation1/rainOwlGIF.gif";
     var background = "images/cloud.svg";
     var moon = "images/moonBlack.svg";
     var owlBlackOnly = "images/barnowlblackandwhiteSMALL.jpg";

     function changeImage(src) {
         document.getElementById("myImage").src = src;
     }

     function PlaySound(soundobj) {
         var thissound = document.getElementById(soundobj);
         thissound.play();
     }

     function StopSound(soundobj) {
         var thissound = document.getElementById(soundobj);
         thissound.pause();
         thissound.currentTime = 0;
     }

     function Get(yourUrl) {
         var Httpreq = new XMLHttpRequest(); // a new request
         Httpreq.open("GET", yourUrl, false);
         Httpreq.send(null);
         return Httpreq.responseText;
     }

     var c = document.getElementById("myCanvasLeft");
     var ctx = c.getContext("2d");
     ctx.beginPath();
     var xA = 0;
     var yA = 0;
     var xB = 2;
     var yB = 2;

     for (i = 0; i < 50; i++) {
         var randomY = Math.floor((Math.random() * 30) + 1);
         // xA = xA+13;

         //xB = xA + 13;
         yA = yA + randomY;
         yB = yA + randomY;
         ctx.moveTo(0, yA);
         ctx.lineTo(40, yB);
         ctx.lineWidth = 1;
         ctx.strokeStyle = '#331200';
         ctx.stroke();
     }

     for (i = 0; i < 12; i++) {
         var radius = Math.floor((Math.random() * 5) + 1);
         var randomX = Math.floor((Math.random() * 40) + 1);
         var randomY = Math.floor((Math.random() * 315) + 1);
         ctx.moveTo(randomX, randomY);
         ctx.arc(randomX, randomY, radius, 0, 2 * Math.PI); //x, y, radius, 
         ctx.fill();
         ctx.stroke();
     }

     var c = document.getElementById("myCanvasRight");
     var ctx = c.getContext("2d");
     ctx.beginPath();
     var xA = 0;
     var yA = 0;
     var xB = 2;
     var yB = 2;

     for (i = 0; i < 50; i++) {
         var randomY = Math.floor((Math.random() * 25) + 1);
         // xA = xA+13;
         //xB = xA + 13;
         yA = yA + randomY;
         yB = yA + randomY;
         ctx.moveTo(0, yA);
         ctx.lineTo(40, yB);
         ctx.lineWidth = 1;
         ctx.strokeStyle = '#331200';
         ctx.stroke();
     }

     for (i = 0; i < 12; i++) {
         var radius = Math.floor((Math.random() * 6) + 1);
         var randomX = Math.floor((Math.random() * 40) + 1);
         var randomY = Math.floor((Math.random() * 315) + 1);
         ctx.moveTo(randomX, randomY);
         ctx.arc(randomX, randomY, radius, 0, 2 * Math.PI); //x, y, radius, 
         ctx.fill();
         ctx.stroke();
     }

     var c = document.getElementById("myCanvasTop");
     var ctx = c.getContext("2d");
     ctx.beginPath();
     ctx.moveTo(0, 0);

     var xA = 0;
     var yA = 0;
     var xB = 2;
     var yB = 2;

     for (i = 0; i < 50; i++) {
         var randomX = Math.floor((Math.random() * 40) + 1);
         xA = xA + randomX;
         xB = xB + randomX;
         //yA = yA + randomY;
         //yB = yA + randomY;
         ctx.moveTo(xA, 0);
         ctx.lineTo(xB, 40);
         ctx.lineWidth = 1;
         ctx.strokeStyle = '#331200';
         ctx.stroke();
     }

     for (i = 0; i < 19; i++) {
         var radius = Math.floor((Math.random() * 3) + 1);
         var randomX = Math.floor((Math.random() * 40) + 1);
         var randomY = Math.floor((Math.random() * 680) + 1);
         ctx.moveTo(randomY, randomX);
         ctx.arc(randomY, randomX, radius, 0, 2 * Math.PI); //x, y, radius, 
         ctx.fill();
         ctx.stroke();
     }

     var c = document.getElementById("myCanvasBottom");
     var ctx = c.getContext("2d");
     ctx.beginPath();
     ctx.moveTo(580, 0);
     var xA = 0;
     var yA = 0;
     var xB = 2;
     var yB = 2;

     for (i = 0; i < 50; i++) {
         var randomX = Math.floor((Math.random() * 50) + 1);
         xA = xA + randomX;
         xB = xB + randomX;
         //yA = yA + randomY;
         //yB = yA + randomY;
         ctx.moveTo(xA, 0);
         ctx.lineTo(xB, 40);
         ctx.lineWidth = 1;
         ctx.strokeStyle = '#331200';
         ctx.stroke();
     }

     for (i = 0; i < 20; i++) {
         var radius = Math.floor((Math.random() * 3) + 1);
         var randomX = Math.floor((Math.random() * 40) + 1);
         var randomY = Math.floor((Math.random() * 680) + 1);
         ctx.moveTo(randomY, randomX);
         ctx.arc(randomY, randomX, radius, 0, 2 * Math.PI); //x, y, radius, 
         ctx.fill();
         ctx.stroke();
     }

     $(function () {
         $('#cloud').hover(function () {
                 $('#yourMom').css({
                     'background': 'url(../htmlPages/images/LightningClouds.gif) no-repeat center center fixed',
                     'background-size': 'cover',
                     '-webkit-background-size': 'cover',
                     '-moz-background-size': 'cover',
                     '-o-background-size': 'cover'
                 });
             },
             function () {
                 // on mouseout, reset the background colour
                 $('#yourMom').css({
                     'background': 'url(../htmlPages/images/deepskyblue.jpg) no-repeat center center fixed',
                     'background-size': 'cover',
                     '-webkit-background-size': 'cover',
                     '-moz-background-size': 'cover',
                     '-o-background-size': 'cover'
                 });
             });
     });

     $(function () {
         $('#moon').hover(function () {
                 $('#yourMom').css({
                     'background': 'url(../htmlPages/images/starsTwinkle.gif) no-repeat center center fixed',
                     'background-size': 'cover',
                     '-webkit-background-size': 'cover',
                     '-moz-background-size': 'cover',
                     '-o-background-size': 'cover'
                 });
             },
             function () {
                 // on mouseout, reset the background colour
                 $('#yourMom').css({
                     'background': 'url(../htmlPages/images/deepskyblue.jpg) no-repeat center center fixed',
                     'background-size': 'cover',
                     '-webkit-background-size': 'cover',
                     '-moz-background-size': 'cover',
                     '-o-background-size': 'cover'
                 });
             });
     });

     //url(../../htmlPages/images/deepskyblue.jpg)
     //url(../../htmlPages/images/LightningClouds.gif)
     //url(../../htmlPages/images/galaxy.jpg)
     //url(../../htmlPages/images/deepskyblue.jpg)
