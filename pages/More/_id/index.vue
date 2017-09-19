<template>
	<div class="tagcontent">
		<header>
			<nav></nav>
			<div class="nav">
				<div class="navcontent">
					<a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun"></nuxt-link>
					</a>
					<ul>
						<li v-for="i in data">
							<a :id="i.channel.id" :href='"../../Navigation/"+i.channel.id' @click="get($event)">{{i.channel.name}}</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<div id="div"></div>
		<div class="Micro">
		</div>
		<div class="content">
			<div class="contenttext">
				<div class="textleft">
					<div class="contenttextleft clearfix">
						<ul class="swiper">
							<li v-for="i in backData.ads">
								<a :href='"More/swiper/"+i.id'><img :src="i.imgUrl" alt=""></a>
							</li>
						</ul>
						<ul class="waterfall">
							<li v-for="i in backData.contents" :title="i.content.title" :width="i.content.imageWidth" class="contentimage">
								<a :href='"../../More/content/"+i.content.id' :id="i.content.id">
									<img :src="i.content.image">
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

				<div class="contenttextright">
					<div class="zuihost">
						<strong><i></i>最热门</strong>
						<ul class="zuihostcontent clearfix">
							<li v-for="i in backData.hotContents">
								<a href="javascript:;" :title="i.content.title">
									<img :src="i.content.image" :alt="i.content.title">
									<strong>{{i.content.title}}</strong>
								</a>
							</li>
						</ul>
					</div>
					<div class="zuihosttag">
						<strong class="clearfix"><i></i>热门标签<a href="/More/Fulltag">更多</a></strong>
						<div class="zuihosttaglist">
							<a v-for="i in backData.hotTag" :id="i.id" :href='i.id'>{{i.name}}</a>
						</div>
					</div>
					<div class="Hottopic">
						<strong class="clearfix"><i></i>热门专题</strong>
						<ul class="Hottopiclist">
							<li v-for="i in backData.hotTopics">
								<a :href="i.protocol" class="clearfix">
									<img :src="i.imgUrl" alt="i.title">
									<span>{{i.title}}</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="gotop" @click="gotop">
		</div>
		<footer>
			<div class="footer">
				<p>旭峰海波科技（北京）有限公司 Copyright ©2016 All Rights Reserved. &nbsp;&nbsp;&nbsp;京ICP备15059087号</p>
				<p>
					<a target="_blank" href="http://www.17getfun.com/publish/index">关于我们</a> &nbsp; | &nbsp;
					<a target="_blank" href="http://www.17getfun.com/publish/index">联系我们</a> &nbsp; | &nbsp;
					<a target="_blank" href="http://www.17getfun.com/publish/index">APP下载</a>
				</p>
			</div>
		</footer>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {

		async asyncData({
			params
		}) {
			let {
				data
			} = await axios.get(`http://www.17getfun.com//api/channel/allChannels`);
			var backData = await axios.get(`http://backup.17getfun.com/discovery/getContentByKeyId?tagId=${params.id}&page=1&size=30&tagSize=35`);            
			return {
				data: data.data,
				backData: backData.data.data
			}
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
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
	}
	
	.clearfix {
		content: "";
		display: block;
		clear: both;
	}
	
	.tagcontent {
		width: 100%;
		height: 100%;
	}
	
	#div {
		width: 100%;
		height: 80px;
	}
	
	header {
		width: 100%;
		border-bottom: 1px solid #ccc;
		z-index: 10;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}
	
	header>nav {
		width: 100%;
		height: 2px;
		background: -webkit-linear-gradient(left, #ec66e9, #efd655);
	}
	
	.nav {
		width: 100%;
	}
	
	.nav>.navcontent {
		padding: 15px 0px;
		width: 1110px;
		margin: 0 auto;
		display: flex;
	}
	
	.nav>.navcontent>a>img {
		display: block;
		width: 135px;
		height: 33.5px;
		margin-right: 250px;
	}
	
	.nav>.navcontent>ul {
		display: flex;
		list-style: none;
	}
	
	.nav>.navcontent>ul>li {
		padding: 10px 0px;
		margin-left: 20px;
	}
	
	.nav>.navcontent>ul>li>a {
		text-decoration: none;
		color: #000;
		font-size: 15px;
	}
	
	.nav>.navcontent>ul>li:first-child>a {
		color: #e7497a;
		font-weight: bold;
	}
	
	#div {
		width: 100%;
		height: 100px;
	}
	
	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.contenttext {
		width: 1110px;
		margin: 0 auto;
		display: flex;
	}
	
	.textleft {
		width: 820px;
	}
	
	.contenttextleft {
		width: 820px;
	}
	
	.contenttextright {
		-webkit-flex-grow: 1;
		padding: 10px;
	}
	
	.contenttextleft>.waterfall{
width:100%;
-moz-column-count:3; /* Firefox */
 -webkit-column-count:3; /* Safari 和 Chrome */
 column-count:3;
 -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
   column-gap: 1em;
}
.waterfall{
 margin-top:5px ;
}
.contentimage{
	  -moz-page-break-inside: avoid;
   -webkit-column-break-inside: avoid;
   break-inside: avoid;
   margin: 5px;
}
.contenttextleft>ul>.contentimage>a{
  display:block;
  width:260px;
  max-height:464px;
  overflow: hidden;
}
.contenttextleft>ul>.contentimage>a>img{
  display:block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.contenttextleft>.swiper{
  position: relative;  
}
.contenttextleft>.swiper>li{
   position: absolute;
}
.contenttextleft>.swiper>li>a>img{
    width:532px;
    height:220px; 
}
.contenttextleft>.waterfall>li>a{
  display:block;
  overflow: hidden;
}
.contenttextleft>.waterfall>li>a>img:hover{
  transform:scale(1.02);
  transition:0.5s;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>h2{
  color:#666;
  font-size:12px;
  padding: 5px;
  border-bottom:1px solid #ccc;
  white-space:nowrap;
   text-overflow:ellipsis;
     overflow:hidden;
}
.contenttextleft>.waterfall>li>.contenttext-tltle{
  background:#fff;
  width:100%;
  padding:8px;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name{
  padding:8px 0px;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>a{
  color:#B5B5B5;
  font-size:12px;
  text-decoration: none;
  display:inline-block;
  padding:5px 0px;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share{
   float:right; 
   margin-right:10px;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a{
   background:url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
  background-size:150%;
  background-repeat: no-repeat;
  display: inline-block;
  width:32px;
   height:31px;
  cursor: pointer;
  opacity:0.4;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:hover{
  opacity:1;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(1){
      background-position:4px -21px;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(2){
      background-position:4px -46px;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(3){
      background-position:2px -94px;
}
.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(4){
      background-position:5px -69px;
}
	
	.contenttextright>.zuihost {
		width: 260px;
		height: 318px;
		/*overflow: hidden;*/
	}
	
	.contenttextright>.zuihost>strong {
		font-size: 14px;
		vertical-align: top;
	}
	
	.contenttextright>.zuihost>strong>i {
		display: inline-block;
		width: 2px;
		height: 14px;
		background: #FF6250;
		margin-right: 3px;
	}
	
	.contenttextright>.zuihost>.zuihostcontent {
		width: 100%;
		margin-top: 10px;
	}
	
	.contenttextright>.zuihost>.zuihostcontent>li {
		width: 128px;
		height: 160px;
		float: left;
		margin-bottom: 15px;
		margin-right: 2px;
	}
	
	.contenttextright>.zuihost>.zuihostcontent>li>a>img {
		width: 100%;
		height: 123px;
	}
	
	.contenttextright>.zuihost>.zuihostcontent>li>a>strong {
		display: block;
		width: 123px;
		font-size: 14px;
		margin-top: 10px;
		color: #333;
		font-weight: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.contenttextright>.zuihosttag {
		width: 260px;
		margin-top: 30px;
	}
	
	.contenttextright>.zuihosttag>strong {
		font-size: 14px;
		vertical-align: top;
	}
	
	.contenttextright>.zuihosttag>strong>i {
		display: inline-block;
		width: 2px;
		height: 14px;
		background: #FF6250;
		margin-right: 3px;
	}
	
	.contenttextright>.zuihosttag>strong>a {
		float: right;
		color: #666;
		font-size: 14px;
	}
	
	.contenttextright>.zuihosttag>.zuihosttaglist>a {
		font-size: 14px;
		color: #fd7a2f;
		line-height: 25px;
		display: inline;
		padding: 2px;
		cursor: pointer;
	}
	
	.contenttextright>.Hottopic {
		width: 260px;
		margin-top: 30px;
	}
	
	.contenttextright>.Hottopic>strong {
		font-size: 14px;
		vertical-align: top;
	}
	
	.contenttextright>.Hottopic>strong>i {
		display: inline-block;
		width: 2px;
		height: 14px;
		background: #FF6250;
		margin-right: 3px;
	}
	
	.Hottopiclist {
		width: 100%;
	}
	
	.Hottopiclist>li {
		width: 260px;
		height: 60px;
		margin: 10px;
	}
	
	.Hottopiclist>li>a>img {
		width: 75px;
		height: 60px;
		margin-right: 10px;
		float: left;
	}
	
	.Hottopiclist>li>a>span {
		font-size: 14px;
		color: #333;
	}
	
	footer {
		width: 100%;
		height: 54px;
		background-color: #575757;
		margin: 0;
	}
	
	.footer {
		width: 1100px;
		height: 54px;
		margin: 0 auto;
		height: 54px;
		text-align: center;
		font-size: 12px;
		line-height: 54px;
		color: #999;
	}
	
	.footer>p:first-child {
		float: left;
	}
	
	.footer>p:last-child {
		float: right;
	}
	
	.footer>p:last-child>a {
		color: #999;
	}
	
	#gotop {
		width: 55px;
		height: 45px;
		background: rgba(0, 0, 0, .3);
		bottom: 54px;
		background-image: url("//static.17getfun.com/2017s3/image/publish/index2/dirImg.png");
		background-repeat: no-repeat;
		background-position: 11px -190px;
		transition: all .5s ease;
		cursor: pointer;
		position: fixed;
		right: 0;
		bottom: 64px;
		z-index: 1111;
	}
</style>