function Vehicle(x,y){
    this.pos = createVector(random(width),random(height));
    this.tar = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 8;
    this.maxSpeed = 15;
}

Vehicle.prototype.update=function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
};

Vehicle.prototype.show=function(){
    stroke('#FFDE00');
    strokeWeight(10);
    point(this.pos.x,this.pos.y);
};

Vehicle.prototype.behaviour = function(){
    var arrive = this.arrive(this.tar);
    this.applyForce(arrive);
    var mouse = createVector(mouseX,mouseY);
    var flee = this.flee(mouse);
    this.applyForce(flee);
};

Vehicle.prototype.arrive = function(tar){
    var desired = p5.Vector.sub(tar,this.pos);
    var d = desired.mag();
    var speed = this.maxSpeed;
    if(d < 100){
        speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired,this.vel);
    return steer;
};

Vehicle.prototype.flee = function(tar){
    var desired = p5.Vector.sub(tar,this.pos);
    var d = desired.mag();
    if(d < 200){
        desired.setMag(this.maxSpeed);
        desired.mult(-1);
        var steer = p5.Vector.sub(desired,this.vel);
        return steer;
    }else{
        return createVector(0,0);
    }
};

Vehicle.prototype.applyForce = function(force){
    this.acc.add(force);
};