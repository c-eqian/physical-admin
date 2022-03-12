// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import mqtt from 'mqtt'
// eslint-disable-next-line no-unused-vars
let mqttClient; let mqttConnect = false
// eslint-disable-next-line no-unused-vars
export function selfMqttClient () {
  return mqttClient
}
export function disConnection () {
  if (mqttClient.connected) {
    try {
      mqttClient.end()
      mqttClient = {
        connected: false
      }
      console.log('Successfully disconnected!')
    } catch (error) {
      console.log('Disconnect failed', error.toString())
    }
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
export class Mqtt {
  /**
   * mqtt初始化
   * @param url
   */

  // eslint-disable-next-line no-useless-constructor
  mqttInit (url) {
    // eslint-disable-next-line no-unused-vars
    let uuid = `mqtt${Math.ceil(Math.random() * 20)}`
    let connection = {
      host: url || 'f7aac81b.cn-shenzhen.emqx.cloud',
      port: 13280,
      endpoint: '/mqtt',
      clean: true, // 保留会话
      connectTimeout: 4000, // 超时时间
      reconnectPeriod: 4000, // 重连时间间隔
      // 认证信息
      clientId: uuid,
      username: 'cyq990127',
      password: 'cyq990127'
    }
    // eslint-disable-next-line no-unused-vars
    // 连接字符串, 通过协议指定使用的连接方式
    let { host, port, endpoint, ...options } = connection
    let connectUrl = `ws://${host}:${port}${endpoint}`
    try {
      mqttClient = mqtt.connect(connectUrl, options)
    } catch (error) {
      console.log('mqtt.connect error', error)
    }
    mqttClient.on('connect', () => {
      console.log('Connection succeeded!')
      mqttConnect = true
    })
    mqttClient.on('error', error => {
      console.log('Connection failed', error)
    })
  }

  /**
   * 订阅主题
   * @param topic
   */
  mqttSub (topic) {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-redeclare

    mqttClient.subscribe(topic, { qos: 0 }, (error, res) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
      console.log('Subscribe to topics res', res)
    })
  }

  /***
   * 取消订阅
   * @param topic
   */
  cancelSubscribe (topic) {
    mqttClient.unsubscribe(topic, error => {
      if (error) {
        console.log('Unsubscribe error', error)
      }
    })
  }

  /**
   * 发布消息
   * @param params
   */
  mqttPublish (params) {
    // eslint-disable-next-line no-unused-vars
    let publish = {
      topic: params.topic,
      qos: 0,
      payload: params.data.toString()
    }
    const { topic, qos, payload } = publish
    mqttClient.publish(topic, payload, qos, error => {
      if (error) {
        console.log('Publish error', error)
      }
    })
  }
  /***
   * 接受消息
   */
  onMessage () {
    // eslint-disable-next-line no-unused-vars
    let receiveNews = ''
    let data
    data = mqttClient.on('message', (topic, message) => {
      // eslint-disable-next-line no-unused-vars
      console.log(`Received message ${message} from topic ${topic}`)
      return {
        topic: topic,
        message: `${message}`
      }
    })
    return data
  }

  /***
   * 断开连接
   */
}
