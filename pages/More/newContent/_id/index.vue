<template>
	<div class="newcontent">
		<header>
      <nav></nav>
      <div class="nav">
        <div class="navcontent">
            <a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun"></nuxt-link></a>
          <ul>
            <li v-for="i in data"><a :id="i.channel.id" :href='"../../Navigation/"+i.channel.id' @click="get($event)">{{i.channel.name}}</a></li>
          </ul>
        </div>
      </div>
    </header>
        <div class="content">
        	<div id="div"></div>
        	<div class="bander">
        		<div class="bandershadow">
        			<div class="Title">
        				<strong>蒙面唱将猜猜猜</strong>
        				<p class="titletext">不看脸，只听歌，不变的品质，有趣的猜评团，面具背后歌手的身份充满悬念。</p>
        				<p class="num"><span>————</span><em>&nbsp;&nbsp;&nbsp;&nbsp;4550人正在参与&nbsp;&nbsp;&nbsp;&nbsp;</em><span>————</span></p>
        				<ul>
        					<li><img src="https://img.17getfun.com/FhOAJD0gIhNDUAS-hBb9p7-jaRTD?imageMogr2/auto-orient/gravity/North/thumbnail/!112x112r/crop/112x112/format/webp/ignore-error/1" alt="" /></li>
        				    <li><img src="https://img.17getfun.com/Ft5dWysFIP-WFeKO0BbhbZQMbcha?imageMogr2/auto-orient/gravity/North/thumbnail/!112x112r/crop/112x112/format/webp/ignore-error/1"/></li>
        				    <li><img src="https://img.17getfun.com/Fnt-Ou-0fLarLtePEbb6U-eaIvLB?imageMogr2/auto-orient/gravity/North/thumbnail/!112x112r/crop/112x112/format/webp/ignore-error/1"/></li>
        				</ul>
        			</div>
        		</div>
        	</div>
       <div class="contenttext">
            <div class="textleft">
                        <ul class="waterfall">
                        <li v-for="i in backData" :title="i.content.title" :width="i.content.imageWidth" :height="i.content.imageHeight" class="contentimage">
                            <a :href='"../../More/content/"+i.content.id' :id="i.content.id">
                                <img :src="i.content.image" :width="i.content.imageWidth" :height="i.content.imageHeight">
                            </a>
                            <div class="contenttext-tltle">
                                <h2 :title="i.content.title">{{i.content.title}}</h2>
                                <div class="content-name">
                                    <a :href='"../../More/user/"+i.author.id' :title="i.author.nickName">{{i.author.nickName}}</a>
                                    <div class="share">
                                        <a href="javascript:;" title="分享到新浪微博"></a>
                                        <a href="javascript:;" title="分享到QQ空间"></a>
                                        <a href="javascript:;" title="分享到QQ好友"></a>
                                        <a href="javascript:;" title="分享到微信"></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div> 
        </div>
       </div>
       <div id="gotop" @click="gotop"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		async asyncData({}){
			let {data} = await axios.get('http://www.17getfun.com//api/channel/allChannels');
			let backData = await axios.get('https://www.17getfun.com/api/tag/2_0/newContents?tagId=765167&size=25');
            return {data:data.data,backData:backData.data.data}
		},
		mounted() {
			this.$nextTick(function() {
				window.addEventListener('scroll', this.onScroll);
			})			 
		},
		methods: {
			onScroll() {
				let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
				if(scrolled >= 200) {
					document.getElementById("gotop").style.opacity = 1;
				} else {
					document.getElementById("gotop").style.opacity = 0;
				}
			},
			gotop() {
				document.body.scrollTop = 0;
			},
					get(event){
			let target = event.target;
		    if(target.id==41){
		    	target.href='/'
		    }else if(target.id==37){
		        target.href='../../Specialcolumn/37'
		    }  
		}
			}
		    
		}
</script>

