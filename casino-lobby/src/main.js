import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage/HomePage.vue";
import GameInstance from "@/components/Game/GameInstance.vue";
import './index.css';
import {Path} from "@/constants/routes";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: Path.empty, component: HomePage},
        {path: Path.home, component: HomePage},
        {path: `${Path.game}/:gameId`, component: GameInstance},
    ]
})

const app = createApp(App)
app.use(router)

app.mount('#app')
