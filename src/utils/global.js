class socket {
  constructor(name) {
    this.name = name
  }
  test() {
    alert('test')
  }
  sockteInfor(userName, role, token) {
    const infor = {
      'userName': userName,
      'timestamp': '111',
      'platform': '客服系统',
      'role': role,
      'authority': 1,
      'token': token
    }
    return infor
  }
  socketCmd(cmd, infor) {
    const wm = {
      'cmd': cmd,
      'content': JSON.stringify(infor)
    }
    return JSON.stringify(wm)
  }
  connectSocket(host, wm) {
    window.webSocket = new WebSocket(host)
    /* 建立连接*/
    window.webSocket.onopen = evt => {
      console.log('webSocket连接成功')
      window.webSocket.send(wm)
    }
    /* 连接关闭*/
    window.webSocket.onclose = evt => {
      console.log('webSocket连接关闭')
    }
    /* 接收服务器推送消息*/
    window.webSocket.onmessage = evt => {
      const data = JSON.parse(evt.data)
      switch (data.cmd) {
        case 'LoginSuccess':
          console.log('LoginSuccess')
          // window.webSocket.createDialog()
          break
        case 'CreateDialogSuccess':
          console.log('CreateDialogSuccess')
          break
      }
    }
    window.webSocket.createDialog = () => {
      const wm = {
        'cmd': 'CreateDialog'
      }
      window.webSocket.send(JSON.stringify(wm))
    }
    window.webSocket.joinDialog = () => {
      const wm = {
        'cmd': 'JoinDialog',
        'content': '38'
      }
      window.webSocket.send(JSON.stringify(wm))
    }
    /* 连接发生错误时*/
    window.webSocket.onerror = (evt, e) => {
      console.log(evt)
    }
  }
}
export default socket
