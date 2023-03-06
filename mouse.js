function Mouse(name){
    this.name=name;
    this.hungry=true;
}
Mouse.prototype.eat=function(){
    this.hungry=false;
}
let mouse=new Mouse('mickey');
console.log(mouse);
mouse.eat();
console.log(mouse);
module.exports =Mouse;
let mouse2=new Mouse('jerry');
