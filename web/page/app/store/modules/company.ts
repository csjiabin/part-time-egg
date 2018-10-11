export default {
  namespaced: true,
  state: {
    status: false
  },
  getters: {
    status: (state) => state.status
  },
  actions: {},
  mutations: {
    SET_STATE(state, payload) {
      const { target, data } = payload;
      state[target] = data;
    }
  }
};
