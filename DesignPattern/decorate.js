//装饰者模式 
//不动父类,只装饰

var 房子=function(){}
房子.prototype.空房子=function(){
    console.log('我是空的房子')
}

var 装饰=function(hourse){
    this.z_hourse=hourse
}
装饰.prototype.空房子=function(){
    this.z_hourse.空房子()
    console.log('我添加了一个家具')
}
var _房子=new 房子;
var _装饰=new 装饰(_房子);
_装饰.空房子()