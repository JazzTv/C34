class Ball 
{
  constructor (x,y,r)
  {
      var options = {
                       restitution : 0.3,
                       friction : 0.5,
                       density : 0.5
                    } 
      this.r = r;
     
    this.body = Bodies.circle (x,y,r,options);
    World.add (world,this.body);
  } 

  display ()
  {
      var position = this.body.position;

      push ();
      fill ("pink")
      ellipseMode (RADIUS);
      ellipse (position.x,position.y,this.r);
      pop ();
  }
}