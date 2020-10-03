<template>
    <div class="top" style="margin-top:5%;">
        <div class="logo">
            <img src="img/logo.png" width="150" alt="">
            <p>本凡特致力于给您提供更优质的生活选择。</p>
            <p>This venter is committed to provide you with better life choices.</p>
        </div>
        <div class="menu">
            <a href="index.html">首页</a> |
            <a @click="aboutus">关于我们&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <ul style="padding-top:15px;">
                <li>全系列产品
                <ul>
                    <li><a @click="black">黑森林系列</a></li>
                    <li><a @click="iceis">冰岛系列</a></li> 
                 </ul></li>
                <li><a @click="search" >注册</a><a @click="login">登录</a></li>
                <li><a @click="contact">联系我们</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
//抛出匿名模块对象
    export default {
        data(){
            return{}
        },
        methods: {
            search(){
                this.$router.push({path:"/reg"});
            },
            login(){
                this.$router.push({path:"/login"});
            },
            contact(){
                this.$router.push({path:"/contact"});
            },
            iceis(){
                this.$router.push({path:"/iceis"});
            },
            black(){
                this.$router.push({path:"/black"});
            },
            aboutus(){
                this.$router.push({path:"/aboutus"});
            }
        },
    }
</script>
<style scoped>
.logo{position:absolute;top:5px;left:5px;width:370px;}
.logo p{font-size:9px; line-height:18px;}		
.menu{position:absolute;right:15px;top:70px; text-align:right;font-size:16px; z-index:9999;}	
.menu ul li{float:left;font-size:16px;padding:0 15px; list-style-type:none; cursor:pointer;}		
.menu ul li a{font-size:16px; }
.menu ul li a:hover{color: #000;}
.menu ul li ul{position:absolute; padding:10px 0 0 0; margin:0;  text-align:left; background:#f5f5f5; display:none;}
.menu ul li ul li{float:none; padding:7px 5px; margin:0; border-right:none; border-top:1px solid #ccc;background:#f5f5f5;}

.menu ul li:hover ul{display:block;}
</style>