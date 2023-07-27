# -java-hook-
实现轻松hook类中所有方法包括内部类的所有方法
# 使用

```function main(){
    try {
        //在此处填写需要hook的类即可
        hookClass("com.appsflyer.internal.c")
    }catch (e) {
        console.log("没有找到该类")
    }}```

