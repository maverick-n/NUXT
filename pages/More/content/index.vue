<template>
<div class="detail">
    <header>
      <nav></nav>
      <div class="nav">
        <div class="navcontent">
            <a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun"></nuxt-link></a>
          <ul>
            <li v-for="i in data"><a :id="i.channel.id" :href='"Navigation/"+i.channel.id'>{{i.channel.name}}</a></li>
          </ul>
        </div>
      </div>
    </header>
    <div id="div"></div>
    <div class="content">
    {{backData}}
    </div>
</div>
</template>

<script>
import axios from 'axios'
	export default {
		async asyncData({}){
			let {data} = await axios.get('http://www.17getfun.com//api/channel/allChannels');
			let backData = await axios.get('http://backup.17getfun.com/discovery/contentDetail?size=20&id=2554101');
            return {data:data.data,backData:backData.data.data}
		}
		}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
  }
  .clearfix{
    content:"";
    display:block;
    clear:both;
  }
  .detail{
    width:100%;
    height:100%;
  }
  #div{
    width:100%;
    height:80px;
  }
  header{
    width:100%;
    border-bottom:1px solid #ccc;
    z-index:10;
    background:#fff;
    position: fixed;
    top: 0;
    left:0;
  }
  header>nav{
    width:100%;
    height:2px;
    background:-webkit-linear-gradient(left,#ec66e9,#efd655);
  }
  .nav{
    width:100%;
  }
  .nav>.navcontent{
    padding:15px 0px;
    width:1110px;
    margin:0 auto;
    display:flex;
  }
  .nav>.navcontent>a>img{
    display:block;
    width:135px;
    height:33.5px;
    margin-right:250px;
  }
  .nav>.navcontent>ul{
    display:flex;
    list-style:none;
  }
  .nav>.navcontent>ul>li{
    padding:10px 0px;
    margin-left:20px;
  }
  .nav>.navcontent>ul>li>a{
    text-decoration:none;
    color:#000;
    font-size:15px;
  }
  .nav>.navcontent>ul>li:first-child>a{
    color:#e7497a;
    font-weight:bold;
  }
  .content{
  color: red;
  width: 100%;
  }
</style>