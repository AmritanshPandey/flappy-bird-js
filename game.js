// Linking the Canvas by id
const cvs = document.getElementById("bird");

//declaring the context of the canvas as 2d
const ctx = cvs.getContext("2d");

// Variables and Constant of the game
let frames = 0;

// Loading Sprite Image
const sprite = new Image();
sprite.src = "img/sprite.png"

// Draw function to draw on canvas
function draw(){
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect( 0, 0, cvs.width, cvs.height );
}

// Update for updating the game status
function update(){

}


// Importing Sprites from the Source

// Background Image


// Bird Sprite
const bird = {
    animation : [
        { sX : 276, sY : 112 },
        { sX : 276, sY : 139 },
        { sX : 276, sY : 164 },
        { sX : 276, sY : 139 },
    ],

    x : 50,
    y : 150,
    w : 34,
    h : 26,
    frame : 0,
    draw : function(){
        let bird = this.animation[this.frame];
        ctx.drawImage(sprite, bird.sX,)
    }

}

const 

// For Loop to keep updating the game
function loop(){
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}

loop();