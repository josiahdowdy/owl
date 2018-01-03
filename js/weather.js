var x; //sets a global variable

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        x = position.coords.latitude + ',' + position.coords.longitude;
        loadWeather(x);
    });
} else {
    loadWeather("Calgary, AB", "");                                     
}

$(document).ready(function() {
    //setInterval(getWeather, 10000);
    setInterval(function() { loadWeather(x); }, 10000); 
});
                  
function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid, 
        unit: 'c',
        success: function(weather) {
            city = weather.city;
            temp = weather.temp+'&deg;';
            wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
            wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
            humidity = weather.humidity + ' %';
            sunrise = weather.sunrise + 'SUNRISE';
            sunset = weather.sunset + 'SUNSET';
            actualtime = weather.getTime;
            
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
            $(".sunrise").text(sunrise);        
            $(".sunset").text(sunset);
            $(".getTime").text(weather.getTime);
            
            var sunsetNum = moment(weather.sunset, ["h:mm A"]).format("HHmm") + 'sunset';
            
            var actualtime = new Date();  
            $(".sunsetNum").text(sunsetNum);
            $(".actualtimeNum").text(actualtime.getSeconds() +' seconds');
        
            //var sunsetFirst = (''+sunsetNum)[0];
            /*
            if (sunsetFirst > 8)
                {document.write('<img src="images/collage.jpg" width=20%>');}
            else 
                {document.write('<img src="images/college33.jpg" width=20%>');} 
            */
        },
        
        error: function (error) {
            //$(".error").html('<p>' + error + '</p>');
        }
    });
    
    
}

