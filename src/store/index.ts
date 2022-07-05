import { createStore, createLogger } from 'vuex'
import { isDevEnvironment } from '../lib/environments'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import user from './modules/user'
import message from './modules/message'

const debug = isDevEnvironment()

let initialState: { [key: string]: any } = {
  auth: auth.initialState,
  user: user.initialState,
  message: message.initialState
}

export default createStore({
  modules: {
    auth,
    user,
    message
  },
  state: {},
  mutations: {
    RESET(state: { [key: string]: any }) {
      Object.keys(state).forEach((key) => {
        Object.assign(state[key], initialState[key])
      })
    }
  },
  plugins: debug
    ? [
        createLogger(),
        createPersistedState({
          paths: ['auth', 'user', 'message']
        })
      ]
    : [
        createPersistedState({
          paths: ['auth', 'user', 'message']
        })
      ]
})
