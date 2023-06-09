import './assets/main.css'
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// element-plus配置
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 自定义指令
import { lazyPlugin } from './directives'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(lazyPlugin)

app.mount('#app')


