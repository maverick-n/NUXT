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
							<a :id="i.channel.id" :href='"../../../Navigation/"+i.channel.id' @click="get($event)">{{i.channel.name}}</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<div id="div"></div>
		<div class="content":id="backData.data.content.content.id" :localion="backData.position">
			<div class="detailcontent">
				<div class="detailtext clearfix">
					<div class="text-left">
						<h1 :title="backData.data.content.content.title">{{backData.data.content.content.title}}</h1>
						<div class="detailtextleft" v-html="detail" v-if='show'>
						</div>
						<div class="img-warp" v-if="show2">
							<img :src="backData.data.content.content.image" :width="backData.data.content.content.imageWidth" :height="backData.data.content.content.imageHeight" :gif="backData.data.content.content.git" />
						</div>
						<div class="detailcontent-fx clearfix">
							<div class="con-hot">
								<div class="hot-btn">

								</div>
								<span>{{backData.data.content.content.heatCountNew}}热度</span>
							</div>
							<div class="share-fx">
								<a class="tsina" title="分享到新浪微博" @click="wb($event)"></a>
								<a class="qzone" title="分享到QQ空间" @click="kj($event)"></a>
								<a class="cqq" title="分享到QQ好友" @click="qq($event)"></a>
								<div class="wx-qrcode">
									<a class="weixin" title="分享到微信"></a>
								</div>
							</div>
						</div>
					</div>
					<div class="detailtextright">
						<div class="author">
							<a href="javascript:;" :id="backData.data.content.author.id" class="authortext">
								<img :src="backData.data.content.author.avatar" alt="" />
								<div class="authorcon">
									<h3>{{backData.data.content.author.nickName}}</h3>
									<p>{{time}}</p>
								</div>
							</a>
							<div class="authorimg">
								<ul>
									<li v-for="i in authorcon" :title="i.content.title">
										<a :href="i.content.id"><img :src="i.content.image" :width="i.content.imageWidth" :height="i.content.imageHeight" /></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="detailmore">
					<strong>你可能也喜欢</strong>
				</div>
				<ul class="waterfall">
					<li v-for="i in backData.data.relatedContents" :title="i.content.title" :width="i.content.imageWidth" class="contentimage">
						<a :href='i.content.id' :id="i.content.id">
							<img :src="i.content.image">
						</a>
						<div class="contenttext-tltle">
							<h2 :title="i.content.title">{{i.content.title}}</h2>
							<div class="content-name">
								<a :href='"../../../More/user/"+i.author.id' :title="i.author.nickName">{{i.author.nickName}}</a>
								<div class="share">
									<a title="分享到新浪微博" @click="wb($event)"></a>
									<a title="分享到QQ空间" @click="kj($event)"></a>
									<a title="分享到QQ好友" @click="qq($event)"></a>
									<a title="分享到微信"></a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
					<div id="gotop" @click="gotop">
		</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				show: true,
				show2: true,
				authorcon: "",
				userid: "",
				data:""
			}
		},
		async asyncData({
			params
		}) {
			let {
				data
			} = await axios.get(`http://www.17getfun.com//api/channel/allChannels`);
			let backData = await axios.get(`http://backup.17getfun.com/discovery/contentDetail?size=20&id=${params.id}`);  
			let time = (backData.data.currentTime - backData.data.data.content.content.publishTime) / 1000;
			if(time < 3600) {
				time = Math.floor(time / 60) + '分钟前'
			} else if(time >= 3600 && time < 86400) {
				time = Math.floor(time / 3600) + '小时前'
			} else if(time >= 86400) {
				time = Math.floor(time / 86400) + '天前'
			}    

			return {
				data: data.data,
				backData: backData.data,
				detail: backData.data.data.content.content.detail,
				time: time
			}
		},
		mounted() {
			let html = document.getElementsByClassName("detailtextleft");
			let userid = document.getElementsByClassName("authortext");
			this.userid = userid[0].id;
			axios.get("http://localhost:5000/user", {
				params: {
					id: this.userid
				}
			}).then((res) => {
				this.authorcon = res.data.dataList[0].contents
			})
			if(html.valueOf()[0].innerHTML == '') {
				this.show = false
				this.show2 = true
			} else {
				html[0].innerHTML = html[0].innerHTML.replace(/data-src/g, "src")
				html[0].innerHTML = html[0].innerHTML.replace(/data-gif/g, "gif")
				this.show2 = false
			}
				this.$nextTick(function() {
				window.addEventListener('scroll', this.onScroll);
			})
		},
		methods: {
				onScroll() {
				let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				let clientHeight = document.documentElement.clientHeight;
				let scrollHeight = document.body.scrollHeight;
				let id=document.getElementsByClassName("content")[0].id;
				let Location=document.getElementsByClassName("content")[0].attributes[1].nodeValue;
				if(scrolled >= 200) {
					document.getElementById("gotop").style.opacity = 1;
				} else {
					document.getElementById("gotop").style.opacity = 0;
				}
				if(scrollHeight - (scrolled + clientHeight) < 200) {
//					axios.get("http://localhost:5000/user",{params:{id:4714183}}).then((res)=>{
//						this.data=res
//					})

                    axios.get("http://localhost:5000/content",{params:{id:id,position:Location}}).then((res)=>{
                    	this.data=res
                    })
				}
			},
			gotop() {
				document.body.scrollTop = 0;
			},
			get(event) {
				let target = event.target;
				if(target.id == 41) {
					target.href = '/'
				} else if(target.id == 37) {
					target.href = '../../../Specialcolumn/37'
				}
			},
			wb(event) {
				let target = event.target;
				window.sharetitle = target.parentNode.parentNode.parentNode.firstChild.innerHTML;
				window.shareUrl = target.parentNode.parentNode.previousElementSibling.children[0].src;
				(function(s, d, e) {
					try {} catch(e) {}
					var f = 'http://v.t.sina.com.cn/share/share.php?',
						u = d.location.href,
						p = ['url=', e(u), '&title=', e(window.sharetitle), '&appkey=2924220432', '&pic=', e(window.shareUrl)].join('');

					function a() {
						if(!window.open([f, p].join(''), 'mb', ['toolbar=0,status=0,resizable=1,width=620,height=450,left=', (s.width - 620) / 2, ',top=', (s.height - 450) / 2].join(''))) u.href = [f, p].join('');
					};
					if(/Firefox/.test(navigator.userAgent)) {
						setTimeout(a, 0)
					} else {
						a()
					}
				})(screen, document, encodeURIComponent);
			},
			kj(event) {
				let target = event.target;
				alert(target.parentNode.parentNode.parentNode.firstChild.innerHTML)
				var shareqqstring = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + location.href + "&title=" + target.parentNode.parentNode.parentNode.firstChild.innerHTML + "&pics=" + target.parentNode.parentNode.previousElementSibling.children[0].src;
				window.open(shareqqstring, 'height=450,width=620,top=200,left=600');
			},
			qq(event) {
				let target = event.target;
				var shareqqstring = "http://connect.qq.com/widget/shareqq/index.html?url=" + location.href + "&title=" + target.parentNode.parentNode.parentNode.firstChild.innerHTML + "&pics=" + target.parentNode.parentNode.previousElementSibling.children[0].src;
				window.open(shareqqstring, 'height=800,width=800,top=100,left=800');
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
	
	.text-left {
		width: 800px;
		float: left;
	}
	
	.text-left>h1 {
		font-size: 30px;
		margin-bottom: 50px;
		padding: 30px 50px;
	}
	
	.img-warp {
		width: 100%;
		text-align: center;
	}
	
	.detailtext {
		display: inline-block;
	}
	
	.detailtextleft {
		font-size: 18px;
		color: #333;
		width: 100%;
		overflow: hidden;
		padding: 0px 50px;
		text-align: center;
	}
	
	.detailcontent-fx {
		margin: 20px 0px;
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
		margin: 0px 3px;
	}
	
	.share-fx>.tsina {
		background-position: 5px 128px;
	}
	
	.share-fx>.qzone {
		background-position: 0px 96px;
	}
	
	.share-fx>.cqq {
		background-position: 0px 32px;
	}
	
	.wx-qrcode {
		width: 32px;
		height: 32px;
		float: left;
	}
	
	.wx-qrcode>a {
		display: block;
		width: 32px;
		height: 32px;
		background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
		background-position: 0 65px;
	}
	
	.detailtextright {
		width: 280px;
		float: right;
	}
	
	.detailtextright>.author {
		width: 100%;
		height: 60px;
	}
	
	.detailtextright>.author>a {
		display: block;
		width: 100%;
		height: 60px;
		display: flex;
	}
	
	.detailtextright>.author>a>img {
		display: inline-block;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		margin-right: 25px;
		vertical-align: top;
	}
	
	.detailtextright>.author>a>.authorcon>h3 {
		color: #333333;
		font-weight: lighter;
		font-size: 20px;
	}
	
	.authorcon>p {
		color: #999999;
	}
	
	.authorimg {
		width: 100%;
	}
	
	.authorimg>ul {
		width: 100%;
	}
	
	.authorimg>ul>li {
		width: 33%;
		padding: 3px;
		float: left;
	}
	
	.authorimg>ul>li>a {
		display: block;
		width: 100%;
	}
	
	.authorimg>ul>li>a>img {
		width: 100%;
		height: 78PX;
	}
	
	.detailmore {
		margin: 20px 0px;
	}
	
	.detailmore>strong {
		color: #999;
		font-size: 24px;
		padding: 20px 0;
		border-bottom: #c9c9c9 1px solid;
		margin-bottom: 20px;
		display: block;
	}
	
	.waterfall {
		width: 100%;
		-moz-column-count: 3;
		/* Firefox */
		-webkit-column-count: 3;
		/* Safari 和 Chrome */
		column-count: 4;
		-moz-column-gap: 1em;
		-webkit-column-gap: 1em;
		column-gap: 1em;
		margin-top: 5px;
	}
	
	.contentimage {
		-moz-page-break-inside: avoid;
		-webkit-column-break-inside: avoid;
		break-inside: avoid;
		margin: 5px;
	}
	
	.waterfall>.contentimage>a {
		display: block;
		width: 260px;
		max-height: 464px;
		overflow: hidden;
	}
	
	.waterfall>.contentimage>a>img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 3px;
	}
	
	.waterfall>li>a {
		display: block;
		overflow: hidden;
	}
	
	.waterfall>li>a>img:hover {
		transform: scale(1.02);
		transition: 0.5s;
	}
	
	.waterfall>li>.contenttext-tltle>h2 {
		color: #666;
		font-size: 12px;
		padding: 5px;
		border-bottom: 1px solid #ccc;
	}
	
	.waterfall>li>.contenttext-tltle {
		background: #fff;
		width: 100%;
		padding: 8px;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name {
		padding: 8px 0px;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>a {
		color: #B5B5B5;
		font-size: 12px;
		text-decoration: none;
		display: inline-block;
		padding: 5px 0px;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>.share {
		float: right;
		margin-right: 10px;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>.share>a {
		background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
		background-size: 150%;
		background-repeat: no-repeat;
		display: inline-block;
		width: 32px;
		height: 31px;
		cursor: pointer;
		opacity: 0.4;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>.share>a:hover {
		opacity: 1;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(1) {
		background-position: 4px -21px;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(2) {
		background-position: 4px -46px;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(3) {
		background-position: 2px -94px;
	}
	
	.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(4) {
		background-position: 5px -69px;
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