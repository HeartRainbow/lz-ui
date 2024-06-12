import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'normalize.css'
import './styles/common.scss'
// import 'lz-ui/dist/es/style.css'
import 'lz-ui/es/style.css'
import './utils/touch-emulator'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
