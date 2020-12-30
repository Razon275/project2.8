        class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image=loadImage("sprites/sling1.png")
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
   }
    attach(body){
        this.sling.bodyA=body
    }
    
    
    display(){
        
      if(this.sling.bodyA){
             var pointA = this.sling.bodyA.position;
             var pointB = this.pointB;
             push()
             strokeWeight(4);
             stroke(48,22,8)
           
            pop()
        }
   }
    
}