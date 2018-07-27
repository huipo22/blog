//命令模式 
// 总司令 ===> 连长 ===>炮兵，步兵

var 连 = {}
连.炮兵 = function (pao_num) {
    console.log(pao_num + '炮开始战斗')
}
连.步兵 = function (bubing_num) {
    console.log(bubing_num + '人开始战斗')
}
连.连长 = function (commond) {
    //连长发令
    连[commond.type](commond.num)
}

//总司令开始发令
连.连长({
    type: '炮兵',
    num: 100
})

连.连长({
    type: '步兵',
    num: 500
})