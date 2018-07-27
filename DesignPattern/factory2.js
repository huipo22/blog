// 抽象工厂模式   ======>  只留一个接口
var XMLHttpFactory = function(){}
XMLHttpFactory.prototype = {
    createFactory:function () {
        throw new Error('This is an abstract class')
    }
}

var XHRHandler = function () {
    XMLHttpFactory.call(this)
}
XHRHandler.prototype = new XMLHttpFactory()
XHRHandler.prototype.constructor = XHRHandler;

XHRHandler.prototype.createFactory = function () {
    var XMLHttp = null;
    if (window.XMLHttpRequest) {
        XMLHttp = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        XMLHttp = new ActiveXObject('"Microsoft.XMLHTTP')
    }
    return XMLHttp;
}
var AjaxHander = function () {
    var XMLHttp = XHRHandler.prototype.createFactory();
    console.log(XMLHttp)
}
AjaxHander()