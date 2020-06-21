'use strict';

var xiaoming = {
    name:'小明',
    birth:1992,
    age: function(){
        var that = this;
        function getAgeFromBirth(){
            var y = new Date().getFullYear();
            return y - that.birth;
        }
    return getAgeFromBirth();
    }
};

alert(xiaoming.age());

// 要指定函数的 this  指向哪个对象，可以用函数本身的 apply  方法，它接收两个参数，第一个参数就是需要绑定的 this  变量，第二个参数是 Array  ，表示函数本身的参数

function getAge(){
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaogang = {
    name:'小刚',
    birth:'1995',
    age:getAge
}

alert(getAge.apply(xiaogang,[]))

