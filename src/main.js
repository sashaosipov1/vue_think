import { createApp, h } from 'vue'
// import App from './App.vue'
import HomeComponent from './components/Main.vue'
import GameComponent from './components/Game.vue'

import './assets/main.css'

const NotFoundComponent = { template: '<p>Страница не найдена</p>' }

const routes = {
    '/': HomeComponent,
    '/game': GameComponent
}

const SimpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent() {
            return routes[this.currentRoute] || NotFoundComponent
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}

createApp(SimpleRouter).mount('#app')
