// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//可以理解app为一个vue实例对象，有且只有一个。
/**
 * APP是一个根组件
 */
const app = createApp(App)
// 注入一个全局的数据
app.provide("globalData","全局数据")

// 挂载
app.mount('#app')
