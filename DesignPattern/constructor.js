// 构造函数

function BookTable(book, name) {
    //  增强健壮性
    if (!(this instanceof BookTable)) {
        return new BookTable(book, name)
    }
    var _book = '遮天'
    var _name = '古书';
    if (book) {
        _book = book
    }
    if (name) {
        _name = name
    }
    this.book = _book;
    this.name = _name;
    this.tips = function () {
        return '书桌上有书：' + this.book + '，桌子名叫：' + this.name
    }
}
var tab = BookTable()
console.log(tab.tips())