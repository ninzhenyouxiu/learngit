<template>
    <div>
        <my-header></my-header>	
        <div class="about_up">
        <div class="about_w">
        <span>致力于更美好的生活<br/><br/><br/></span>
        <p>去除生活的乏味，体验缤纷生活，就在BFhut。<br/><br/>
        This venter is committed to provide you with better life choices, for more information please contact our BFhut customer service, for more support and advice. </p>
        </div>
        <div class="about_p"><img src="img/about_people.png" /></div>
        <div id="cleaner"></div>
        </div>

        <div class="about_down">
        <div class="about_video"><img src="img/video.jpg" /></div>
        <div class="about_click"><img src="img/about_click.png" /></div>
        <div id="cleaner"></div>
        </div>
        <div style="height:65px;"></div>
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
.about_up{
	width:1024px;
	margin:0 auto;
	border-bottom-width: thin;
	border-bottom-style: solid;
	border-bottom-color: #333333;
}
.about_up span{font-size:26px; color:#000;}
.about_up p{ width:650px;}
.about_w{float:left; width:650px; padding-top:50px;}
.about_p{float:right;width:305px;}
.about_down{width:1024px;
	margin:0 auto;
}
.about_video{float:left; width:670px; padding-top:25px;}
.about_click{float:right;width:305px; padding-top:100px;} 
</style>