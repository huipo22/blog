//简单工厂模式
var XMLHttpFactory = {}
XMLHttpFactory.createXMLHttp = function () {
    var XMLHttp = null;
    if (window.XMLHttpRequest) {
        XMLHttp = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        XMLHttp = new ActiveXObject('"Microsoft.XMLHTTP')
    }
    return XMLHttp;
}
var AjaxHander = function () {
    var XMLHttp = XMLHttpFactory.createXMLHttp();
    console.log(XMLHttp)
}
AjaxHander()