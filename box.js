class Box {
  constructor(x,y) {
    this.body = Bodies.rectangle(x,y,30, 40);
    World.add(world, this.body);
    this.visibilty=255;
  }
  display(){
    var pos =this.body.position;
    console.log(this.body.speed);
   
   if(this.body.speed<3){
    push();
    rectMode(CENTER);
    this.visibilty=this.visibilty-2
    tint(255, this.visibilty);
    fill("blue");
    rect(pos.x, pos.y, 30, 40);
    pop();
   }else{
     World.remove(world, this.body);
  }
}
}




