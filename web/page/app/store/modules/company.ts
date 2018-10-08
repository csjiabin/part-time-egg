
const state = {
  status: false
};
const getters = {
  status: (state) => state.status
};
const actions = {

};
const mutations = {
  SET_STATE (state, payload) {
    const { target, data } = payload;
    state[target] = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
