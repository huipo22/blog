//职责链模式

//大boss
function Boss(PM) {
    if (PM) {
        this.PM = PM;
    }
}
Boss.prototype.write = function (php) {
    this.PM.write(php)
}

// 项目经理
function PM(Coder) {
    if (Coder) {
        this.Coder = Coder
    }
}
PM.prototype.write = function (php) {
    this.Coder.write(php)
}

//码农
function Coder(php) {

}
Coder.prototype.write = function (php) {
    console.log('编写代码中....' + php)
}
var begin = new Boss(new PM(new Coder()))
begin.write('[node,vue,react]')