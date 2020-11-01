class ball{
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.r=r
      this.body = Bodies.circle(x, y, this.r/2,options);

  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      push();
      translate(pos.x, pos.y);

      ellipseMode(CENTER)
      fill(255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }; 
