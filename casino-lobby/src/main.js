import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage/HomePage.vue";
import GameInstance from "@/components/Game/GameInstance.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/home', component: HomePage},
        {path: '/game/:gameId', component: GameInstance},
    ]
})

const app = createApp(App)
app.use(router)

app.mount('#app')
