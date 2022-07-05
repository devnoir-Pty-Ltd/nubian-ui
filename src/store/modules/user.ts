type State = {
  currentUser: User | null
  account: Account | null
  accountUsers: User[] | null
}

type Account = {
  id: string
  company: string
  renew_on: string
  owner: User
}

type User = {
  knownAs: string
  fullName: string
  email: string
  company: string
  createdAt: string
  updatedAt: string
}

const initialState: State = {
  currentUser: null,
  account: null,
  accountUsers: null
}

export default {
  namespaced: true,
  initialState: initialState,
  state: initialState,
  mutations: {
    SET_USER_DATA: ({ state, data }: { state: State; data: User }) => {
      state.currentUser = data
    }
  },
  getters: {
    getCurrentUser: ({ state }: { state: State }) => {
      return state.currentUser
    }
  },
  actions: {
    setUserData({ commit }: { commit: any }, data: User) {
      commit('SET_USER_DATA', data)
    }
  }
}
