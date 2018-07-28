// 外观模式  三层结构mvc

var stopEvent = function (e) {
    e.stopPropagation()
    e.perventDefault()
}

stopEvent(e)  //stopEvent 就是门面模式