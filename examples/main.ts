/*
 * @Author: lbw
 * @Date: 2022-08-02 10:08:13
 * @LastEditors: lbw
 * @LastEditTime: 2022-08-03 10:04:05
 * @Description:
 */
import { createApp } from 'vue'

import App from './app.vue'
//import 'wal-ui/es/style.css';
const app = createApp(App)

import walui from 'wal-ui'
app.use(walui)

app.mount('#app')