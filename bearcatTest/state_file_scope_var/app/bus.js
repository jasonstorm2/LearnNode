var Bus = function(){
    this.$id = 'buss';  //对外暴露的id,bearcat可以通过此id找到bus对象
    this.name = "tianyu";
    this.color = "yellow";
}

Bus.prototype.run = function(){
    console.log("bus is running......");
    
}

module.exports = {
    id:'buss',
    func:Bus
};