class Paper {
  constructor(x, y, angle) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, 70, options);
    this.image = loadImage('sprites/paper.png');
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 50, 50, 70, 70);
    pop();
  }
};
