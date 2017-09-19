module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '盖饭娱乐 | 领先的娱乐动图供应商',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://img.17getfun.com/iconShare/favicon2.ico' }
    ]
  },
//plugins:[
//{src:'~/plugins/swiper.js',ssr:true}
//],
//css:[
//   'swiper/dist/css/swiper.css'
//],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
   vendor:['axios'],
    extend (config, ctx) {

    }
  }
/*  modules:[
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy:[
      [
        'api',
        {
          target:'http://www.17getfun.com',
          pathRewrite:{'^/api':'/'}
        }
      ]
  ]*/
}
