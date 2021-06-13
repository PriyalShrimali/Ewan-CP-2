class Ground{
    constructor(x,y,width,height){
    var options = {
    isStatic:true, 
    
    
    
    }
this.Body = Bodies.rectangle(x,y,width,height,options)
this.height = height;
this.width=width;

World.add(world, this.Body);

    }
display(){
var pos = this.Body.position;
push();
rectMode(CENTER)
fill('red')
rect(pos.x, pos.y, this.width, this.height);
pop();
}
}