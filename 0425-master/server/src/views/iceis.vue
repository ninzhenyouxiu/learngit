<template>
    <div>
    <div style="width:100%; background:#fff;">
        <div class="menu_n">
        <img src="img/logo.png" width="100"/>
        <ul>
            <li><a href="index.html">网站首页</a></li>
            <li><a href="#">全系列产品</a>
            <ul>
            <li><a href="bla.html">黑森林系列</a></li>
            <li><a @click="icsis">冰岛系列</a></li>
            </ul>
            </li>
            <li><a @click="search">注册</a>/<a @click="login">登陆</a></li>
            <li><a @click="contact">联系我们</a></li>
        </ul>
        <div id="cleaner"></div>
        </div>
    </div>
    <div class="iceis_de">
    <div class="iceis_de_l"><img src="img/iceis_de.jpg" /></div>
    <div class="iceis_de_r">
    <p>
    ● 完美的纯净水，可溶性固体含量（水中杂质）只有55mg/l<br/>
    ●icesis 水  低钙，高碳酸盐，高ph 值，达到8.5， 碱性水， 能够帮助身体的酸碱平衡。<br/>
    ●Iceis 水富含天然的高氧含量，有利于提升血热的氧吸收并能帮助吸收更多营养物质<br/>
    ●天然碱性水能有效中和同位素改善血热循环<br/>
    ●润肠通便，排毒养颜，润肌美肤，对青春痘的治疗有辅<br/>
    ●增强对微生物病毒和疾病的抵抗性，提升幸福感<br/>
    ●iceis 水 富含氧含量，帮助血热吸收营养物质。<br/>
    ●减少关节疼痛并提升生产力
    </p>
    </div>
    <div id="cleaner"></div>
    <p style="color:#a2b45f; font-size:22px; line-height:3; font-weight:bold;">冰岛系列</p>
    <img src="img/list1.jpg" width="240" style="padding-right:7px;" />
    <img src="img/list2.jpg" width="240" style="padding:0 7px;" />
    <img src="img/list3.jpg" width="240" style="padding:0 7px;" />
    <img src="img/list4.jpg" width="240" style="padding-left:7px;" />
    </div>
    <div style="height:50px;"></div>
    <div class="foot">
    <div class="green"><a href="#">关于BFhut</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">购物指南</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">服务中心</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">联系我们</a>&nbsp;&nbsp;|</div>
    <div class="copyright">Copyright&copy;BFHut.com | 鲁ICP备8888888号-1   技术支持：<a href="http://www.mycodes.net/" target="_blank"><img src="img/qgs.png" height="18px" style="margin-bottom:-3px;"></a></div>
    </div> 
    </div>
</template>
<script>
    export default {
        data(){
            return {}
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
                this.$router.push({path:"/iceis"})
            }
        }
    }
</script>
<style>
   body{background:url(../../public/img/iceis_debg.jpg); background-position: center;} 
   .menu{position:absolute;right:15px;top:70px; text-align:right;font-size:16px; z-index:9999;}	
    .menu ul li{float:left;font-size:16px;padding:0 15px; list-style-type:none; cursor:pointer;}		
    .menu ul li a{font-size:16px; }
    .menu ul li a:hover{color: #000;}
    .menu ul li ul{position:absolute; padding:10px 0 0 0; margin:0;  text-align:left; background:#f5f5f5; display:none;}
    .menu ul li ul li{float:none; padding:7px 5px; margin:0; border-right:none; border-top:1px solid #ccc;background:#f5f5f5;}

    .menu ul li:hover ul{display:block;}
    #cleaner{clear:both;}
    .iceis_de{width:1024px; margin:0 auto; padding-top:100px;}
    .iceis_de_l{float:left; width:675px; height:445px;}
    .iceis_de_r{float:right; width:315px; height:435px; padding:5px 10px; background:#fff;}
    .iceis_de_r p{font-size:15px; line-height:2;}
</style>