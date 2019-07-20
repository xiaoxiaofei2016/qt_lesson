// 咖啡机
// oo 面向对象 属性和方法
var Coffee = function(){

}
Coffee.prototype.boilwater = function(){
    console.log('把水烧开');
}
Coffee.prototype.brewCoffeeGriends = function(){
    console.log('用水泡咖啡');
}
Coffee.prototype.pourInCup = function(){
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugerAndMilk = function(){
    console.log('添加糖和牛奶')
}
Coffee.prototype.cook = function(){
    this.boilwater();
    this.brewCoffeeGriends();
    this.pourInCup();
    this.addSugerAndMilk();
}
var coffee = new Coffee();
coffee.cook();