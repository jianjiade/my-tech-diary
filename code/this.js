/**
 * Created by iu2fish on 15/4/26.
 */

;function identify(){
    return this.name.toUpperCase();
}

;function speak(){
    var greeting = "Hell I`m " + identify.call(this);
    console.log(greeting);
}

var me = {
    name:'Kyle'
};

var you = {
    name:'Reader'
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);


/**
 如果不使用this那就需要给identity() 和 speak()显式传入一个上下文对象
 */
function identify(content) {
    return content.name.toUpperCase();
}

function speak(content) {
    var greeting = "Hello I`m " + identify(content);
    console.log(greeting);
}

identify(you);
speak(me);

/**
 然而，this提供了一种更加优雅的方式，提供传递一个对象引用，因此可以将API设计的更加简洁并且易于复用
 */

