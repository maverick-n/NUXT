<template>
	<div class="wrap">
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
					<div class="contenttextleft clearfix">
						<ul class="swiper">
							<li v-for="i in backData.ads">
								<a :href='i.protocol'><img :src="i.imgUrl" alt=""></a>
							</li>
						</ul>
						<div id="div2"></div>
						<ul class="waterfall">
							<li v-for="i in backData.contents" :title="i.content.title" :width="i.content.imageWidth" class="contentimage">
								<div class="user-info">
									<a :href='"../../More/user/"+i.author.id' :title="i.author.nickName">
										<img :src="i.author.avatar" alt="" />
									</a>
									<span>{{i.author.nickName}}</span>
								</div>
								<a :href='"../../More/content/"+i.content.id' :id="i.content.id">
									<img :src="i.content.image">
								</a>
								<div class="contenttext-tltle">
									<h2 :title="i.content.title">{{i.content.title}}</h2>
									<div class="content-name">
										<a :href='"More/user/"+i.author.id' :title="i.author.nickName">{{i.author.nickName}}</a>
										<div class="share">
											<a title="分享到新浪微博" @click="wb($event)"></a>
											<a title="分享到QQ空间" @click="kj($event)"></a>
											<a title="分享到QQ好友" @click="qq($event)"></a>
											<a title="分享到微信"></a>
										</div>
									</div>
								</div>
								<div class="wrap-contenttext-title">
									<p>
										<a :href='"../../More/content/"+i.content.id' :id="i.content.id">{{i.content.title}}</a>
									</p>
									<div class="thumbs-up clearfix">
										<div class="hots"><i class="hot-icon"></i>{{i.content.heatCountNew}}热度</div>
										<div class="news">
											<a :href='"../../More/content/"+i.content.id' :id="i.content.id"></a>
											<a :href='"../../More/content/"+i.content.id' :id="i.content.id"></a>
											<a :href='"../../More/content/"+i.content.id' :id="i.content.id"></a>
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
								<a :href='"../../More/content/"+i.content.id' :title="i.content.title">
									<img :src="i.content.image" :alt="i.content.title">
									<strong>{{i.content.title}}</strong>
								</a>
							</li>
						</ul>
					</div>
					<div class="zuihosttag">
						<strong class="clearfix"><i></i>热门标签<a href="/More/Fulltag">更多</a></strong>
						<div class="zuihosttaglist">
							<a v-for="i in backData.hotTag" :href='"../../More/"+i.id'>{{i.name}}</a>
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
			<div id="page-box" :data='backData.totalPage'>
				<Npage></Npage>
			</div>
		</div>
		<div id="gotop" @click="gotop">
		</div>

	</div>
</template>

