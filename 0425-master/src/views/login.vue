<template>
    <div>
        <my-header></my-header>     //引入公共头组件
    <div class="login">
	    <div class="login_i">
            <input type="text" v-model="name" class="ipt-txt" value="用户名/电话/邮箱：" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="width:270px; height:36px; border: thin solid #CCCCCC; border-bottom-style: none; color:#999;" />
            <input type="password" v-model="upwd" class="ipt-txt" value="密码：" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="width:270px; height:36px; border: thin solid #CCCCCC; color:#999;" />
            <div class="dl_an">
            <button type="button" class="dl_btn" @click="login">登陆</button>
            <button type="button" class="dl_btn">忘记密码</button></div>
        </div>
	</div>
	<div class="tiaozhuan"><a @click="search">新用户注册</a></div>
        <my-footer></my-footer> //引入公共尾组件
    </div>
</template>
<script>
import myHeader from "@/components/header.vue"  //引入公共头文件提供的模块
import myFooter from "@/components/footer.vue"  //引入公共尾文件提供的模块
import qs from "qs"
    export default {
        data(){
            return {
                name:"",
                upwd:""
            }
        },
        methods: {
            search(){
                this.$router.push({path:"/reg"});
            },
            login(){
                //1：获取用户输入用户名和密码
                //2.创建正则表达式
                 //用户名 字母 数字 下划线 3~8
                 var regy=/^[a-z0-9]{3,8}$/;
                 //密码 数组 3~8
                 var regm=/^[0-9]{3,8}$/;
                //3.验证用户名如果失败 提示错误信息
                if(!regy.test(this.name)){
                //4.验证密码如果失败，提示错误信息
                    alert("用户名格式错误");
                      return;
                }else if(!regm.test(this.upwd)){
                   alert("密码输入格式错误");
                      return;
                }
                //5.发送ajax请求
                this.axios.post(
                    "http://127.0.0.1:3030/login",qs.stringify({"uname":this.name,"upwd":this.upwd})
                ).then(res=>{
                    console.log(res.data)
                    alert(res.data.msg);
                });
            }
        },
        components:{
            myHeader,
            myFooter
        }
    }
</script>
<style>
.login{width:800px; height:450px; margin:0 auto; background:url(../../public/img/login_bg.png);}
.login_i{width:400px; margin:0 auto; text-align:center; padding-top:150px;}
.reg_i{width:400px; margin:0 auto; text-align:center; padding-top:105px;}
.reg_btn{background:none; border:none;}
.dl_an{width:400px; margin:10px auto;}
.dl_btn{width:270px;padding:7px 0px; margin:10px 0; text-align:center; font-size:20px;}
.tiaozhuan{width:300px; margin:50px auto; text-align:center; background:#88a02f; padding:15px 0;}
.tiaozhuan a{color:#fff; font-size:20px;}
</style>
