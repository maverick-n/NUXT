<template>
	<div class="swiper">
		 <!--<header>
      <nav></nav>
      <div class="nav">
        <div class="navcontent">
            <a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun"></nuxt-link></a>
          <ul>
            <li v-for="i in data"><a :id="i.channel.id" :href='"Navigation/"+i.channel.id'>{{i.channel.name}}</a></li>
          </ul>
        </div>
      </div>
    </header>-->
    <div>
    	{{backData}}
    </div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		async asyncData({params}){
			let {data} = await axios.get('http://www.17getfun.com//api/channel/allChannels');
			//http://backup.17getfun.com/discovery/getCurrentPosition?tagId=132977
			let backData = await axios.get('https://www.17getfun.com/api/tag/2_0/newContents?tagId=4769&size=25');
            return {data:data.data,backData:backData.data.data}
		}

//			this.$nextTick(function() {
//				window.addEventListener('scroll', this.onScroll);
//			})			 
//         //console.log(location.search);
//		},
//		methods: {
//			onScroll() {
//				let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
//				if(scrolled >= 200) {
//					document.getElementById("gotop").style.opacity = 1;
//					console.log(url)
//				} else {
//					document.getElementById("gotop").style.opacity = 0;
//				}
//			},
//			gotop() {
//				document.body.scrollTop = 0;
//			}
//			}
		}
</script>

<style scoped>
	
</style>