type Message = {
  _id: string
  sender: string
  receiver: string
  message: string
  createdAt: Date
  updatedAt: Date
}

type State = {
  messages: Message[]
}
const initialState: { [key: string]: any } = {
  messages: []
}

export default {
  namespaced: true,
  initialState: initialState,
  state: initialState,
  mutations: {
    SET_MESSAGES: (state: State, data: Message[]) => {
      state.messages = data
    }
  },
  getters: {
    getMessages: (state: State) => {
      return state.messages
    }
  },
  actions: {
    async setMessages({ commit }: { commit: any }, data: Message[]) {
      commit('SET_MESSAGES', data)
    }
  }
}
