//Object.assign() 用于对象的合并
//Object.assign() 实行的是浅拷贝，不是深拷贝

const obj1 = {
    a: {
        b: 1
    }
}

const obj2 = Object.assign({}, obj1)

/**
 * 数组的 扩展运算符(...) 
 * 对象的 扩展运算符(...) 等同于 Object.assign()
 * 函数的 rest参数(...变量名)
 * 
 * 扩展运算符(...) <---> rest参数(...变量名)
 */