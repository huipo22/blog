// 建造者模式    
// 指挥者（工头）===>建造者（工人）

//产出的东西是房子
//工头 调用 工人开工
function Hourse() {
    this.bedRoom = "";
    this.liveRoom = "";
    this.chief = "";
}

function Gongtou() {
    this.gaifangzi = function (gongren) {
        gongren.build_bedRoom()
        gongren.build_liveRoom()
        gongren.build_chief()
    }
}

function Gongren() {
    this.build_bedRoom = function () {
        console.log('卧室盖好了')
    }
    this.build_liveRoom = function () {
        console.log('客厅盖好了')
    }
    this.build_chief = function () {
        console.log('厨房盖好了')
    }
    this.jiaofang = function () {
        //实例化Hourse
        var _hourse = new Hourse()
        _hourse.bedRoom = 'ok'
        _hourse.liveRoom = 'ok'
        _hourse.chief = 'ok'
        return _hourse
    }
}
var 工人 = new Gongren()
var 工头 = new Gongtou()
//工头盖房子
工头.gaifangzi(gr)
//工人交房子
console.log(工人.jiaofang())