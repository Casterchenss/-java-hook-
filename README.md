# -java-hook-
实现轻松hook类中所有方法包括内部类的所有方法
# 使用
可以使用本项目中的app做测试
启动frida并编辑hookClassAllMethods.js
```function main(){
    try {
        //在此处填写需要hook的类即可
        hookClass("com.example.myapplication4.MainActivity")//"com.example.myapplication4.MainActivity"为本项目中的类
    }catch (e) {
        console.log("没有找到该类")
    }}
```
# 效果
![hook效果](https://github.com/Casterchenss/-java-hook-/blob/main/%E6%88%AA%E5%9B%BE%202023-07-27%2008-25-32.png)
![](https://github.com/Casterchenss/-java-hook-/blob/main/%E6%88%AA%E5%9B%BE%202023-07-27%2008-27-15.png)
