class Rope 
{
    constructor (Body1 , Body2)
    {
        var  options = {
                           bodyA : Body1,
                           bodyB : Body2,
                           stiffness : 0.3,
                           length : 400
        } 

        this.chain = Constraint.create (options);
        World.add (world,this.chain);
    } 

    display ()
    {
       var firstpos = this.chain.bodyA.position;
       var secpos = this.chain.bodyB.position;
        
       push ()
       strokeWeight (10);
       stroke ("blue");
       line (firstpos.x,firstpos.y,secpos.x,secpos.y);
       pop ()
    }
}