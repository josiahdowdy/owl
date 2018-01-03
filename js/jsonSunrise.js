
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


function printOut() {
    var json_obj = JSON.parse(Get('http://api.sunrise-sunset.org/json?lat=51.0442700&lng=-114.0620190&date=today'));
    //console.log("this is the location: "+json_obj.$location);
    console.log("this is the location: "+json_obj.$location);
    console.log(json_obj.$parse);

    var result;

    for (var i=0;i<json_obj.data.length;i++)
    {
        result += json_obj.data[i].name  + ', ';
    }
}