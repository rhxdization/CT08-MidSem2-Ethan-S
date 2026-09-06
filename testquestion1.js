let box;
let floor;

function setup() {
    new Canvas(600,400);

    world.gravity.y = 10;
    
    box = new Sprite();
    box.x = width/2;
    box.y = height/2;
    box.height = 30;
    box.width = 30;
    

    floor = new Sprite();
    floor.x = width/2;
    floor.y = height;
    floor.height = 20;
    floor.width = 2400;
    floor.collider = "static";
}

function draw() {
    clear();
}
