/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-06 17:55:49 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-08 09:30:34
 */
<template>
  <div>
    <el-button type="primary" @click="openChat">点击聊天</el-button>
    <user-im :open="open" @close="closeChat"></user-im>
  </div>
</template>

<script>
import userIm from '@/components/IM/index'

export default {
  name: 'setting',
  components: {
    userIm
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    openChat() {
      this.open = true
    },
    closeChat(val) {
      this.open = val
    }
  },
  mounted() {

  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >

</style>
