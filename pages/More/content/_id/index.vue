<template>
	<div class="detail">
		<header>
			<nav></nav>
			<div class="nav">
				<div class="navcontent">
					<a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun"></nuxt-link>
					</a>
					<ul>
						<li v-for="i in data">
							<a :id="i.channel.id" :href='"../../../Navigation/"+i.channel.id'>{{i.channel.name}}</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<div id="div"></div>
		<div class="content">
			<div class="detailcontent">
				<div class="detailtext clearfix">
					<div class="text-left">
						<h1 :title="backData.content.content.title">{{backData.content.content.title}}</h1>
						<div class="detailtextleft" v-html="backData.content.content.detail">
						</div>
						<div class="detailcontent-fx clearfix">
							<div class="con-hot">
								<div class="hot-btn">

								</div>
								<span>{{backData.content.content.heatCountNew}}热度</span>
							</div>
							<div class="share-fx">
								<a class="tsina"></a>
								<a class="qzone"></a>
								<a class="cqq"></a>
								<div class="wx-qrcode">
									<a class="weixin"></a>
								</div>
							</div>
						</div>
					</div>
					<div class="detailtextright">
						<div class="author">
							<a href="javascript:;">
							<img :src="backData.content.author.avatar" alt="" />
							<div class="authorcon">
								<h3>{{backData.content.author.nickName}}</h3>
								<p>{{time}}</p>
							</div>
							</a>
						</div>
						<ul class="host-list clearfix">
							<!--<li v-for="i in backData.">
								<a href="javascript:;">
								
							</a>
							</li>-->
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
		 return 	
		},
		async asyncData({
			params
		}) {
			let {
				data
			} = await axios.get(`http://www.17getfun.com//api/channel/allChannels`);
			let backData = await axios.get(`http://backup.17getfun.com/discovery/contentDetail?size=20&id=${params.id}`);  
			let time=(backData.data.currentTime-backData.data.data.content.content.publishTime)/1000;
			if(time<3600){
				time=Math.floor(time/60)+'分钟前'
			}else if(time>=3600&&time<86400){
				time=Math.floor(time/3600)+'小时前'
			}else if(time>=86400){
				time=Math.floor(time/86400)+'天前'
			}     
			return {
				data: data.data,
				backData: backData.data.data,
				time:time
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
	
	.detail {
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
	
	.content {
		width: 100%;
		height: 100%;
		margin-top: 25px;
	}
	
	.detailcontent {
		width: 1110px;
		margin: 0 auto;
	}
	.text-left{
		width: 800px;
		float: left;
	}
	.detailtextright{
		width: 280px;
		float: right;
	}
	.detailtextright>.author{
     width: 100%;
     height: 60px;
	}
	.detailtextright>.author>a{
	display: block;
     width: 100%;
     height: 60px;
     display: flex;
	}
	.detailtextright>.author>a>img{
		display: inline-block;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		margin-right: 25px;
		vertical-align: top;
	}
	.detailtextright>.author>a>.authorcon>h3{
		color: #333333;
		font-weight: lighter;
		font-size: 20px;
	}
	.authorcon>p{
		color: #999999;
	}
	.detailtextleft {
		width: 100%;
		padding: 30px 80px;
	}
	
	.detailtextleft>h1 {
		margin-bottom: 50px;
	}
	
	.detailleftimg {
		width: 100%;
	}
	
	.detailleftimg>img {
		width: 100%;
		height: 100%;
	}
	
	.detailcontent-fx {
		width: 100%;
		margin-top: 25px;
	}
	
	.con-hot {
		float: left;
		display: flex;
	}
	
	.share-fx {
		float: right;
		padding: 0px 20px;
	}
	
	.con-hot>.hot-btn {
		width: 32px;
		height: 32px;
		background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png")no-repeat;
		background-position: -30px -4px;
	}
	
	.share-fx>a {
		display: inline-block;
		float: left;
		width: 32px;
		height: 32px;
		background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
		margin:0px 3px;
	}
	.share-fx>.tsina{
		background-position: 5px 128px;
	}
	.share-fx>.qzone{
		background-position: 0px 96px;
	}
	.share-fx>.cqq{    
		background-position: 0px 32px;
	}
	.wx-qrcode{
		width: 32px;
		height: 32px;
		float: left;
	}
	.wx-qrcode>a{
		display: block;
		width: 32px;
		height: 32px;
		background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
		background-position: 0 65px;
	}
</style>