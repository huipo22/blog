//中介者模式   多对多  
//多===>中介===>多

var 飞机 = function (name) {
    this.name = name
}
飞机.prototype.send = function (msg, to) {
    塔台.send(msg, to)
}
飞机.prototype.receive = function (msg) {
    console.log(this.name + '接收到:  ' + msg)
}

var 塔台 = {
    all: {},
    注册: function (f) {
        this.all[f.name] = f
    },
    send: function (msg, tof) {
        this.all[tof.name].receive(msg)
    }
}

var 飞机1号 = new 飞机('飞机1号')
var 飞机2号 = new 飞机('飞机2号')

//塔台注册
塔台.注册(飞机1号)
塔台.注册(飞机2号)

//飞机1号发送消息
飞机1号.send('马上降落，还有200米', 飞机2号)
//飞机2号发送消息
飞机2号.send('收到消息,over', 飞机1号)

