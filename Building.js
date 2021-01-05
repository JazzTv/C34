class building 
{
    constructor (x,y,w,h)
    {
        var options = {
                         restitution : 0.7,
                         friction : 1.2,
                         density : 0.5
                      }
        this.Building = Bodies.rectangle (x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add (world,this.Building);
    } 

    display ()
    {
        var position = this.Building.position;
        push ()
        fill ("red")
        rectMode (CENTER);
        rect (position.x,position.y,this.w,this.h);
        pop ()

    }
}