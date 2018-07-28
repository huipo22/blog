//迭代器模式 ===> hasNext()  next()

var arr = ['1', '2', '3']

var 迭代 = (function () {
    var length = arr.length;//数组长度
    var index = 0;//索引

    return {
        //是否有下一个元素s
        hasNext: function () {
            return index < length
        },
        next: function () {
            var data = arr[index]
            index = index + 1
            return data
        }
    }
})()

while (迭代.hasNext()) {
    console.log(迭代.next())
}