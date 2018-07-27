// 代理模式  
// 卖===>中介===>买

//1.买家
function buyPerson() {
    this.name = '小明'
}
//2.中介
function proxyPerson() {

}
//中介买房
proxyPerson.prototype.buyHourse = function () {
    //房东 和 买家 的交易
    new housePerson(new buyPerson()).sellHourse('20万')
}
//3.房东
function housePerson(buyer) {
    //房东卖房方法
    this.buyer_name = buyer.name;
    this.sellHourse = function (money) {
        console.log('收到来自[' + this.buyer_name + ']的钱：' + money)
    }
}
var zhongjie = new proxyPerson()
zhongjie.buyHourse()