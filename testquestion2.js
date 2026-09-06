let box;
let floor;
let jump = 0;

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
    background(200);

    box.vel.x = 6;
    camera.x = box.x;

    if ((mouse.presses() || kb.presses("space")) && jump == 1) {
        box.vel.y = -5;
        jump -= 1;
    }

    if (box.collides(floor) && jump == 0) {
        jump += 1
    }
}
