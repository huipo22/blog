//策略模式


3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
var strategy = {
    isNotEmpty: function (value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    // 限制最小长度
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    // 手机号码格式
    mobileFormat: function (value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
};