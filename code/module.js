/**
 * Created by iu2fish on 15/4/26.
 */
;var MyModules = (function Manager(){
    var modules = {};
    function define (name, deps, impl){
        for(var i = 0; i < deps.length; i++){
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get (name){
        return modules[name];
    }

    return {
        define:define,
        get:get
    }
})();


/**
 * 这段代码的核心是modules[name] = impl.apply(impl, deps)。为了模块的定义引入了包装函数(可以传入任何依赖)
 * 并且将返回值，也就是模块的API，存储在一个根据名字来管理的模块列表中。
 */
;MyModules.define('bar', [], function(){
    function hello(who){
        return "let me introduce:" + who;
    }

    return {
        hello:hello
    };
});

;MyModules.define('foo', ['bar'], function(bar) {
    var hungry = 'hippo';
    function awesome () {
        console.log(bar.hello(hungry).toUpperCase());
    }
    return{
        awesome:awesome
    };
});

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');

console.log(bar.hello('hippo'));

foo.awesome();
/**
 * 'foo'和'bar'模块都是通过一个返回公共API的函数来定义的，foo甚至接受bar的示例作为依赖参数，并能相互使用它。
 * 为我们自己着想，应该多花一点时间来研究这些示例代码，并完全理解闭包的作用吧。最重要的是要理解模块管理器没有任何特殊的魔力
 * 他们符合前面列出的模块模式的两个特点，为函数定义引入包装函数，保证它的返回值和模块API保持一致。
 * 换句话说，模块就是模块，即使在他们外层加上一个友好的包装工具也不会发生任何变化。
 */
