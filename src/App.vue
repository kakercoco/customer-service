<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'App',
  created() {
    // 当在任一路由页面被刷新时,即是根组件app被重新创建,此时可以进行webSocket重连
    // 从cookie中获取用户信息,是登录状态则可以进行webSocket重连
    const userMessage = Cookies.get('Admin-Token')
    if(userMessage){
      const infor = this.Global.sockteInfor('xutianxing', 1, 'token')
      const wm = this.Global.socketCmd('PlatformLogin', infor)
      this.Global.connectSocket('ws://192.168.40.180:3838', wm)
    }
  }
}
</script>
