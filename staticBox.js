class staticBox
{
    constructor (x,y,w,h)
    {
        var options = {
                         isStatic : true
                      }
        this.staticBox = Bodies.rectangle (x,y,w,h,options);
        this.w = w;
        this.h = h;

        World.add (world,this.staticBox);
    } 

    display ()
    {
        var pos = this.staticBox.position;
        push ()
        fill ("brown")
        rectMode (CENTER);
        rect (pos.x,pos.y,this.w,this.h);
        pop ()
    }
}