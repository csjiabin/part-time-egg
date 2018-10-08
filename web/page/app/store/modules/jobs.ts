import http from '../http';
import { SET_JOBS_LIST, SET_STATE } from '../mutation-type';
export default {
  namespaced: true,
  state: {
    jobList: {
      list: []
    }
  },
  getters: {

  },
  actions: {
    async JOB_LIST({ commit, state }, params: object = {}) {
      // try {
      //   const response = await http.post(`/app/api/job/list`, params);
      //   const data = response.data || {};
      //   commit(SET_JOBS_LIST, data);
      //   return data;
      // } catch (error) {
      //   throw error;
      // }
      return http.get(`/app/api/job/jobs`, params)
        .then((response) => {
          const data = response.data;
          commit(SET_JOBS_LIST, data);
          return data;
        });
    }
  },
  mutations: {
    [SET_STATE](state, payload) {
      const { target, data } = payload;
      state[target] = data;
    },
    [SET_JOBS_LIST](state, data: object = {}) {
      state.jobList = data;
    }
  }
};
