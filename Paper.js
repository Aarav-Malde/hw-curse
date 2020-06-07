class Paper {
  constructor(x, y,width,height,angle) {
    var options = {
      'density':1.5,
      'friction': 1.0,
      'restitution':0.5
    };
    this.body = Bodies.circle(x, y, width-50,options);
    this.width = width;
    
    World.add(world, this.body);
    this.Image=loadImage("paper.png")
  };
  display(){
    var angle = this.body.angle;

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    
    imageMode(CENTER)
    image(this.Image,0, 0, this.width, this.width);
    pop();
  };
};