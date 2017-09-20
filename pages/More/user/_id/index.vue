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
					<img :src="backData[0].contents[0].author.avatar" />
					<p>{{backData[0].contents[0].author.nickName}}</p>
				</div>
				<ul id="contentdetail">
					<li v-for="i in backData[0].contents" :title="i.content.title" :width="i.content.imageWidth" class="contentimage">
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
				let clientHeight=document.documentElement.clientHeight;
				let scrollHeight=document.body.scrollHeight;
				if(scrolled >= 200) {
					document.getElementById("gotop").style.opacity = 1;
				}
				else {
					document.getElementById("gotop").style.opacity = 0;
				}
				if(scrollHeight-(scrolled + clientHeight)<200){
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
						if(!window.open([f, p].join(''),'mb', ['toolbar=0,status=0,resizable=1,width=620,height=450,left=', (s.width - 620) / 2, ',top=', (s.height - 450) / 2].join(''))) u.href = [f, p].join('');
					};
					if(/Firefox/.test(navigator.userAgent)) {
						setTimeout(a, 0)
					} else {
						a()
					}
				})(screen, document, encodeURIComponent);
			},
      kj(event){
      	let target = event.target;
				var shareqqstring="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+target.parentNode.parentNode.parentNode.parentNode.firstChild.href+"&title="+target.parentNode.parentNode.parentNode.firstChild.innerHTML+"&pics="+target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;	
        window.open(shareqqstring,'height=450,width=620,top=200,left=600');
      },
				qq(event){
					let target = event.target;
				var shareqqstring="http://connect.qq.com/widget/shareqq/index.html?url="+target.parentNode.parentNode.parentNode.parentNode.firstChild.href+"&title="+target.parentNode.parentNode.parentNode.firstChild.innerHTML+"&pics="+target.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.src;
				window.open(shareqqstring,'height=800,width=800,top=100,left=800');
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
	
	.user {
		width: 100%;
		height: 100%;
	}
	
	#div {
		width: 100%;
		height: 80px;
		margin-top: 30px;
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
	}
	
	.content>.contenttext {
		width: 1100px;
		margin: 0 auto;
	}
	
	.author {
		width: 100%;
		display: flex;
		margin-bottom: 50px;
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
		margin: 5px;
	}
	
	#contentdetail>.contentimage>a {
		display: block;
		width: 260px;
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
		color: #666;
		font-size: 12px;
		padding: 5px;
		border-bottom: 1px solid #ccc;
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
</style>