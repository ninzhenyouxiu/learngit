<template>
    <div>
        <my-header></my-header>
        <div class="contact">
        <div class="tijiao">
        <div class="neirong">
        姓名<br/>
        <input type="text" style="width:450px; height:36px; border:none;">
        </div>
        <div class="neirong">
        邮件<br/>
        <input type="text" style="width:450px; height:36px; border:none;">
        </div>
        <div class="neirong">
        信息<br/>
        <textarea type="text" style="width:450px; height:200px; border:none;"></textarea>
        </div>
        <div class="neirong"><button type="button" style="width:150px; height:30px; font-size:18px; line-height:30px; background:#88a02f; color:#fff; border:none; float:left; margin-top:5px;">提交</button></div>
        </div>
        <div class="contact_pic">Tel:86-XXX-XXXXXXXX<br/>
        Address：XX省XX市XX区XXX路XXX号XXXXD座904</div>
        </div>
        <div id="cleaner"></div>
        <div style="height:100px;"></div>   
        <my-footer></my-footer>
    </div>
</template>
<script>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
    export default {
        data(){
            return {}
        },
        components:{
            myHeader,
            myFooter
        }
    }
</script>
<style>
  .contact{
	width:1000px;
	margin-top: 0;
	margin-right: auto;
	margin-bottom: 0;
	margin-left: auto;
	padding-right: 10px;
	padding-bottom: 100px;
	padding-left: 10px;
}
.tijiao{width:450px; float:left;}
.neirong{font-size:24px; padding-top:35px; line-height:30px;}
.contact_pic{
	width:420px;
	float:left;
	padding-left: 75px;
	padding-top: 400px;
	font-size:15px;
	line-height:35px;
	text-align:right;
	padding-top:400px;
}  
</style>