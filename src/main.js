import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app') /*mount the app and tell it the element we want to find and 
control for our vue app
Every vue application starts by creating a new vue instance and mounting it */
