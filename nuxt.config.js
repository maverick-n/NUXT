module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '盖饭娱乐 | 领先的娱乐动图供应商',
    meta: [
        { charset: 'utf-8' },
      { name:"keywords",content:"gif图,gif动图,gif动态图片,搞笑动态图片,搞笑gif动态图片,搞笑gif,gif素材,盖饭娱乐"},
      {name:"description", content:"gif图原创内容供应商盖饭娱乐-为用户提供碎片化、娱乐化gif动态图片素材库;gif内容涵盖,原创gif动图、娱乐gif动图、搞笑gif动图、明星gif动图等泛娱乐动图内容生产"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=yes' },
      {
				hid: 'description',
				name: 'description'
			},      /*优先使用 IE 最新版本和 Chrome  */
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      /* iOS 设备 */
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#263238' },
      /*fullscreen and app mode*/
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'full-screen', content: 'yes' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'browsermode', content: 'application' },
      { name: 'x5-page-mode', content: 'app' }
      /*webkit*/
//    { name: 'theme-color', content: '#263238' },
//    { name: 'applicable-device', content: 'pc,mobile' },
//    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
//    { name: 'format-detection', content: 'telephone=no' },
        /*页面关键词*/
//    { name: 'keywords', content: '' },
         /*  搜索引擎抓取*/
//    { name: 'robots', content: 'index,follow' },
       /*不让百度转码*/
//    {http-equiv:'Cache-Contro',content:'no-siteapp'}
      
    ],
    link: [
     {
			rel: 'icon',
			type: 'image/x-icon',
			href: 'http://img.17getfun.com/iconShare/favicon2.ico'
		}
    ]
  },
  // Global CSS
css: ['~assets/css/main.css', '~assets/css/font-awesome.min.css'],

  build: {
    //Add axios globally
    vendor: ['axios','vue-notification'],
    // Run ESLINT on save
    /*extend (config, ctx) {
       if (ctx.isClient) {
         config.module.rules.push({
           enforce: 'pre',
           test: /\.(js|vue)$/,
           loader: 'eslint-loader',
           exclude: /(node_modules)/
         })
       }
     }*/
  },
  // 页面顶部loading效果
  loading: {
    color: '#04acf7',
    height: '4px',
    failedColor: 'red'
  },
  //页面的过渡效果
  transition: {
    name: 'page'
  },
  //配置路由
  router: {
    middleware: 'adminAuth'
  },
  //插件
  plugins: [
    { src: '~plugins/axios' },
    { src: '~plugins/vue-notification', ssr: false }
  ]
}
