function logInf(classs){
    Java.perform(function (){
        var Modifier = Java.use("java.lang.reflect.Modifier");
        var Field = Java.use("java.lang.reflect.Field");
        var modifiers = classs.getModifiers();
        classs.setAccessible(true);
        if (Modifier.isStatic(modifiers)) {
            // 静态字段
            var value = classs.get(null);
            console.log(classs + " =>"  + value)
        } else {
             console.log(classs)
        }
    })




}
function getAllsonClass(classs){
    console.log('\n')
    console.log("查询到子类  =>" + classs.getName())
    hookClass(String(classs.getName()))
}
var thisclass = null;
//"java.security.MessageDigest"
function hookClass(CLASS){
Java.perform(function(){
    var classStudent = Java.use(CLASS);
    var classs = classStudent.class;

    //获取所有内部类
    var innerClasses = classs.getDeclaredClasses();
    if(innerClasses.length > 0){
        innerClasses.forEach(getAllsonClass);
    }
    console.log("===========" + classs + "中的所有变量==============")
    //输出所有变量
    classs.getDeclaredFields().forEach(logInf)
    console.log("===========" + classs +  "的所有方法==============")
    //输出所有方法,并hook
    classs.getDeclaredMethods().forEach(function(method){
        console.log(method)
       var methodsName = method.getName();
       var overloads  = classStudent[methodsName].overloads;
    //    console.log(overloads.length)
       for (var i=0; i< overloads.length; i++){
            overloads[i].implementation = function () {
            console.log('\n')
            console.warn("进入" + classs.getName() + "类的" + methodsName + "方法")
            for(var j=0; j<arguments.length; j++){
                console.error("参数" + j + " => " + arguments[j])
            }
            if (arguments.length === 0) {
              console.log("该函数无参数");
            }
            var result = this[methodsName].apply(this,arguments)
            console.error("结果是 => " + result)
            return result;
            };
        }
    })
    console.log('\n')
})
}
function main(){
    try {
        hookClass("com.example.myapplication4.MainActivity")
    }catch (e) {
        console.log("没有找到该类")
    }
}

setImmediate(main)
