<template>
	<div class="user">
		<header>
			<nav></nav>
			<div class="nav">
				<div class="navcontent">
					<a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun">
					</a>
					<ul>
						<li v-for="i in data">
							<a :id="i.channel.id" :href='"../../../Navigation/"+i.channel.id' @click="get($event)">{{i.channel.name}}</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<div id="div">
		</div>
		<div class="content">
			<div class="contenttext">
				<div class="author">
					<img :src="backData.contents[0].author.avatar" />
					<p>{{backData.contents[0].author.nickName}}</p>
				</div>
				<ul id="contentdetail">
					<li v-for="i in backData.contents" :title="i.content.title" :width="i.content.imageWidth" class="contentimage">
						<a :href='"../../../More/content/"+i.content.id' :id="i.content.id">
							<img :src="i.content.image">
						</a>
						<div class="contenttext-tltle">
							<h2 :title="i.content.title">{{i.content.title}}</h2>
							<div class="content-name">
								<a :href='i.author.id' :title="i.author.nickName">{{i.author.nickName}}</a>
								<div class="share">
									<a href="javascript:;" title="分享到新浪微博" @click="wb($event)"></a>
									<a href="javascript:;" title="分享到QQ空间" @click="kj($event)"></a>
									<a href="javascript:;" title="分享到QQ好友" @click="qq($event)"></a>
									<a href="javascript:;" title="分享到微信"></a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="warp-content">
			<div class="header">
				<div class="background">
				<img :src="backData.contents[0].author.avatar" alt="" />
				</div>
				<div class="shdow">
					<div class="user-img">
						<img :src="backData.contents[0].author.avatar" alt="图片加载失败" />
						<h1>{{backData.contents[0].author.nickName}}</h1>
					</div>
				</div>
			</div>
			<div class="warp-content">
				<ul class="warp-text">
						<li v-for="i in backData.contents" class="contentimage">
						<div class="author-img"><img :src="i.author.avatar" alt="图片加载失败" />{{i.author.nickName}}</div>
                        <a :href='"../../../More/content/"+i.content.id' class="authorimg-list">
                        	<img :src="item.url" alt="" v-for="item in i.content.images"/>
                        </a>
                        <p class="author-title"><a href="javascript:;">{{i.content.title}}</a></p>
                        <div class="hot-img">
                        	<p><i></i>{{i.content.heatCountNew}}热度</p>
                        </div>
					</li>
				</ul>
			</div>
		</div>
		<div id="gotop" @click="gotop"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		async asyncData({
			params
		}) {
			let {
				data
			} = await axios.get('http://www.17getfun.com//api/channel/allChannels');
			let backData = await axios.get(`http://backup.17getfun.com/api/user/personal/published?userId=${params.id}&size=20`);            
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
				let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				let clientHeight = document.documentElement.clientHeight;
				let scrollHeight = document.body.scrollHeight;
				if(scrolled >= 200) {
					document.getElementById("gotop").style.opacity = 1;
				} else {
					document.getElementById("gotop").style.opacity = 0;
				}
				if(scrollHeight - (scrolled + clientHeight) < 200) {
					axios.get(`http://www.17getfun.com//api/channel/allChannels`)
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
		.user {
			width: 100%;
			height: 100%;
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
		
		.content {
			width: 100%;
		    background: #f2f2f2;
		    padding-top:20px;
		}
		.content>.contenttext {
			width: 1100px;
			margin: 0 auto;
		}
		.author {
			width: 100%;
			display: flex;
			margin-bottom: 30px;
			background: #FFFFFF;
			padding: 20px;
		}
		.author>img {
			display: block;
			width: 60px;
			height: 60px;
			vertical-align: middle;
			margin-right: 25px;
		}
		.author>p {
			font-size: 24px;
			font-weight: lighter;
			color: #333333;
		}
		#contentdetail {
			width: 100%;
			-moz-column-count: 4;
			/* Firefox */
			-webkit-column-count: 4;
			/* Safari 和 Chrome */
			column-count: 4;
			-moz-column-gap: 1em;
			-webkit-column-gap: 1em;
			column-gap: 1em;
			margin-top: 5px;
		}
		#contentdetail>li {
			-moz-page-break-inside: avoid;
			-webkit-column-break-inside: avoid;
			break-inside: avoid;
			width: 260px;
			margin: 15px 10px;
		}
		#contentdetail>.contentimage>a {
			display: block;
			width: 100%;
			max-height: 464px;
			overflow: hidden;
		}
		#contentdetail>.contentimage>a>img {
			display: block;
			width: 100%;
			height: 100%;
		}
		#contentdetail>li>a {
			display: block;
			overflow: hidden;
		}
		#contentdetail>li>a>img:hover {
			transform: scale(1.02);
			transition: 0.5s;
		}
		#contentdetail>li>.contenttext-tltle>h2 {
			width: 100%;
			height: 2.5rem;
			color: #666;
			font-size: 12px;
			padding: 5px;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
			
		}
		#contentdetail>li>.contenttext-tltle {
			background: #fff;
			width: 100%;
			padding: 8px;
		}
		#contentdetail>li>.contenttext-tltle>.content-name {
			padding: 8px 0px;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>a {
			color: #B5B5B5;
			font-size: 12px;
			text-decoration: none;
			display: inline-block;
			padding: 5px 0px;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>.share {
			float: right;
			margin-right: 10px;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>.share>a {
			background: url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
			background-size: 150%;
			background-repeat: no-repeat;
			display: inline-block;
			width: 32px;
			height: 31px;
			cursor: pointer;
			opacity: 0.4;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>.share>a:hover {
			opacity: 1;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>.share>a:nth-child(1) {
			background-position: 4px -21px;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>.share>a:nth-child(2) {
			background-position: 4px -46px;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>.share>a:nth-child(3) {
			background-position: 2px -94px;
		}
		#contentdetail>li>.contenttext-tltle>.content-name>.share>a:nth-child(4) {
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
		.warp-content{
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
		header{
			display: none;
		}
		.user {
			width: 100%;
			height: 100%;
		}
		.warp-content{
			width: 100%;
			height: 100%;
		}
		.warp-content>.header{
			width: 100%;
			height: 13.5rem;
			position: relative;
		}
		.background{
			width: 100%;
			height: 100%;
			position: absolute;
			overflow: hidden;
			text-align: center;
			border: none;
		}
		.background>img{
			width: 120%;
			height:220%;
		    margin-top: -30%;
		    margin-left: -15%;
			filter: blur(10px);
			border: none;
		}
		.shdow{
			position: absolute;
			width: 100%;
			height: 100%;
			background-color:rgba(0,0,0,0.5);
		}
		.user-img{
			width: 90%;
			height: 80%;
			margin: 5%;
			text-align: center;
		}
		.user-img>img{
			width:4rem;
			height:4rem;
			border-radius: 50%;
		}
		.user-img>h1{
			color: white;
			margin:1.5rem 0;
			font-weight: 100;
		}
		.warp-content{
			width: 100%;
		}
		.warp-content>.warp-text{
			width: 100%;
		}
		.contentimage{
			width: 100%;
		}
		.contentimage>.author-img{
			padding:1rem;
			width: 100%;
			font-weight: 100;
			font-size: 1rem;
		}
		.contentimage>.author-img>img{
			width: 2.2rem;
			height: 2.2rem;
			border-radius: 50%;
			margin-right:.5rem ;
		}
		.authorimg-list{
			display: block;
			width: 100%;
			
			overflow: hidden;
		}
		.authorimg-list>img{
			width: 32.5%;
		  height: 8rem;
			float: left;
			margin: .1% .3%;
		}
		.author-title{
			width: 100%;
			padding: .8rem;
		}
		.author-title>a{
			color: #333333;
            font-size: 1.1rem;
		}
		.hot-img{
			width: 100%;
		}
		.hot-img>p{
			padding-left: 1rem;
			display: inline-block;
			color: #999999;
		}
		.hot-img>p>i{
			display:inline-block;
			width: 1rem;
			height: 1rem;
			background: url("//static.17getfun.com/2017s3/image/publish/h5/2.0/hot.png") no-repeat;
			background-size:100% ;
			margin-right:.5rem ;
		}
		.contentimage{
			margin: 1rem 0;
		}
		.content{
			display: none;
		}
		#div {
			display: none;
		}
		#gotop{
			display: none;
		}
		}
</style>