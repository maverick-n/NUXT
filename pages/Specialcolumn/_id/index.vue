<template>
	<div id="zhuanlan">
		<header>
			<nav></nav>
			<div class="nav">
				<div class="navcontent">
					<a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun">
					</a>
					<a href="javascript:;" class="download"><img src="http://static.17getfun.com/2017s3/image/publish/index2/download2.png" alt="" /></a>
					<div>
						<ul class="clearfix">
						<li v-for="i in data">
							<a :id="i.channel.id" :href='"../../Navigation/"+i.channel.id' @click="get($event)">{{i.channel.name}}</a>
						</li>
					</ul>
					</div>
				</div>
			</div>
		</header>
		<div id="div"></div>
		<div class="content">
			<div class="contenttext">
				<div class="textleft">
					<div class="contenttextleft">
						<ul class="columns-list" id="columns">
							<li v-for="i in backData.contents" class="pc-zhuanlan">
								<a class='list-pic' :href='"../../More/content/"+i.content.id'>
									<img :src="i.content.image" :alt="i.content.title" :title="i.content.title" />
								</a>
								<div class='list-inner'>
									<div class='list-cont'>
										<h2 :title="i.content.title">
                                        <a :href='"../../More/content/"+i.content.id' class='line2'>{{i.content.title}}</a>
                                       </h2>
										<p class='line2'>{{i.content.summary}}</p>
									</div>
									<div class='list-fn'>
										<div class='fl'>
											<a :href='"../../More/user/"+i.author.id' class='user'>
												<img :src="i.author.avatar" width='22' height='22' />
												<span>{{i.author.nickName}}</span>
											</a>

											<a class='heat'>{{i.content.heatCountNew}}热度</a>
										</div>
										<div class='share share-fn fr'>
											<a title='分享到新浪微博' class='shareBox tsina' @click="wb($event)"></a>
											<a class='shareBox qzone' title='分享到QQ空间' @click="kj($event)"></a>
											<a class='shareBox cqq' title='分享给QQ好友' @click="qq($event)"></a>
											<div title='分享到微信' class='wx-qrcode'>
												<a class='weixin'></a>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="warp-zhuanlan clearfix" v-for="i in backData.contents">
								<h2 :title="i.content.title">
									<a :href='"../../More/content/"+i.content.id' class='line2'>{{i.content.title}}</a>
								</h2>
								<a :href='"../../More/content/"+i.content.id' class="warp-img">
									<img :src="item.url" alt="图片加载失败" v-for="item in i.content.images" />
								</a>
								<div class="user-info">
									<a :href='"../../More/user/"+i.author.id'>
										{{i.author.nickName}}
									</a>
									<span>{{i.content.heatCountNew}}热度</span>
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
								<a :href='"../../More/content/"+i.content.id' :title="i.content.title">
									<img :src="i.content.image" :alt="i.content.title">
									<strong>{{i.content.title}}</strong>
								</a>
							</li>
						</ul>
					</div>
					<div class="zuihosttag">
						<strong class="clearfix"><i></i>热门标签<a href="../../More/Fulltag">更多</a></strong>
						<div class="zuihosttaglist">
							<a v-for="i in backData.hotTag" :id="i.id" :href='"../../More/"+i.id'>{{i.name}}</a>
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
		<div id="gotop" @click="gotop($event)">
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		async asyncData({}) {
			let {
				data
			} = await axios.get('http://www.17getfun.com//api/channel/allChannels');
			let backData = await axios.get('http://backup.17getfun.com/discovery/channelContentsPaging?channelId=37&page=1&pageSize=30&tagSize=20');            
			return {
				data: data.data,
				backData: backData.data.data
			}
		},
		mounted() {
			this.$nextTick(function() {
				window.addEventListener('scroll', this.onScroll);
			});
			(function(doc) {
				function changeSize() {
					var size = doc.documentElement.clientWidth / 414 * 10;
					doc.querySelector('html').style.fontSize = size + 'px';
				}
				//用户缩放浏览器窗口大小时
				window.onresize = changeSize;
				changeSize();
			})(document)
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
				document.body.scrollTop = 0
			},
			get(event) {
				let target = event.target;
				if(target.id == 41) {
					target.href = '/'
				} else if(target.id == 37) {
					target.href = '37'
				}
			},
			wb(event) {
				//					let target = event.target;
				//				var shareqqstring="http://service.weibo.com/share/mobile.php?url="+'target.parentNode.parentNode.parentNode.parentNode.firstChild.href'+"&title="+target.parentNode.parentNode.parentNode.firstChild.innerHTML+"&pics="+target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;
				//				window.open(shareqqstring,'newwindow','height=800,width=800,top=100,left=600');
				let target = event.target;
				window.sharetitle = target.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.innerHTML;
				window.shareUrl = target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;
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
				var shareqqstring = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.href + "&title=" + target.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.innerHTML + "&pics=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;
				window.open(shareqqstring, 'height=450,width=620,top=200,left=600');
			},
			qq(event) {
				let target = event.target;
				var shareqqstring = "http://connect.qq.com/widget/shareqq/index.html?url=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.href + "&title=" + target.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.innerHTML + "&pics=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;
				window.open(shareqqstring, 'height=800,width=800,top=100,left=800');
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
			color: #333;
		}
		.zhuanlan {
			width: 100%;
			height: 100%;
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
		.navcontent>div{
			width: 100%;
		}
		.nav>.navcontent>div>ul {
			display: flex;
			list-style: none;
		}
		.nav>.navcontent>div>ul>li {
			padding: 10px 0px;
			margin-left: 20px;
		}
		.nav>.navcontent>div>ul>li>a {
			text-decoration: none;
			color: #000;
			font-size: 15px;
		}
		.nav>.navcontent>div>ul>li:nth-child(2)>a {
			color: #e7497a;
			font-weight: bold;
		}
		#div {
			width: 100%;
			height: 70px;
		}
		.content {
			width: 100%;
			overflow: hidden;
			margin-bottom: 100px;
			background: #f2f2f2;
			padding-top: 50px;
			padding-bottom: 100px;
		}
		.contenttext {
			width: 1110px;
			margin: 0 auto;
			display: flex;
		}
		.textleft {
			width: 820px;
			background: #FFFFFF;
		}
		.contenttextleft {
			width: 820px;
		}
		.columns-list {
			width: 100%;
			padding: 15px;
		}
		.columns-list>li {
			width: 100%;
			padding: 5px;
			height: 160px;
			border-bottom:1px solid #CCCCCC;
			margin:5px 0px;
		}
		.columns-list>li>.list-pic {
			float: left;
			margin-right: 25px;
		}
		.columns-list>li>.list-pic>img {
			display: block;
			width: 200px;
			height: 130px;
		}
		.columns-list>li>.list-inner {
			width: 550px;
			height: 135px;
			float: left;
		}
		.columns-list>li>.list-inner>.list-cont>h2 {
			max-height: 56px;
			font-size: 18px;
			font-weight: lighter;
		}
		.columns-list>li>.list-inner>.list-cont>h2>a {
			font-size: 18px;
			color: #333;
		}
		.columns-list>li>.list-inner>.list-cont {
			margin-bottom: 35px;
		}
		.columns-list>li>.list-inner>.list-cont>.line2 {
			font-size: 14px;
			color: #cbcbcb;
			line-height: 20px;
			height: 45px;
			padding: 5px 0;
			overflow: hidden;
			box-sizing: border-box;
			text-overflow: ellipsis;
		}
		.columns-list>li>.list-inner>.list-fn {
			display: flex;
			font-size: 14px;
			color: #aaa;
		}
		.columns-list>li>.list-inner>.list-fn>.fl {
			display: inline-block;
			/*width: 178px;*/
		}
		.columns-list .list-fn .user {
			color: #aaa;
			margin-right: 10px;
		}
		.columns-list>li>.list-inner>.list-fn>.fl>.user>span {
			color: #aaa;
		}
		.heat {
			color: #aaa;
		}
		.columns-list>li>.list-inner>.list-fn>.share {
			display: flex;
			width: 160px;
			margin-left: 240px;
		}
		.columns-list>li>.list-inner>.list-fn>.share>a {
			position: relative;
			display: inline-block;
			width: 32px;
			height: 32px;
			border-radius: 1px;
			cursor: pointer;
			background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
			/*border: 1px solid red;*/
			margin-left: 10px;
		}
		.columns-list>li>.list-inner>.list-fn>.share>a:nth-child(1) {
			background-position: -3px 126px;
			opacity: 0.6;
		}
		.columns-list>li>.list-inner>.list-fn>.share>a:nth-child(2) {
			background-position: -3px 93px;
			opacity: 0.6;
		}
		.columns-list>li>.list-inner>.list-fn>.share>a:nth-child(3) {
			background-position: -3px 30px;
			opacity: 0.6;
		}
		.columns-list>li>.list-inner>.list-fn>.share>a:nth-child(1):hover {
			opacity: 1;
		}
		.columns-list>li>.list-inner>.list-fn>.share>a:nth-child(2):hover {
			opacity: 1;
		}
		.columns-list>li>.list-inner>.list-fn>.share>a:nth-child(3):hover {
			opacity: 1;
		}
		.columns-list>li>.list-inner>.list-fn>.share>div {
			width: 32px;
			height: 32px;
			/*border: 1px solid red;*/
			margin-left: 10px;
		}
		.columns-list>li>.list-inner>.list-fn>.share>div>a {
			display: inline-block;
			width: 32px;
			height: 32px;
			border-radius: 1px;
			cursor: pointer;
			background-image: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
			background-position: -1px -97px;
			background-repeat: no-repeat;
			opacity: 0.6;
		}
		.columns-list>li>.list-inner>.list-fn>.share>div>a:hover {
			opacity: 1;
		}
		.columns-list>li>.list-inner>.list-fn>.fl>.user>img {
			vertical-align: top;
			margin-right: 10px;
		}
		.contenttextright {
			-webkit-flex-grow: 1;
			padding: 10px;
		}
		.contenttextright>.zuihost {
			width: 280px;
			height: 380px;
			background: #FFFFFF;
			margin-left: 20px;
			padding: 5px;
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
		   	margin: 3px;
			margin-bottom: 15px;
		}
		.contenttextright>.zuihost>.zuihostcontent>li>a {
			display: inline-block;
			width: 100%;
			height: 100%;
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
			width: 280px;
			margin-top: 30px;
			margin-left: 20px;
			background: #FFFFFF;
			padding: 10px;
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
			color: #999;
			line-height: 25px;
			display: inline;
			padding: 2px;
			cursor: pointer;
			margin: 5px 3px;
		}
		.contenttextright>.Hottopic {
			width: 280px;
			margin-top: 30px;
			margin-left: 20px;
			background: #FFFFFF;
			padding: 10px;
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
			margin: 10px 0;
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
		
	
		#gotop {
			width: 55px;
			height: 45px;
			background: rgba(0, 0, 0, .3);
			bottom: 54px;
			background-image: url('//static.17getfun.com/2017s3/image/publish/index2/dirImg.png');
			background-repeat: no-repeat;
			background-position: 11px -190px;
			transition: all .5s ease;
			cursor: pointer;
			position: fixed;
			right: 0;
			bottom: 64px;
			z-index: 1111;
		}
		.download {
			display: none;
		}
		.warp-zhuanlan{
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
		.zhuanlan {
			width: 100%;
			display: flex;
			-webkit-flex-direction: column;
			flex-direction: column;
			overflow-x: hidden;
		}
		html {
			font-size: 62.5rem;
			width: 100%;
		}
		body {
			width: 100%;
			font-size: 62.5%;
			overflow: auto;
		}
		.zhuanlan>header {
			width: 100%;
			border-bottom: 1px solid #ccc;
			z-index: 10;
			background: #fff;
		}
		header>nav {
			display: none;
		}
		header>.nav {
			width: 100%;
			padding: 1rem;
		}
		.nav>.navcontent {
			width: 100%;
			position: relative;
			overflow: hidden;
		}
		.nav>.navcontent>a {
			display: block;
			width: 10rem;
			height: 2.58rem;
		}
		.nav>.navcontent>a>img {
			display: block;
			width: 100%;
			height: 100%;
		}
		.nav>.navcontent>.download {
			display: block;
			position: absolute;
			right: 1.2rem;
			top: -0.2rem;
			width: 2.483rem;
			height: 2.372rem;
		}
		.nav>.navcontent>.download>img {
			width: 100%;
			height: 100%;
		}
		.nav>.navcontent>div{
			width: 100%;
			overflow: auto;
		}
		.nav>.navcontent>div>ul {
			width: 97.5rem;
			list-style: none;
		}
		.nav>.navcontent>div>ul>li {
			display: inline-block;
			float: left;
			margin: .5rem;
			padding: .5rem 0;
		}
		.nav>.navcontent>div>ul>li>a {
			text-decoration: none;
			color: #999;
			padding: .5rem 0px;
			margin: 5px;
			font-size: 1.8rem;
		}
		.nav>.navcontent>div>ul>li:nth-child(2)>a {
			color: #000;
			font-weight: bold;
			border-bottom: .3rem solid #000000;
		}
		#columns{
		width: 100%;
		background: #f2f2f2;
		}
		.warp-zhuanlan {
			width: 100%;
			padding: 1rem;
			margin: 5px 0px;
			background: #FFFFFF;
		}
		.warp-zhuanlan>h2 {
			width: 100%;
		}
		.warp-zhuanlan>h2>a {
			color: #000;
			font-weight: lighter;
		}
		.warp-zhuanlan>.warp-img {
			display: block;
			width: 100%;
			height: 7rem;
			overflow: hidden;
			margin: 1rem 0;
		}
		.warp-zhuanlan>.warp-img>img {
			display: block;
			width: 10.4rem;
			height: 100%;
			float: left;
			margin: 0 .2rem;
		}
		.user-info {
			width: 100%;
		}
		.user-info>a {
			color: #999;
			margin-right: 1rem;
		}
		.user-info>span {
			color: #999;
		}
		.pc-zhuanlan {
			display: none;
		}
		.contenttextright {
			display: none;
		}
		footer {
			display: none;
		}
	}
</style>