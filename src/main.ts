import App from './App.vue'
import router from './router'
import { apollo } from './Apollo'
import { gqlURI } from './config'
import { createApp, provide, h } from 'vue'

apollo.init({ getUrl: gqlURI })
const app = createApp({
  setup() {
    provide('ApolloClient', apollo.get())
  },
  render() {
    return h(App)
  }
})
app.use(router)
app.mount('#app')
