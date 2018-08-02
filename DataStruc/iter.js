// 一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口
/**
 * for of 
 * 迭代器对象有 数组 Set Map
 * 1. entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值。
 * 2. keys() 返回一个遍历器对象，用来遍历所有的键名。
 * 3. values() 返回一个遍历器对象，用来遍历所有的键值。
 */

const colorList = ['red', 'green', 'blue', 'yellow']
for (let item of colorList.values()) {
    console.log(item)
}

for (let [k, v] of colorList.values()) {
    console.log(k + '----' + v)
}

/**
 * ES2017 引入了跟 Object.keys 配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。
 * Object.keys() 返回一个数组 成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
 * Object.values() 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
 * Object.entries() 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
 */

const weatherObj = {
    'one': '晴',
    'two': '雨',
    'three': '多云',
    'four': '阵雨'
}
for (let [k, v] of Object.entries(weatherObj)) {
    if (k == 'one') {
        console.log(v)
    }
}

// for...in 循环主要是为遍历对象而设计的，不适用于遍历数组。
// for...in 循环只遍历可枚举属性
const obj={
    'A':001,
    'B':002,
    'C':003,
    'D':004,
}
for(let item in obj){
    console.log(`${item}---${obj[item]}`)
}