<style scoped>
	 *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
  }
  .clearfix{
    content:"";
    display:block;
    clear:both;
  }
  .newcontent{
    width:100%;
    height:100%;
  }
  header{
    width:100%;
    border-bottom:1px solid #ccc;
    z-index:10;
    background:#fff;
    position: fixed;
    top: 0;
    left:0;
  }
  header>nav{
    width:100%;
    height:2px;
    background:-webkit-linear-gradient(left,#ec66e9,#efd655);
  }
  .nav{
    width:100%;
  }
  .nav>.navcontent{
    padding:15px 0px;
    width:1110px;
    margin:0 auto;
    display:flex;
  }
  .nav>.navcontent>a>img{
    display:block;
    width:135px;
    height:33.5px;
    margin-right:250px;
  }
  .nav>.navcontent>ul{
    display:flex;
    list-style:none;
  }
  .nav>.navcontent>ul>li{
    padding:10px 0px;
    margin-left:20px;
  }
  .nav>.navcontent>ul>li>a{
    text-decoration:none;
    color:#000;
    font-size:15px;
  }
  .nav>.navcontent>ul>li:first-child>a{
    color:#e7497a;
    font-weight:bold;
  }
   .content{
  width:100%;
  height:100%;
  overflow:hidden;
}
#div{
	width: 100%;
	height:70px;
}
.bander{
	width: 100%;
	height: 270px;
	background: url("https://img.17getfun.com/vvnjFicBXkvq3Ws");
	background-repeat: no-repeat;
	background-position:center center;
	background-size: cover;
     position: relative;
     margin-bottom: 10px;
}
.bander>.bandershadow{
	width: 100%;
	height: 100%;
	position: absolute;
	background:rgba(0,0,0,0.4);
}
.Title{
	width: 1100px;
	height: 100%;
	margin: 0 auto;
	text-align: center;
}
.Title>strong{
	display: block;
	color: #FFFFFF;
	font-size:27px;
	font-weight: lighter;
	margin-top:40px;
	margin-bottom: 25px;	
}
.Title>.num{
  display: block;
  margin: 15px 0px;
}
.Title>.num>span{
  color: #FFFFFF;
}
.Title>.num>em{
  color: #FFFFFF;
}
.Title>ul{
	display: flex;
	padding-left: 40%;
}
.Title>ul>li{
	width: 50px;
	height: 50px;
	margin: 2%;
}
.Title>ul>li>img{
	display: block;
	width: 48px;
	height: 48px;
	border-radius: 50%;
}
.titletext{
	color: #FFFFFF;
}
.contenttext{
  width:1110px;
  margin:0 auto;
  display: flex;
}
.textleft{
  width: 1110px;
}
.waterfall{
width:100%;
-moz-column-count:4; /* Firefox */
 -webkit-column-count:4; /* Safari 和 Chrome */
 column-count:4;
 -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
   column-gap: 1em;
   margin-top:10px ;
}
.contentimage{
	  -moz-page-break-inside: avoid;
   -webkit-column-break-inside: avoid;
   break-inside: avoid;
   margin: 5px;
}
.waterfall>.contentimage>a{
  display:block;
  width:260px;
  max-height:464px;
  overflow: hidden;
}
.waterfall>.contentimage>a>img{
  display:block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.waterfall>li>a{
  display:block;
  overflow: hidden;
}
.waterfall>li>a>img:hover{
  transform:scale(1.02);
  transition:0.5s;
}
.waterfall>li>.contenttext-tltle>h2{
  color:#666;
  font-size:12px;
  padding: 5px;
  border-bottom:1px solid #ccc;

}
.waterfall>li>.contenttext-tltle{
  background:#fff;
  width:100%;
  padding:8px;
}
.waterfall>li>.contenttext-tltle>.content-name{
  padding:8px 0px;
}
.waterfall>li>.contenttext-tltle>.content-name>a{
  color:#B5B5B5;
  font-size:12px;
  text-decoration: none;
  display:inline-block;
  padding:5px 0px;
}
.waterfall>li>.contenttext-tltle>.content-name>.share{
   float:right; 
}
.waterfall>li>.contenttext-tltle>.content-name>.share>a{
   background:url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
  background-size:150%;
  background-repeat: no-repeat;
  display: inline-block;
  width:32px;
   height:31px;
  cursor: pointer;
  opacity:0.4;
}
.waterfall>li>.contenttext-tltle>.content-name>.share>a:hover{
  opacity:1;
}
.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(1){
      background-position:4px -21px;
}
.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(2){
      background-position:4px -46px;
}
.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(3){
      background-position:2px -94px;
}
.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(4){
      background-position:5px -69px;
}
 #gotop{
    width: 55px;
    height: 45px;
    background: rgba(0,0,0,.3);
    bottom: 54px;
    background-image: url("//static.17getfun.com/2017s3/image/publish/index2/dirImg.png");
    background-repeat: no-repeat;
    background-position: 11px -190px;
    transition: all .5s ease;
    cursor:pointer;
    position: fixed;
    right: 0;
    bottom:64px;
    z-index:1111;
  }
</style>