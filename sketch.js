var ball;
var database,position,ballposition;

function setup(){
    createCanvas(500,500);
    ball = createSprite(500,500,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    ballposition = database.ref("ball/position");
    ballposition.on("value",readposition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x1,y1){
    database.ref("ball/position").set({
        x : position.x + x1,
        y : position.y + y1
    })
}

function readposition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
