import './assets/main.css'
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// element-plus配置
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { getCategory } from './apis/testAPI'

getCategory().then(res => {
  console.log(res);
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
