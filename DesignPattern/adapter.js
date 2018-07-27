//适配器模式  ===> 转换

var googleMap = {
    show: function () {
        console.log('开始渲染谷歌地图');
    }
};
var baiduMap = {
    display: function () {
        console.log('开始渲染百度地图');
    }
};
var renderMap = function (map) {
    if (map.show instanceof Function) {
        map.show();
    }
};
var baiduMapAdapter = {
    show: function () {
        return baiduMap.display();
    }
};
renderMap(googleMap); // 输出：开始渲染谷歌地图
renderMap(baiduMapAdapter); // 输出：开始渲染百度地图