<template>
	 <ul class="pagination clearfix">
            <li v-show="current != 1" @click="current-- && goto(current)" ><a href="#"> < </a></li>
            <li v-for="index in pages" @click="goto(index)" :key="index">
              <a :href='index'>{{index}}</a>
            </li>
            <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="#" > > </a></li>
        </ul>
</template>
<script>
	export default{
		    data:function(){
          return{
            current:1,
            showItem:6,
            allpage:""
          }
        },
        
        mounted(){
        	let allpage=document.getElementById("page-box").attributes.data.nodeValue;
        	this.allpage=allpage;
        },
		 computed:{
          pages:function(){
                var pag = [];
                  if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                       //总页数和要显示的条数那个大就显示多少条
                       var i = Math.min(this.showItem,this.allpage);
                       while(i){
                           pag.unshift(i--);
                       }
                   }else{ //当前页数大于显示页数了
                       var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                           i = this.showItem;
                       if( middle >  (this.allpage - this.showItem)  ){
                           middle = (this.allpage - this.showItem) + 1
                       }
                       while(i--){
                           pag.push( middle++ );
                       }
                   }
                 return pag
               }
      },
      methods:{
        goto:function(index){
          if(index == this.current) return;
            this.current = index;
//         alert(target.childNodes.getAttribute("href"))
            //这里可以发送ajax请求
        }
      }
	}
</script>
<style scoped>
	  body{
      font-family:"Segoe UI";
    }
    li{
      list-style:none;
    }
    a{
      text-decoration:none;
    }
    .clearfix{
    	content:'';
    	display: block;
    	clear: both;
    }
    .pagination {
       display: inline-block;
      }
      .pagination li{
      	float: left;
		font-size: 18px;
		color: #999;
		margin: 5px;
      }
      .pagination li a{
      padding: 10px 15px;
		font-size: 18px;
		color: #999;
      }
      .pagination li a:hover{
        background: #ffd100;
		color: #000000;
      }
      .pagination li.active a{
        background: #ffd100;
		color: #000000;
      }
</style>