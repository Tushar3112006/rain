class Umbrella {

    constructor(x, y){

        var umbrellaobjOptions = {

            isStatic : true

        }

        this.body = Bodies.circle(x, y, 50, Options);
        this.random = 50
        this.image = loadImage("image/walking/walking_1.png",);
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);

    }

}
     
    

