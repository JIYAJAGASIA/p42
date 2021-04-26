class Drop {
    constructor(x,y){
        var options = {
            isStatic: false,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 50;
        World.add(world, this.drop)
        //load Image for BestMan
        this.image = loadImage("Walking Frame/walking_1.png");
    
    if (frameCount >=200)
     {
        drop = createSprite(random(100, 1000), 0, 100, 100);
        drop.velocityY = 3;
      
        }
       
    }

    
    display(){
        var pos = this.drop.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
