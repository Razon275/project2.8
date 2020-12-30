class Tree {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':0,
          'density':1.2
          
      }
      this.image = loadImage("sprites/tree.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      image(this.image,this.body.position.x,this.body.position.y,600,600)
      pop();
      
    }
  };