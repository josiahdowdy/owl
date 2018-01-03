function setup() {
    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
}

function gotData(data) {
    println(data);
    for (var i = 0; i< data.number; i++) {
        
    }
}

function draw() {
}