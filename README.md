# pwa-demo
渐进式应用的 demo

## 步骤
main.js引入 registerServiceWorker
import './registerServiceWorker'


vue.config.js里配置 pwd


service-worker.js 自定义sw

## 注意
如果你想放到服务器进行测试，则必须使用https协议，否则sw注册不成功。
在本地测试可以使用localhost进行，本地测试不需要https协议也是ok的。

