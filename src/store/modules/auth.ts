type State = {
  authenticating: boolean
  loggedIn: boolean
  accessToken: string | null
}

const initialState: State = {
  authenticating: false,
  loggedIn: false,
  accessToken: null
}

export default {
  namespaced: true,
  initialState: initialState,
  state: initialState,
  mutations: {
    SET_AUTHENTICATING: ({ state, val }: { state: State; val: boolean }) => {
      state.authenticating = val
    },
    SET_LOGGEDIN: ({ state, val }: { state: State; val: boolean }) => {
      state.loggedIn = val
    }
  },
  getters: {
    isLoggedIn({ state }: { state: State }) {
      return state.loggedIn
    }
  },
  actions: {
    async setAuthenticating({ commit }: { commit: any }, val: boolean) {
      commit('SET_AUTHENTICATING', val)
    },
    async setLoggedIn({ commit }: { commit: any }, val: boolean) {
      commit('SET_LOGGEDIN', val)
    }
  }
}
