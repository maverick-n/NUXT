<template>
	<div id="tag">
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
		<div class="content">
			<div class="hosttaglist">
				<a v-for="i in backData" :id="i.id" :href='i.id'>{{i.name}}</a>
			</div>
		</div>
		<div id="gotop" @click="gotop">
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
			let backData = await axios.get('http://backup.17getfun.com/discovery/allKeys');            
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
				document.body.scrollTop = 0
			},
			get(event) {
				let target = event.target;
				if(target.id == 41) {
					target.href = '/'
				} else if(target.id == 37) {
					target.href = '.././Specialcolumn/37'
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
	
	.tag {
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
		overflow: hidden;
		margin-top: 30px;
	}
	
	.hosttaglist {
		width: 1100px;
		margin: 80px auto 0;
	}
	
	.hosttaglist>a {
		font-size: 14px;
		display: inline-block;
		padding: 0 17px;
		margin-bottom: 24px;
		color: #6b6b6b;
		border-right: 1px solid #6d6d6d;
		cursor: pointer;
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
</style>