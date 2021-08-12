import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue3-cookies'

let app=createApp(App)

app.use(router).mount('#root')
app.use(VueCookies,{
    expireTimes: "7d",
    secure: true,
})