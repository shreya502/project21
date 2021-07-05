class Ground {

constructor (x,y,w,h){
var option={
    isStatic:true
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(x,y,w,h,option);
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("yellow");
    fill("green");
    rect(0,0,this.w,this.h);
    pop();
}
}