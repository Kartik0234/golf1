class Ball{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options)
        World.add(world,this.body)
        this.x=x
        this.y=y
        this.r=10
        this.image=loadImage("golf_ball.png")
    }
    display(){
        var pos = this.body.position
        image(this.image,pos.x,pos.y,this.r*2,this.r*2)
    }
}