// 模板方法

function 上帝() {

}

上帝.prototype.造人_eye = function () {
    cosnole.log('eye')
}
上帝.prototype.造人_nose = function () {
    cosnole.log('nose')
}
上帝.prototype.造人_mouth = function () {
    cosnole.log('mouth')
}
上帝.prototype.爱好 = function () {
    throw new Error('我只是一个钩子，需要你自己探索')
}

function 小明() {
    上帝.call(this)
}
小明.prototype = new 上帝()
小明.prototype.爱好 = function () {
    console.log('小明爱讲笑话')
}

var xiaoming = new 小明()
xiaoming.爱好()