/* eslint-disable no-console */

import { register } from 'register-service-worker'
// development / production
// 注意：如果你想放到服务器进行测试，则必须使用https协议，否则sw注册不成功。
// 在本地测试可以使用localhost进行，本地测试不需要https协议也是ok的。
if (process.env.NODE_ENV === 'development') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
