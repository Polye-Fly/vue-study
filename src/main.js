// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/Header.vue'

const app = createApp(App)
// 全局注册组件在main.js中进行
app.component("Header",Header)

// createApp(App).mount('#app')
app.mount("#app")
