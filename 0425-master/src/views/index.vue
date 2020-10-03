<template>
  <div>
    <!-- 3.在页面上使用组件标签 -->
    <my-header></my-header>
  <div id="wrapper">
    <div id="carousel">
            <ul>
                <li><a href=""><img src="img/1.jpg" alt=""></a>
                <span><a href="#">001<br><br><strong>BFhut-热带系</strong>
                <br><br>浓烈热带水果香，沐浴间带你走进热带雨林。</a></span>
                </li>
                <li><a href=""><img src="img/2.jpg" alt=""></a>
                <span><a href="">002</a><br><br><strong>BFhut-冰岛系</strong><br><br>来自冰岛的纯净，清凉干净。</span>
                </li>
                <li><a href=""><img src="img/3.jpg" alt=""></a>
                <span><a href="">003</a><br><br><strong>BFhut-加比勒系</strong><br><br>来自加勒比的热情与神秘。带你领略不一样的加勒比。</span>
                </li>
                <li><a href=""><img src="img/4.jpg" alt=""></a>
                <span><a href="">004</a><strong>BFhut-五彩缤纷系</strong><br><br>去除生活的乏味，体验缤纷生活，就在BFhut。</span>
                </li>
                <li><a href=""><img src="img/4.jpg" alt=""></a>
                <span><a href="">005</a><br><br><strong>BFhut-雨林系</strong><br><br>走进雨林一样的清爽世界。</span>
                </li>
                <li><a href=""><img src="img/1.jpg" alt=""></a>
                <span><a href="">006</a><br><br><strong>BFhut-加比勒系</strong>来自加勒比的热情与神秘。带你领略不一样的加勒比。</span>
                </li>
            </ul>
            <a id="prev" class="prev" href="#">&lt;</a>
            <a id="next" class="next" href="#">&gt;</a>
        </div>
    </div>
<div style="height:150px;"></div>
    <my-footer></my-footer>
  </div>
</template>
<script>
//1.引入header.vue组件对象,临时命名为myHeader，将来组件标签就是<my-header>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
export default {//var home={ ... }
  data(){
    return {}
  },
  methods:{
  },
  mounted(){
     $(function() {
        $('#carousel ul').carouFredSel({
            prev: '#prev',
            next: '#next',
            pagination: "#pager",
            scroll: 1000
        });
      });
  },
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style scoped>
/* 轮播图 */
#wrapper {
	width: 1024px;
	left: 50%;
	top: 50%;
	margin-top: 0px;
	margin-right: auto;
	margin-bottom: 0;
	margin-left: auto;
			}

#carousel {
	width: 1010px;
	position:relative;
	margin-left: 7px;
			}
#carousel ul {
        list-style: none;
        display: block;
        margin: 0;
        padding: 0;
    }
#carousel li {
	font-size: 12px;
	color: #999;
	text-align: center;
	display: block;
	width: 240px;
	padding: 0;
	margin: 6px;
	float: left;
	position: relative;
	height: 400px;
			}
#carousel li img {
        width: 240px;
        margin-top: 14px;
    }
			
#carousel li span {
	display: block;
	width: 170px;
	height: 100px;
	position: absolute;
	z-index: 2;
	top: 280px;
	left: 10px;
	text-align: left;
			}
#carousel li strong{font-size:18px;}			

#clearfix {
        float: none;
        clear: both;
    }
#carousel .prev, #carousel .next {
	text-indent: -999px;
	display: block;
	overflow: hidden;
	width: 25px;
	height: 46px;
	/*margin-left: 10px;*/
	position: absolute;
	top: 120px;
	background-color: transparent;
	background-image: url(../../public/img/carousel_control1.png);
	background-repeat: no-repeat;
	background-position: 0 0;
			}
#carousel .prev {
        background-position: 0 0;
        left: -40px;
    }
#carousel .prev:hover {
        left: -41px;
    }			
#carousel .next {
        background-position: -25px 0;
        right: -30px;
	}
#carousel .next:hover {
        right: -31px;
    }				
#carousel #pager {
		text-align: center;
		margin: 0 auto;
    }
/* header和foot 的样式 */
.top{
	width:1024px;
	height:180px;
	position: relative;
	left:50%;
	margin-left:-512px;
	margin-top: 2%;
	*padding-top:5%;
}
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