class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			

			
			}
		this.x=x;
		this.y=y;
        this.r=r
        this.image=loadImage("sprites/mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var position=this.body.position;		

			push()
			
			//translate(position.x,position.y);
			
			strokeWeight(3);
			fill(255,0,255)
			ellipse(this.body.position.x,this.body.position.y,this.r);
			
			image(this.image,this.body.position.x,this.body.position.y,100,100)
			pop()
			imageMode(CENTER)
	}

}