class Slingshot{
 constructor(bodyA,bodyB){
     var option = {
         bodyA : bodyA,
         bodyB :bodyB,
         stiffmess:0.04,
         length : 10
     }
     this.slingshot = Constraint.create(option)
     World.add(world,this.slingshot);
 }
   display(){
line (this.slingshot.bodyA.position.x,this . slingshot.bodyA.position.y,this.slingshot.bodyB.position.x,this.slingshot.bodyB.position.y);

   }


}