<script>
	import axios from 'axios';
	import Npage from '~components/Npage'
	export default {
		data() {
			return {
				current: 1,
				showItem: 5,
				allpage: 10
			}
		},
		async asyncData({
			params
		}) {
			let {
				data
			} = await axios.get(`http://www.17getfun.com//api/channel/allChannels`);
			var backData = await axios.get(`http://backup.17getfun.com/discovery/channelContentsPaging?channelId=${params.id}&page=1&pageSize=30&tagSize=20`);            
			return {
				data: data.data,
				backData: backData.data.data
			}
		},
		components: {
			Npage
		},
		computed: {
			pages() {
				var pag = [];
				if(this.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
					//总页数和要显示的条数那个大就显示多少条
					var i = Math.min(this.showItem, this.allpage);
					while(i) {
						pag.unshift(i--);
					}
				} else { //当前页数大于显示页数了
					var middle = this.current - Math.floor(this.showItem / 2), //从哪里开始
						i = this.showItem;
					if(middle > (this.allpage - this.showItem)) {
						middle = (this.allpage - this.showItem) + 1
					}
					while(i--) {
						pag.push(middle++);
					}
				}
				return pag
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
			})(document);
			let cli = window.screen.width;
			let nav = (window.location.href).substr(33, 2);
			if(cli >= 1024) {
				document.getElementById(nav).style.color = "#e7497a";
				document.getElementById(nav).style.fontWeight = "bold";
			} else {
				document.getElementById(nav).style.color = "#000"
				document.getElementById(nav).style.fontWeight = "bold";
				document.getElementById(nav).style.borderTop = "2px soild #000"
			}
//			console.log(document.getElementsByClassName("swiper")[0].style)
//			console.log(document.getElementById("div2"))
			if(document.getElementsByClassName("swiper")[0].innerHTML == "") {
				document.getElementsByClassName("swiper")[0].style.height = 0;
				document.getElementById("div2").style.height=0;
			} else {
				document.getElementsByClassName("swiper")[0].height = 220;
//				document.getElementById("div2")[0].style.height=14rem;
			}
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
			get(event) {
				let target = event.target;
				if(target.id == 41) {
					target.href = '/'
				} else if(target.id == 37) {
					target.href = '../../Specialcolumn/37'
				}
			},
			wb(event) {
				let target = event.target;
				window.sharetitle = target.parentNode.parentNode.parentNode.firstChild.innerHTML;
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
				var shareqqstring = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.href + "&title=" + target.parentNode.parentNode.parentNode.firstChild.innerHTML + "&pics=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;
				window.open(shareqqstring, 'height=450,width=620,top=200,left=600');
			},
			qq(event) {
				let target = event.target;
				var shareqqstring = "http://connect.qq.com/widget/shareqq/index.html?url=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.href + "&title=" + target.parentNode.parentNode.parentNode.firstChild.innerHTML + "&pics=" + target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;
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
		}
		.wrap {
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
		.download {
			display: none;
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
		.content {
			width: 100%;
			background: #f2f2f2;
			padding-top: 10px;
			padding-bottom: 100px;
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
			margin-left: 10px;
		}
		.contenttextleft>.waterfall {
			width: 100%;
			-moz-column-count: 3;
			/* Firefox */
			-webkit-column-count: 3;
			/* Safari 和 Chrome */
			column-count: 3;
			-moz-column-gap: 1em;
			-webkit-column-gap: 1em;
			column-gap: 1em;
		}
		.contentimage {
			-moz-page-break-inside: avoid;
			-webkit-column-break-inside: avoid;
			break-inside: avoid;
			margin:15px 10px;
			background: #FFFFFF;
			width: 260px;
		}
		.contenttextleft>.waterfall>.contentimage>a {
			display: block;
			width:100%;
			max-height: 464px;
			overflow: hidden;
		}
		.contenttextleft>.waterfall>.contentimage>a>img {
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 3px;
		}
		.contenttextleft>.swiper {
			width: 820px;
			height: 300px;
			display: block;
			position: relative;
			margin-bottom: 10px;
		}
		.contenttextleft>.swiper>li {
			width: 100%;
			position: absolute;
		}
		.contenttextleft>.swiper>li>a>img {
			width: 820px;
			height: 300px;
		}
		.contenttextleft>.waterfall>li>a {
			display: block;
			overflow: hidden;
		}
		.contenttextleft>.waterfall>li>a>img:hover {
			transform: scale(1.02);
			transition: 0.5s;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>h2 {
			color: #666;
			font-size: 12px;
			padding: 5px;
			border-bottom: 1px solid #ccc;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle {
			background: #fff;
			width: 100%;
			padding: 8px;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name {
			padding: 8px 0px;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>a {
			color: #B5B5B5;
			font-size: 12px;
			text-decoration: none;
			display: inline-block;
			padding: 5px 0px;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share {
			float: right;
			margin-right: 10px;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a {
			background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
			background-size: 150%;
			background-repeat: no-repeat;
			display: inline-block;
			width: 32px;
			height: 31px;
			cursor: pointer;
			opacity: 0.4;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:hover {
			opacity: 1;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(1) {
			background-position: 4px -21px;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(2) {
			background-position: 4px -46px;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(3) {
			background-position: 2px -94px;
		}
		.contenttextleft>.waterfall>li>.contenttext-tltle>.content-name>.share>a:nth-child(4) {
			background-position: 5px -69px;
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
		#page-box {
			width: 1100px;
			height: 100px;
			line-height: 100px;
			margin: 0 auto;
			text-align: center;
		}
		#div2 {
			display: none;
		}
		.wrap-contenttext-title{
			display: none;
		}
		.user-info{
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
		.wrap {
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
			overflow: hidden;
		}
		.wrap>header {
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
			font-size: 1.6rem;
		}
		.content {
			width: 100%;
		}
		.content>.contenttext {
			width: 100%;
		}
		.content>.contenttext>.textleft {
			width: 100%;
		}
		.content>.contenttext>.textleft>.contenttextleft {
			width: 100%;
		}
		.content>.contenttext>.textleft>.contenttextleft>.swiper {
			position: relative;
			width: 100%;
		}
		.contenttextleft>.swiper>li {
			width: 100%;
			display: inline-block;
			position: absolute;
		}
		.contenttextleft>.swiper>li>a {
			display: inline-block;
			width: 100%;
		}
		.contenttextleft>.swiper>li>a>img {
			display: block;
			width: 100%;
			height: 14rem;
		}
		.waterfall {
			width: 100%;
		}
		.contentimage {
			width: 100%;
			padding: 2rem 0rem;
			position: relative;
			margin: .5rem 0;
		}
		.contentimage>a {
			display: block;
			width: 100%;
		}
		.contentimage>a>img {
			width: 100%;
		}
		.user-info {
			width: 100%;
			padding: .5rem 1rem;
		}
		.user-info>a {
			display: inline-block;
			width: 3.5rem;
			height: 3.5rem;
			margin-right: 1rem;
		}
		.user-info>a>img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		.user-info>span {
			font-size: 1.6rem;
			padding: .3rem;
			vertical-align: middle;
		}
		.wrap-contenttext-title {
			width: 100%;
			padding: 1rem;
		}
		.wrap-contenttext-title>p {
			width: 100%;
			padding: .8rem 0rem;
		}
		.wrap-contenttext-title>p>a {
			color: #333;
			font-size: 1.6rem;
		}
		.wrap-contenttext-title>.thumbs-up>.hots {
			float: left;
			color: #999;
		}
		.hot-icon {
			display: inline-block;
			width: 2.5rem;
			height: 2.5rem;
			background: url("//static.17getfun.com/2017s3/image/publish/h5/2.0/hot.png") no-repeat;
			background-position: center;
			background-size: 50%;
			vertical-align: middle;
			margin-right: .5rem;
		}
		.news {
			float: right;
			display: flex;
		}
		.news>a {
			display: block;
			width: 3rem;
			height: 3rem;
			background: url("//static.17getfun.com/2017s3/image/publish/h5/2.0/fun-ico.png") no-repeat;
			background-size: 500%;
			margin: 0px 1rem;
		}
		.news>a:first-child {
			background-position: 2px 2px;
		}
		.news>a:nth-child(2) {
			background-position: -61px 2px;
		}
		.news>a:nth-child(3) {
			background-position: -132px 2px;
		}
		#div2 {
			width: 100%;
			height: 14rem;
		}
		.contenttext-tltle {
			display: none;
		}
		.contenttextright {
			display: none;
		}
		#page-box {
			display: none;
		}
	}
</style>