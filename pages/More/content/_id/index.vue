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
		<div class="content" :id="backData.data.content.content.id" :localion="backData.position">
			<div class="detailcontent">
				<div class="detailtext clearfix">
					<div class="text-left">
						<h1 :title="backData.data.content.content.title">{{backData.data.content.content.title}}</h1>
						<div class="detailtextleft" v-html="backData.data.content.content.detail" v-if='show'>
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
							<a :href='"../../../More/user/"+backData.data.content.author.id' :id="backData.data.content.author.id" class="authortext">
								<img :src="backData.data.content.author.avatar" alt="" />
								<div class="authorcon">
									<h3 :title="backData.data.content.author.nickName">{{backData.data.content.author.nickName}}</h3>
									<p>{{time}}</p>
								</div>
							</a>
							<div class="authorimg">
								<ul class="clearfix">
									<li v-for="i in authorcon" :title="i.content.title">
										<a :href="i.content.id"><img :src="i.content.image" :width="i.content.imageWidth" :height="i.content.imageHeight" /></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="zuihosttag">
						<strong class="clearfix"><i></i>热门标签<a href="/More/Fulltag">更多</a></strong>
						<div class="zuihosttaglist">
							<a v-for="i in backData.data.hotTag" :id="i.id" :href='"../../../More/"+i.id'>{{i.name}}</a>
						</div>
					</div>
				</div>
				<div class="tab">
					<ul class="tabnav" v-on:click="val($event)">
						<li>今日爆点</li>
						<li>娱乐动图</li>
						<li>图文咨询</li>
						<li>达人榜</li>
					</ul>
					<div class="tab-box">
					   <ul class="tabcontent1">
					   <li v-for="item in tab.hotContent"><a :href="item.content.id" :title="item.content.title">{{item.content.title}}</a></li>
					   </ul>
					    <ul class="tabcontent2">
					   <li v-for="item in tab.albumContent"><a :href="item.content.id" :title="item.content.title">{{item.content.title}}</a></li>
					   </ul>
					    <ul class="tabcontent3">
					   <li v-for="item in tab.articleContent"><a :href="item.content.id" :title="item.content.title">{{item.content.title}}</a></li>
					   </ul>
					     <ul class="tabcontent4">
					   <li v-for="item in tab.rankingItems"><a :href="item.id" :title="item.nickName">{{item.nickName}}</a></li>
					   </ul>
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

		<div class="warp-content">
			<div class="user-text">
				<a :href='"../../../More/user/"+backData.data.content.author.id' :id="backData.data.content.author.id" class="authortext clearfix">
					<img :src="backData.data.content.author.avatar" alt="" />
					<div class="authorcon">
						<h3 :title="backData.data.content.author.nickName">{{backData.data.content.author.nickName}}</h3>
						<p>{{time}}</p>
					</div>
				</a>
			</div>
			<div id="div2"></div>
			<div class="text">
				<h2 :title="backData.data.content.content.title" class="more-text" v-if="show" style="color:#000000;font-weight: bold;font-size: 1.2rem;">{{backData.data.content.content.title}}</h2>
				<div class="detailtextleft" v-html="detail" v-if='show'>
				</div>
				<div class="img-warp" v-if="show2">
					<img :src="backData.data.content.content.image" :width="backData.data.content.content.imageWidth" :height="backData.data.content.content.imageHeight" :gif="backData.data.content.content.git" />
				</div>
				<h2 :title="backData.data.content.content.title" v-if="show2">{{backData.data.content.content.title}}</h2>
				<div class="heat"><i class="hotcount"></i>{{backData.data.content.content.heatCountNew}}热度</div>
			</div>
			<div class="moreActive" v-if="show2">
				<h1>精彩瞬间</h1>
				<div class="morecontent">
					<a :href="backData.data.relatedContents[0].content.id"><img :src="backData.data.relatedContents[0].content.image" /></a>
				</div>
			</div>
			<div class="explosion-point" v-if="show">
				<h1>今日爆点</h1>
				<div class="pointcontent">
					<a :href="i.content.id" v-for="i in backData.data.relatedContents">
						<img :src="i.content.image" />
						<h2>{{i.content.title}}</h2>
					</a>
				</div>
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
				data: ""
			}
		},
		async asyncData({
			params
		}) {
			let {
				data
			} = await axios.get(`http://www.17getfun.com//api/channel/allChannels`);
			let backData = await axios.get(`http://backup.17getfun.com/discovery/contentDetail?size=20&id=${params.id}`);
			let tab=await axios.get(`http://www.17getfun.com/discovery/getDiscoveryContent?contentId=${params.id}`)  
			let time = (backData.data.currentTime - backData.data.data.content.content.publishTime) / 1000;
			if(time < 3600) {
				time = Math.floor(time / 60) + '分钟前'
			} else if(time >= 3600 && time < 86400) {
				time = Math.floor(time / 3600) + '小时前'
			} else if(time >= 86400) {
				time = Math.floor(time / 86400) + '天前'
			}
//			console.log(tab.data.data.hotContent)    
			return {
				data: data.data,
				backData: backData.data,
				detail: backData.data.data.content.content.detail,
				time: time,
				tab:tab.data.data
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
				this.authorcon = res.data.dataList.contents
			})
			let cli = window.screen.width;
			if(cli >= 1024) {
				if(html.valueOf()[0].innerHTML == '') {
					this.show = false
					this.show2 = true
				} else {
					html[0].innerHTML = html[0].innerHTML.replace(/data-src/g, "src")
					html[0].innerHTML = html[0].innerHTML.replace(/data-gif/g, "gif")
					this.show2 = false
				}
			} else {
				if(html.valueOf()[0].innerHTML == '') {
					this.show = false;
					this.show2 = true;
				} else {
					html[0].innerHTML = html[0].innerHTML.replace(/data-src/g, "src");
					html[0].innerHTML = html[0].innerHTML.replace(/data-gif/g, "gif");
					//					document.getElementsByClassName("detailtextleft")[1].style.color="red"
					this.show2 = false;
					console.log(document.getElementsByClassName("detailtextleft")[0].innerHTML)
				}
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
				if(scrolled >= 200) {
					document.getElementById("gotop").style.opacity = 1;
				} else {
					document.getElementById("gotop").style.opacity = 0;
				}
				if(scrollHeight - (scrolled + clientHeight) < 200) {
					let id = document.getElementsByClassName("content")[0].id;
					let Location = document.getElementsByClassName("content")[0].attributes[1].nodeValue;
					axios.get("http://localhost:5000/content", {
						params: {
							id: id,
							position: Location
						}
					}).then((res) => {
						this.data = res
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
			},
			val(event){
			console.log()
		    document.getElementsByClassName("tabnav")[0].children[0].style.color="#333333"
		    document.getElementsByClassName("tabnav")[0].children[1].style.color="#333333"
		    document.getElementsByClassName("tabnav")[0].children[2].style.color="#333333"
		    document.getElementsByClassName("tabnav")[0].children[3].style.color="#333333"
		    document.getElementsByClassName("tabnav")[0].children[0].style.borderBottom="none"
		    document.getElementsByClassName("tabnav")[0].children[1].style.borderBottom="none"
		    document.getElementsByClassName("tabnav")[0].children[2].style.borderBottom="none"
		    document.getElementsByClassName("tabnav")[0].children[3].style.borderBottom="none"
			 event.target.style.color="#e7497a"
			 event.target.style.fontWeight="bold"
			 event.target.style.borderBottom="2px soild red"
			 if(event.target.innerHTML=="今日爆点"){
			 document.getElementsByClassName("tabcontent1")[0].style.display="block";
			 document.getElementsByClassName("tabcontent2")[0].style.display="none";
			 document.getElementsByClassName("tabcontent3")[0].style.display="none";
			 document.getElementsByClassName("tabcontent4")[0].style.display="none";
			 }else if(event.target.innerHTML=="娱乐动图"){
			  document.getElementsByClassName("tabcontent1")[0].style.display="none";
			 document.getElementsByClassName("tabcontent2")[0].style.display="block";
			 document.getElementsByClassName("tabcontent3")[0].style.display="none";
			 document.getElementsByClassName("tabcontent4")[0].style.display="none";
			 }else if(event.target.innerHTML=="图文资讯"){
			   document.getElementsByClassName("tabcontent1")[0].style.display="none";
			 document.getElementsByClassName("tabcontent2")[0].style.display="none";
			 document.getElementsByClassName("tabcontent3")[0].style.display="block";
			 document.getElementsByClassName("tabcontent4")[0].style.display="none";
			 }else if(event.target.innerHTML=="达人榜"){
			    document.getElementsByClassName("tabcontent1")[0].style.display="none";
			 document.getElementsByClassName("tabcontent2")[0].style.display="none";
			 document.getElementsByClassName("tabcontent3")[0].style.display="none";
			 document.getElementsByClassName("tabcontent4")[0].style.display="block";
			 }
			}
		}
	}
</script>

<style scoped>
	.clearfix {
		content: "";
		display: block;
		clear: both;
	}
	
	@media(min-width:1024px) {
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			list-style: none;
			text-decoration: none;
		}
		.detail {
			width: 100%;
		}
		#div {
			width: 100%;
			height: 70px;
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
			background: #f2f2f2;
			padding-top: 20px;
			padding-bottom: 100px;
		}
		.detailcontent {
			width: 1110px;
			margin: 0 auto;
		}
		.text-left {
			width: 800px;
			float: left;
			background: #FFFFFF;
			padding: 15px;
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
		.detailtextleft>p {
			background: red;
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
			margin-left: 20px;
			padding: 10px;
			background: #FFFFFF;
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
			width: 80%;
			color: #333333;
			font-weight: lighter;
			font-size: 18px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.authorcon>p {
			color: #999999;
		}
		.authorimg {
			width: 100%;
			padding: 5px;
		}
		.authorimg>ul {
			width: 100%;
		}
		.authorimg>ul>li {
			width: 33%;
			height: 78px;
			padding: 3px;
			float: left;
		}
		.authorimg>ul>li>a {
			display: block;
			width: 100%;
			height: 100%;
		}
		.authorimg>ul>li>a>img {
			width: 100%;
			height: 100%;
		}
		.zuihosttag {
			width: 280px;
			margin-top: 30px;
			margin-left: 20px;
			padding: 10px;
			margin-bottom: 20px;
			float: right;
			background: #FFFFFF;
		}
		.zuihosttag>strong {
			font-size: 14px;
			margin-bottom: 5px;
			vertical-align: top;
		}
		.zuihosttag>strong>i {
			display: inline-block;
			width: 2px;
			height: 14px;
			background: #FF6250;
			margin-right: 3px;
		}
		.zuihosttag>strong>a {
			float: right;
			color: #666;
			font-size: 14px;
		}
		.zuihosttag>.zuihosttaglist>a {
			font-size: 14px;
			color: #999;
			line-height: 25px;
			display: inline;
			padding: 2px;
			cursor: pointer;
			margin: 5px 3px;
		}
		.detailmore {
			width: 800px;
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
		.tab {
			width: 280px;
			margin-top: 30px;
			margin-left: 20px;
			margin-bottom: 20px;
			float: right;
			background: #FFFFFF;
		}
		.tab>ul {
			width: 100%;
			height: 40px;
			border-bottom: 1px solid #CCCCCC;
		}
		.tab>ul>li {
			float: left;
			padding: 10px 6px;
			cursor: pointer;
		}
		.tab>ul>li:first-child {
			color: #e7497a;
			border-bottom: 2px solid #e7497a;
		}
		.tab-box{
		 width: 280px;
		 height: 320px;
		 overflow: hidden;
		}
		.tabcontent1{
	    width: 100%;
	    height: 100%;
	    padding: 3px 5px;
		}
		.tabcontent1>li{
		width: 100%;
		padding: 5px;
		}
		.tabcontent1>li>a{
		display: block;
		width: 100%;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		}
		.tabcontent1>li>a:hover{
	     color:#e7497a;
		}
		.tabcontent2{
	    width: 100%;
	    height: 100%;
	    padding: 3px 5px;
        display: none;
		}
		.tabcontent2>li{
		width: 100%;
		padding: 5px;
		}
		.tabcontent2>li>a{
		display: block;
		width: 100%;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		}
		.tabcontent2>li>a:hover{
	     color:#e7497a;
		}
		.tabcontent3{
	    width: 100%;
	    height: 100%;
	    padding: 3px 5px;
        display: none;
		}
		.tabcontent3>li{
		width: 100%;
		padding: 5px;
		}
		.tabcontent3>li>a{
		display: block;
		width: 100%;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		}
		.tabcontent3>li>a:hover{
	     color:#e7497a;
		}
		.tabcontent4{
	    width: 100%;
	    height: 100%;
	    padding: 3px 5px;
	    display: none;
		}
		.tabcontent4>li{
		width: 100%;
		padding: 5px;
		}
		.tabcontent4>li>a{
		display: block;
		width: 100%;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		}
		.tabcontent4>li>a:hover{
	     color:#e7497a;
		}
		.waterfall {
			width: 800px;
			-moz-column-count: 3;
			/* Firefox */
			-webkit-column-count: 3;
			/* Safari 和 Chrome */
			column-count: 3;
			-moz-column-gap: 1em;
			-webkit-column-gap: 1em;
			column-gap: 1em;
			margin-top: 5px;
			margin-bottom: 200px;
		}
		.contentimage {
			-moz-page-break-inside: avoid;
			-webkit-column-break-inside: avoid;
			break-inside: avoid;
			margin: 15px 10px;
			width: 260px;
		}
		.waterfall>.contentimage>a {
			display: block;
			width: 100%;
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
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
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
		}
		.waterfall>li>.contenttext-tltle>.content-name>.share {
			float: right;
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
		.warp-content {
			display: none;
		}
	}
	
	@media(max-width:960px) {
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			list-style: none;
			text-decoration: none;
		}
		.detail {
			width: 100%;
		}
		.warp-content {
			width: 100%;
		}
		#div2 {
			width: 100%;
			height: 3rem;
		}
		.user-text>a {
			display: block;
			width: 100%;
			padding: .7rem;
		}
		.user-text>a>img {
			display: inline-block;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			float: left;
			margin-right: 1rem;
		}
		.user-text>a>.authorcon {
			float: left;
		}
		.user-text>a>.authorcon>h3 {
			color: #333;
		}
		.user-text>a>.authorcon>p {
			color: #999;
		}
		.text {
			width: 100%;
		}
		.text>h2 {
			padding: 1rem;
			color: #333;
			font-weight: lighter;
			font-size: 1.2rem;
		}
		.img-warp {
			width: 100%;
		}
		.img-warp>img {
			width: 100%;
			height: 20rem;
		}
		.heat {
			width: 100%;
			padding: 0 .8rem;
			color: #999;
			margin-bottom: 1rem;
		}
		.heat>i {
			display: inline-block;
			width: 1.5rem;
			height: 1.5rem;
			background: url("//static.17getfun.com/2017s3/image/publish/h5/2.0/hot.png") no-repeat;
			background-size: 80%;
			background-position: center;
			margin-right: .5rem;
		}
		.moreActive {
			width: 100%;
			margin-left: .8rem;
		}
		.moreActive>h1 {
			display: inline-block;
			font-size: 1rem;
			border-bottom: 3px solid orange;
		}
		.morecontent>a {
			display: inline-block;
			width: 8rem;
			height: 8rem;
			padding: .8rem 0;
		}
		.morecontent>a>img {
			display: block;
			width: 100%;
			height: 100%;
		}
		.explosion-point {
			width: 100%;
			margin-left: .8rem;
		}
		.explosion-point>h1 {
			display: inline-block;
			font-size: 1rem;
			border-bottom: 3px solid orange;
		}
		.pointcontent {
			width: 100%;
		}
		.pointcontent>a {
			display: inline-block;
			width: 48%;
			height: 10rem;
			padding: .8rem .4rem;
		}
		.pointcontent>a>img {
			display: block;
			width: 100%;
			height: 100%;
		}
		.pointcontent>a>h2 {
			color: #333333;
			width: 100%;
			height: 2.8rem;
			font-weight: lighter;
			font-size: 1rem;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.text {
			width: 100%;
		}
		#div {
			display: none;
		}
		header {
			display: none;
		}
		.content {
			display: none;
		}
	}
</style>