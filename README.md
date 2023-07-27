# -java-hook-
实现轻松hook类中所有方法包括内部类的所有方法
#使用
function main(){
    try {
       //只需要在此处填写包名.类名即可
        hookClass("javax.crypto.Cipher")
    }catch (e) {
        console.log("没有找到该类")
    }
//hookClass("javax.crypto.Cipher")
}

