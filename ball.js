class Ball {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.width = r/2;
      this.height = r/2;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      ellipseMode(CENTER);
      ellipse(0,0, this.width, this.height);
      pop();
    }
  };
