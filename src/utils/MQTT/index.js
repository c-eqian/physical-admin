import mqtt from 'mqtt'

let config = {
  url: '120.77.44.219',
  port: 8083,
  topic: 'send/weight', // 发布主题
  sub: 'get/weight', //订阅主题
  qos: 0,
  clientId: '', // 客户端ID
  username: '', // 用户名
  password: '', // 密码
  clean: false,
}
let client
export class MQTT {
  constructor(config = config) {
    this.url = `ws://${config.url||'120.77.44.219'}/mqtt`;
    this.port = config.port;
    this.topic = config.topic;
    this.sub = config.sub;
    this.qos = config.qos;
    this.clientId = config.clientId;
    this.username = config.username;
    this.password = config.password;
    this.clean = config.clean;
  }

  //开启mqtt链接
  mqtt_init() {
    client = mqtt.connect(this.url, {
      port: this.port||8083,
      clientId: this.clientId,
      username: this.username,
      password: this.password,
      clean: this.clean,
    });
    return client;
  }

}
export function Utf8ArrayToStr (array) {
  var out, i, len, c
  var char2, char3

  out = ''
  len = array.length
  i = 0
  while (i < len) {
    c = array[i++]
    switch (c >> 4) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c)
        break
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++]
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
        break
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++]
        char3 = array[i++]
        out += String.fromCharCode(((c & 0x0F) << 12) |
                       ((char2 & 0x3F) << 6) |
                       ((char3 & 0x3F) << 0))
        break
    }
  }

  return JSON.parse(out)
}
