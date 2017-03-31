var font;
var vehicles = [];


function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup(){
    var myCanvass = createCanvas(windowWidth-4,windowHeight-4);
    myCanvass.parent("canvass");
    //background('#FFA500');
    // textFont(font);
    // textSize(128);
    // fill(255);
    // text('SharifAhmad',windowWidth/4.5,windowHeight/2);
    var pt = font.textToPoints('SharifAhmad',windowWidth/7,windowHeight/2,192);
    pt.forEach(function(item){
        var veh = new Vehicle(item.x,item.y);
        vehicles.push(veh);
    });
}

function draw() {
    background('#097054');
    vehicles.forEach(function(veh){
        veh.behaviour();
        veh.update();
        veh.show();
    });
}
