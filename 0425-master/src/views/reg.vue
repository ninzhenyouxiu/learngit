<template>
<div>
    <my-header></my-header>
    <div class="login">
	<div class="reg_i">
	<input v-model="name" type="text" placeholder="用户名以小写字母开头 3-8位" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="width:270px; height:36px; margin-bottom:10px; border: thin solid #CCCCCC; border-bottom-style: none; color:#999;" />
	<input v-model="pwd" type="password" placeholder="密码数字 3-8位" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="width:270px; height:36px; margin-bottom:10px; border: thin solid #CCCCCC; color:#999;" />
	<input v-model="email" type="text" placeholder="邮箱格式为xxx@xx.com" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="width:270px; height:36px; margin-bottom:10px; border: thin solid #CCCCCC; color:#999;" />
	<input v-model="phone" type="text" placeholder="电话格式1xxxxxxxxxx" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="width:270px; height:36px; margin-bottom:10px; border: thin solid #CCCCCC; color:#999;" />
	<input v-model="username" type="text" placeholder="姓名格式：张三" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="width:270px; height:36px; margin-bottom:10px; border: thin solid #CCCCCC; color:#999;" />
	<div class="dl_an">
	<button type="button" class="dl_btn" @click="regl">注册</button>
	</div>
	</div>
	</div>
	<div class="tiaozhuan"><button class="reg_btn"><a @click="login">用户登录</a></button></div>
    <my-footer></my-footer>
</div>
</template>
<script>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
    export default {
		data(){
			return {
				name:"",
				pwd:"",
				email:"",
				phone:"",
				username:""
			}
		},
		methods: {
			login(){
				this.$router.push({path:"/login"});
			},
			regl(){
				//获取用户名正则
				var regy=/^[a-z0-9]{3,8}$/;
				//获取密码正则验证
				var regm=/^[0-9]{3,8}$/;
				//获取邮箱正则验证
				var rege=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				//获取电话正则验证
				var regp=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
				//真实姓名正则验证
				var regu=/^[\u4e00-\u9fa5]{2,4}$/;
				if(!regy.test(this.name)){
					alert("用户名格式输入有误。");
					return;
				};
				if(!regm.test(this.pwd)){
					alert("密码格式输入有误。")
					return;
				}
				if(!rege.test(this.email)){
					alert("邮箱格式有误");
					return;
				}
				if(!regp.test(this.phone)){
					alert("电话格式有误。");
					return;
				}
				if(!regu.test(this.username)){
					alert("输入的姓名格式有误。");
					return;
				}
			this.axios.get("http://localhost:3030/reg",{params:{
				uname:this.name,
				upwd:this.pwd,
				email:this.email,
				phone:this.phone,
				user_name:this.username
				}}
			).then(res=>{
				alert("注册成功");
				setTimeout(()=>{
					this.login();
				})
			}).catch(e => console.log(e))
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
