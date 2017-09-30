<template>
	<div class="map">
		<header>
			<nav></nav>
			<div class="nav">
				<div class="navcontent">
					<a href="/"><img src="//static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun">
					</a>
					<a href="../../More/" class="download"><img src="http://static.17getfun.com/2017s3/image/publish/index2/download2.png" alt="" /></a>
					<div>
						<ul class="clearfix">
							<li v-for="i in data">
								<a :id="i.channel.id" :href='"Navigation/"+i.channel.id' @click="get($event)">{{i.channel.name}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<div id="div"></div>
		<div class="content">
		  <div class="mapcontent">
		  <p><a href="/">首页</a>&nbsp;>&nbsp;<span>网站地图</span></p>
		   <dt>网站栏目</dt>
		   <dd>
		   <a href="/">精选</a>
		   <a href="../../Specialcolumn/37">图文专栏</a>
		   <a href="../../Specialcolumn/23">娱乐</a>
		   <a href="../../Navigation/31">影视</a>
		   <a href="../../Navigation/11">动漫</a>
		   <a href="../../Navigation/27">奇趣</a>
		   <a href="../../Navigation/51">搞笑</a>
		   <a href="../../Navigation/19">自拍</a>
		   <a href="../../Navigation/29">福利</a>
		   <a href="../../Navigation/85">历史</a>
		   <a href="../../Navigation/87">养生</a>
		   <a href="../../Navigation/93">表情包</a>
		   </dd>
		   <dt>话题明星图</dt>
		   <dd>
		   <a href="../../More/122941">AngelaBaby动图 </a>
		   <a href="../../More/122933">TFBOYS动图 </a>
		   <a href="../../More/122931">何炅动图</a>
		   <a href="../../More/122949">吴亦凡动图</a>
		   <a href="../../More/122947">张艺兴动图</a>
		   <a href="../../More/126615">成龙动图</a>
		   <a href="../../More/122945">李易峰动图 </a>
		   <a href="../../More/122935">杨幂动图</a>
		   <a href="../../More/122951">杨洋动图</a>
		   <a href="../../More/122939">范冰冰动图</a>
		   <a href="../../More/126543">谢娜动图</a>
		   <a href="../../More/122957">赵丽颖动图</a>
		   <a href="../../More/122955">迪丽热巴动图</a>
		   <a href="../../More/122929">邓超动图</a>
		   <a href="../../More/122953">郑爽动图</a>
		   <a href="../../More/122959">鹿晗动图</a>
		   </dd>
		   <dt>明星动图</dt>
		   <dd>         
		   <a href="../../More/131037">亚洲明星动图 </a>
		   <a href="../../More/130855">体育明星动图 </a>
		   <a href="../../More/122971">大陆明星动图</a>
		   <a href="../../More/122965">日本明星动图</a>
		   <a href="../../More/122963">欧美明星动图</a>
		   <a href="../../More/122969">港台明星动图</a>
		   <a href="../../More/122967">韩国明星动图 </a>
		   </dd>
		   <dt>明星圈</dt>
		   <dd>
		   <a href="../../More/122977">时尚明星 </a>
		   <a href="../../More/122987">明星CP照 </a>
		   <a href="../../More/122983">明星写真</a>
		   <a href="../../More/122985">明星搭配</a>
		   <a href="../../More/122991">明星生活照</a>
		   <a href="../../More/127089">明星街拍</a>
		   <a href="../../More/122979">明星表情包 </a>
		   <a href="../../More/122989">红毯明星</a>
		   <a href="../../More/123007">娱乐头条</a>
		   <a href="../../More/123001">明星八卦 </a>
		   <a href="../../More/123005">明星动态</a>
		   </dd>
		   <dt>综艺动图</dt>
		   <dd>                            
		    <a href="../../More/123033">极限挑战动图</a>
                <a href="../../More/123031">奔跑吧动图</a>
                <a href="../../More/123043">火星情报局动图</a>
                <a href="../../More/123051">天天向上动图</a>
                <a href="../../More/127517">康熙来了动图</a>
                <a href="../../More/123049">快乐大本营动图</a>
                <a href="../../More/123059">中国新歌声动图</a>
                <a href="../../More/123061">明日之子动图</a>
                <a href="../../More/123071">我是歌手动图</a>
                <a href="../../More/137355">蒙面唱将猜猜猜动图</a>
                <a href="../../More/123073">跨界歌王动图</a>
                <a href="../../More/123077">维多利亚的秘密动图</a>
                <a href="../../More/123055">我们相爱吧动图</a>
                <a href="../../More/123057">非诚勿扰动图</a>
                <a href="../../More/123067">爱笑会议室动图</a>
                <a href="../../More/123065">笑声传奇动图</a>
                <a href="../../More/135231">《我们来了》动图</a>
                <a href="../../More/123041">暴走大事件动图</a>
                <a href="../../More/123029">花儿与少年动图</a>
                <a href="../../More/123035">高能少年团动图</a>
                <a href="../../More/127415">吐槽大会动图</a>
                <a href="../../More/123045">奇葩说动图</a>
                <a href="../../More/123079">Running Man动图</a>
                <a href="../../More/130609">国内综艺</a>
                <a href="../../More/130509">港台综艺</a>
                <a href="../../More/128061">韩国综艺</a>
                <a href="../../More/130417">国外综艺</a>
                <a href="../../More/128063">日本综艺</a>
                <a href="../../More/128065">欧美综艺</a>
                <a href="../../More/123053">情感</a>
                <a href="../../More/123069">搞笑综艺</a>
                <a href="../../More/130415">真人秀</a>
                <a href="../../More/130423">脱口秀综艺</a>
                <a href="../../More/127521">访谈综艺</a>
                <a href="../../More/123063">选秀综艺</a>
                <a href="../../More/123075">音乐综艺</a>
		   </dd>
		   	<dt>电视剧动图</dt> 		    
		   <dd>                            
		    <a href="../../More/127627"> 古情歌</a>
                <a href="../../More/127651"> 丽姬传</a>
                <a href="../../More/127645"> 如懿传</a>
                <a href="../../More/127633"> 我们的少年时代</a>
                <a href="../../More/127637"> 春风十里不如你</a>
                <a href="../../More/127647"> 赢天下</a>
                <a href="../../More/127643"> 那年花开月正圆</a>
                <a href="../../More/127639"> 醉玲珑</a>
                <a href="../../More/137715">一粒红尘</a>
                <a href="../../More/135715">人间至味</a>
                <a href="../../More/131091">军舰岛</a>
                <a href="../../More/137001">复合大师</a>
                <a href="../../More/136525">孤芳不自赏</a>
                <a href="../../More/131223">射雕英雄传</a>
                <a href="../../More/130335">少林问道</a>
                <a href="../../More/134787">影视</a>
                <a href="../../More/130333">恶魔少爷别吻我</a>
                <a href="../../More/135875">我们的爱</a>
                <a href="../../More/136909">护宝风云</a>
                <a href="../../More/131245">旋风少女3</a>
                <a href="../../More/136945">极品家丁</a>
                <a href="../../More/130321">林海雪原</a>
                <a href="../../More/131215">楚乔传</a>
                <a href="../../More/130679">欢天喜地七仙女</a>
                <a href="../../More/130319">河神</a>
                <a href="../../More/127623">深夜食堂</a>
                <a href="../../More/133941">秦时丽人明月心</a>
                <a href="../../More/131023">粉红女郎</a>
                <a href="../../More/136915">进击吧 闪电</a>
                <a href="../../More/135055">锦绣未央</a>
                <a href="../../More/130311">领养</a>
                <a href="../../More/123109">人民的名义</a>
                <a href="../../More/123119">军师联盟</a>
                <a href="../../More/123115">夏至末至</a>
                <a href="../../More/129717">我的前半生</a>
                <a href="../../More/132977">春风十里不如你</a>
                <a href="../../More/123113">楚乔传</a>
                <a href="../../More/123117">欢乐颂</a>
                <a href="../../More/123111">爱情公寓</a>
                <a href="../../More/137593">那时花开月正圆</a>
                <a href="../../More/123155">偶像剧动图</a>
                <a href="../../More/130979">古装剧动图</a>
                <a href="../../More/123145">奇幻剧动图</a>
                <a href="../../More/123149">战争剧动图</a>
                <a href="../../More/123135">港剧动图</a>
                <a href="../../More/123143">网络剧动图</a>
                <a href="../../More/123141">美剧动图</a>
                <a href="../../More/123139">英剧动图</a>
                <a href="../../More/123153">言情剧动图</a>
                <a href="../../More/123147">谍战剧动图</a>
                <a href="../../More/136005">都市剧动图</a>
                <a href="../../More/123137">韩剧动图</a>
		   </dd>                                    
		  <dt>电影动图</dt>
		  <dd>
		 <a href="../../More/127943">悟空传</a>
                <a href="../../More/127957">摔跤吧！爸爸</a>
                <a href="../../More/127953">神奇女侠</a>
                <a href="../../More/127935">蜘蛛侠：归来</a>
                <a href="../../More/127945">逆时营救</a>
                <a href="../../More/135923">007系列</a>
                <a href="../../More/134557">三生三世十里桃花</a>
                <a href="../../More/135743">二十二</a>
                <a href="../../More/137795">夏洛特烦恼</a>
                <a href="../../More/132983">大护法</a>
                <a href="../../More/137319">威尼斯电影节</a>
                <a href="../../More/135597">心理罪</a>
                <a href="../../More/136117">战狼1</a>
                <a href="../../More/132757">战狼2</a>
                <a href="../../More/137799">敦刻尔克</a>
                <a href="../../More/136507">猫妖传</a>
                <a href="../../More/130159">疯狂动物城</a>
                <a href="../../More/132553">百鸟朝凤</a>
                <a href="../../More/130165">神偷奶爸</a>
                <a href="../../More/131087">绣春刀修罗战场</a>
                <a href="../../More/136265">英伦对决</a>
                <a href="../../More/137617">警察锅哥</a>
                <a href="../../More/137223">记忆大师</a>
                <a href="../../More/132331">闪光少女</a>
                <a href="../../More/137197">青禾男高</a>
                <a href="../../More/130167">驯龙高手</a>
                <a href="../../More/133489">龙之战</a>
                <a href="../../More/127861">卑鄙的我</a>
                <a href="../../More/123129">神偷奶爸</a>
                <a href="../../More/123127">变形金刚</a>
                <a href="../../More/123175">动作电影动图</a>
                <a href="../../More/123157">喜剧电影动图</a>
                <a href="../../More/123173">惊悚电影动图</a>
                <a href="../../More/123165">日韩电影动图</a>
                <a href="../../More/123167">欧美电影动图</a>
                <a href="../../More/123163">港台电影动图</a>
                <a href="../../More/123177">爱情电影动图</a>
                <a href="../../More/123169">科幻电影动图</a>
                <a href="../../More/123161">经典佳片动图</a>
		  </dd>
		  <dt>动漫gif图</dt>
		  <dd>
		  <a href="../../More/123195">全职高手gif</a>
                <a href="../../More/123197">名侦探柯南gif</a>
                <a href="../../More/123193">妖精的尾巴gif</a>
                <a href="../../More/123203">死神gif</a>
                <a href="../../More/123207">海贼王gif</a>
                <a href="../../More/123205">火影忍者gif</a>
                <a href="../../More/123199">进击的巨人gif</a>
                <a href="../../More/123201">银魂gif</a>
                <a href="../../More/123215">儿童动漫</a>
                <a href="../../More/123237">冒险动漫</a>
                <a href="../../More/129331">国产动漫</a>
                <a href="../../More/123213">宅腐动漫</a>
                <a href="../../More/123233">恐怖动漫</a>
                <a href="../../More/123223">悬疑动漫</a>
                <a href="../../More/123221">推理动漫</a>
                <a href="../../More/123235">搞笑动漫</a>
                <a href="../../More/123241">日本动漫</a>
                <a href="../../More/123225">校园动漫</a>
                <a href="../../More/129385">欧美动画</a>
                <a href="../../More/123239">热血动漫</a>
                <a href="../../More/123227">玄幻动漫</a>
                <a href="../../More/123231">科幻动漫</a>
                <a href="../../More/123217">穿越动漫</a>
                <a href="../../More/123219">萌系动漫</a>
                <a href="../../More/129335">迪士尼动画</a>
                <a href="../../More/123229">魔幻动漫</a>
                <a href="../../More/123243">cosplay</a>
                <a href="../../More/129585">业界大咖</a>
                <a href="../../More/123245">动漫人物</a>
                <a href="../../More/123251">动漫资讯</a>
                <a href="../../More/123247">卡通人物</a>
		  </dd>
		    <dt>游戏动图</dt>
            <dd>
                <a href="../../More/133583">DOTA</a>
                <a href="../../More/134071">守望先锋</a>
                <a href="../../More/136773">游戏相关</a>
                <a href="../../More/133599">炉石传说</a>
                <a href="../../More/134059">看门狗2</a>
                <a href="../../More/133707">纪念碑谷</a>
                <a href="../../More/133579">英雄联盟</a>
                <a href="../../More/133595">魔兽世界</a>
                <a href="../../More/133673">生存游戏</a>
                <a href="../../More/133695">电子竞技</a>
                <a href="../../More/133663">MOBA游戏</a>
            </dd>
            <dt>搞笑动图</dt>
            <dd>
                <a href="../../More/123297">囧事</a>
                <a href="../../More/123291">幽默笑话</a>
                <a href="../../More/123295">搞笑段子</a>
                <a href="../../More/123299">搞笑趣事</a>
                <a href="../../More/123293">神回复</a>
                <a href="../../More/123285">脑筋急转弯</a>
                <a href="../../More/123287">荤段子</a>
                <a href="../../More/123367">吃货</a>
                <a href="../../More/123365">奇葩</a>
                <a href="../../More/123371">女汉子</a>
                <a href="../../More/123357">宅男宅女</a>
                <a href="../../More/123369">屌丝</a>
                <a href="../../More/123359">歪果仁</a>
                <a href="../../More/123361">熊孩子</a>
                <a href="../../More/134763">牛人</a>
                <a href="../../More/123363">雷人</a>
                <a href="../../More/123335">体育gif</a>
                <a href="../../More/128789">内涵</a>
                <a href="../../More/123343">囧图</a>
                <a href="../../More/123345">恶搞</a>
                <a href="../../More/123331">搞笑gif</a>
                <a href="../../More/123333">游戏gif</a>
                <a href="../../More/123339">爆笑gif</a>
                <a href="../../More/123341">糗大了</a>
                <a href="../../More/123347">表情包</a>
                <a href="../../More/123337">轻松一刻</a>
                <a href="../../More/123355">喵星人</a>
                <a href="../../More/123353">汪星人</a>
                <a href="../../More/123351">萌宠gif</a>
                <a href="../../More/123289">冷笑话</a>
            </dd>
            <dt>历史</dt>
            <dd>
                <a href="../../More/123401">全球通史</a>
                <a href="../../More/123399">国家史</a>
                <a href="../../More/132431">历史人物</a>
                <a href="../../More/123397">历史朝代</a>
                <a href="../../More/123395">文化历史</a>
                <a href="../../More/123393">野史</a>
            </dd>
            <dt>健康养生</dt>
            <dd>
                <a href="../../More/123409">健康常识</a>
                <a href="../../More/123407">养生保健</a>
                <a href="../../More/123411">美食</a>
                <a href="../../More/123413">家居</a>
                <a href="../../More/130729">心灵鸡汤</a>
                <a href="../../More/123419">情感</a>
                <a href="../../More/123415">生活常识</a>
            </dd>
            <dt>自拍</dt>
            <dd>
                <a href="../../More/123683">古装自拍</a>
                <a href="../../More/123461">女生自拍</a>
                <a href="../../More/123455">情侣自拍</a>
                <a href="../../More/123453">成熟自拍</a>
                <a href="../../More/123445">搞怪自拍</a>
                <a href="../../More/123465">明星自拍</a>
                <a href="../../More/123451">甜美自拍</a>
                <a href="../../More/123449">生活自拍</a>
                <a href="../../More/123459">男生自拍</a>
                <a href="../../More/123447">素颜自拍</a>
                <a href="../../More/123463">网友自拍</a>
                <a href="../../More/123443">自拍gif</a>
                <a href="../../More/123457">萌娃自拍</a>
                <a href="../../More/123471">制服自拍</a>
                <a href="../../More/123467">女神自拍</a>
                <a href="../../More/123475">性感自拍</a>
                <a href="../../More/123469">模特自拍</a>
                <a href="../../More/123473">熟女自拍</a>
                <a href="../../More/123477">诱惑自拍</a>
            </dd>
            <dt>福利动图</dt>
            <dd>
                <a href="../../More/123681">古风</a>
                <a href="../../More/123631">女神</a>
                <a href="../../More/123627">少女</a>
                <a href="../../More/123635">尤物</a>
                <a href="../../More/123639">撩人</a>
                <a href="../../More/123621">时尚</a>
                <a href="../../More/123623">气质</a>
                <a href="../../More/123641">潜规则</a>
                <a href="../../More/123625">熟女</a>
                <a href="../../More/123645">福利</a>
                <a href="../../More/123633">美胸</a>
                <a href="../../More/123637">翘臀</a>
                <a href="../../More/123643">节操图</a>
                <a href="../../More/123629">萝莉</a>
                <a href="../../More/123649">邪恶</a>
                <a href="../../More/123679">长腿</a>
                <a href="../../More/123605">丝袜gif</a>
                <a href="../../More/123617">丰满美女</a>
                <a href="../../More/123615">制服gif</a>
                <a href="../../More/123619">动漫少妇</a>
                <a href="../../More/123593">国外美女</a>
                <a href="../../More/123597">宅男福利</a>
                <a href="../../More/123607">性感gif图</a>
                <a href="../../More/123601">性感美女</a>
                <a href="../../More/123595">清新美女</a>
                <a href="../../More/123603">清纯美女</a>
                <a href="../../More/123591">福利gif</a>
                <a href="../../More/123599">美女写真</a>
                <a href="../../More/123609">美女图片</a>
                <a href="../../More/123611">美女福利</a>
                <a href="../../More/123613">重口妹</a>
            </dd>
            <dt>节日动图</dt>
            <dd>
                <a href="../../More/123657">万圣节</a>
                <a href="../../More/123665">中秋节</a>
                <a href="../../More/131173">儿童节</a>
                <a href="../../More/132961">元宵节</a>
                <a href="../../More/123669">劳动节</a>
                <a href="../../More/131409">国庆节</a>
                <a href="../../More/123667">圣诞节</a>
                <a href="../../More/134015">妇女节</a>
                <a href="../../More/123671">情人节</a>
                <a href="../../More/123659">感恩节</a>
                <a href="../../More/131195">教师节</a>
                <a href="../../More/123673">新婚祝福</a>
                <a href="../../More/123675">新年祝福</a>
                <a href="../../More/131467">植树节</a>
                <a href="../../More/131177">母亲节</a>
                <a href="../../More/123661">清明节</a>
                <a href="../../More/131185">父亲节</a>
                <a href="../../More/123677">生日祝福</a>
                <a href="../../More/123663">端午节</a>
                <a href="../../More/132971">重阳节</a>
            </dd>
            <dt>情绪动图</dt>
            <dd>
                <a href="../../More/133835">不屑gif </a>
                <a href="../../More/134667">严肃gif</a>
                <a href="../../More/132347">伤心gif</a>
                <a href="../../More/123699">伤感gif</a>
                <a href="../../More/123689">兴奋gif</a>
                <a href="../../More/132837">卖萌gif</a>
                <a href="../../More/123697">发泄gif</a>
                <a href="../../More/123701">可爱gif</a>
                <a href="../../More/132763">委屈gif</a>
                <a href="../../More/133753">嫌弃gif</a>
                <a href="../../More/123693">害怕gif</a>
                <a href="../../More/132669">害羞gif</a>
                <a href="../../More/132341">尴尬gif</a>
                <a href="../../More/132787">开心gif</a>
                <a href="../../More/132381">惊讶gif</a>
                <a href="../../More/134479">无奈gif</a>
                <a href="../../More/123687">无聊gif</a>
                <a href="../../More/123703">无语gif</a>
                <a href="../../More/133875">满足gif</a>
                <a href="../../More/132365">烦躁gif</a>
                <a href="../../More/123695">生气gif</a>
                <a href="../../More/136593">疑惑gif</a>
                <a href="../../More/123691">疲惫gif</a>
                <a href="../../More/132385">痛苦gif</a>
                <a href="../../More/132833">窃喜gif</a>
                <a href="../../More/135063">紧张gif</a>
                <a href="../../More/134663">迷惘gif</a>
                <a href="../../More/133949">陶醉gif</a>
                <a href="../../More/135059">隐忍gif</a>
                <a href="../../More/132375">难受gif</a>
                <a href="../../More/134249">震惊gif</a>
                <a href="../../More/132361">高兴gif</a>
            </dd>
            <dt>手绘动图</dt>
            <dd>
                <a href="../../More/123519">创意手绘</a>
                <a href="../../More/123517">简笔画</a>
                <a href="../../More/123515">自制手绘</a>
                <a href="../../More/123551">手绘gif</a>
                <a href="../../More/123563">手绘人物</a>
                <a href="../../More/123555">手绘动漫</a>
                <a href="../../More/123559">手绘动物</a>
                <a href="../../More/123553">手绘卡通</a>
                <a href="../../More/123569">手绘古风</a>
                <a href="../../More/123561">手绘头像</a>
                <a href="../../More/124573">手绘汽车</a>
                <a href="../../More/123565">手绘美女</a>
                <a href="../../More/123567">手绘表情</a>
                <a href="../../More/123525">彩铅手绘</a>
                <a href="../../More/123531">手绘写实</a>
                <a href="../../More/123543">手绘场景</a>
                <a href="../../More/123529">手绘墙画</a>
                <a href="../../More/123527">手绘壁画</a>
                <a href="../../More/123549">手绘彩画</a>
                <a href="../../More/123535">手绘插画</a>
                <a href="../../More/123557">手绘汽车</a>
                <a href="../../More/123521">手绘油画</a>
                <a href="../../More/123523">手绘海报</a>
                <a href="../../More/123541">手绘特效</a>
                <a href="../../More/123547">手绘立体</a>
                <a href="../../More/123537">手绘风景</a>
                <a href="../../More/123539">文艺手绘</a>
                <a href="../../More/123545">黑白手绘</a>
            </dd>
            <dt>资讯</dt>
            <dd>
                <a href="../../More/123427">互联网人物</a>
                <a href="../../More/123425">名家人物</a>
                <a href="../../More/123423">财经人物</a>
                <a href="../../More/135781">汽车资讯</a>
            </dd>
		  </div>
		</div>
			<div id="gotop" @click="gotop">
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		async asyncData({}) {
			let {
				data
			} = await axios.get('http://www.17getfun.com//api/channel/allChannels');         
			return {
				data: data.data
			}
		}
		}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
	}
	body {
		background: #ccc;
	}
	
	.map {
		width: 100%;
		height: 100%;
	}
	#div {
		width: 100%;
		height: 6.5%;
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
		.download {
			display: none;
		}
		.nav {
			width: 100%;
		}
		.nav>.navcontent {
			padding: 10px 0px;
			width: 57.9%;
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
		.nav>.navcontent>div>ul>li:first-child>a {
			color: #e7497a;
			font-weight: bold;
		}
		.content{
		width: 100%;
		padding-top:50px;
		padding-bottom: 100px;
		background: #f2f2f2;
		}
		.mapcontent{
		width: 1100px;
		margin: 0 auto;
		}
		.mapcontent>p>a{
		color: #333;
		font-size: 14px;
		}
		.mapcontent>p>span{
		color:#e7497a;
		}
		.mapcontent>dt{
		margin-top:20px;
		margin-bottom:10px;
		padding-left: 10px;
		border-left: 2px solid #e7497a;
		color: #e7497a;
		}
		.mapcontent>dd{
		padding-left:10px;
		}
		.mapcontent>dd>a{
		display: inline-block;
		color: #333333;
		margin:5px 8px;
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