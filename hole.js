class Hole{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.body1=Bodies.rectangle(x,y,50,2,options)
        World.add(world,this.body1)
        this.body2=Bodies.rectangle(x-25,y-20,2,40,options)
        World.add(world,this.body2)
        this.body3=Bodies.rectangle(x+25,y-20,2,40,options)
        World.add(world,this.body3)
        this.x=x
        this.y=y
        this.image=loadImage("golf_ball.png")
    }
    display(){
        var pos1 = this.body1.position
        var pos2 = this.body2.position
        var pos3 = this.body3.position
        rectMode(CENTER)
        rect(pos1.x,pos1.y,50,2)
        rect(pos2.x,pos2.y,2,40)
        rect(pos3.x,pos3.y,2,40)
    }
}