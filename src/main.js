import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/tailwind.css'

// createApp(App).use(store).use(router).mount('#app')

// สร้างตัวแปรมาเก็บ Constant ของ Vue
const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

