import {
    createApp
} from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const app = createApp(App)


app.use(ElementPlus)

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
app.use(router)

app.mount('#app')