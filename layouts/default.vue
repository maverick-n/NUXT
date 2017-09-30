<template>
  <div class="app">
    <nuxt></nuxt>
    <my-footer></my-footer>
  </div>
</template>

<script>

import {seo} from '../util/assist'
import MyFooter from '~components/Footer'
export default {
		components: {
			MyFooter
		},
  mounted(){
    //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
    seo()
  }
}
</script>
