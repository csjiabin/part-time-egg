'use strict';

import {
  SET_ARTICLE_DETAIL,
  SET_ARTICLE_LIST,
  SET_JOBS_LIST
} from './mutation-type';

const mutations = {
  [SET_ARTICLE_LIST](state, items) {
    state.articleList = items;
  },
  [SET_ARTICLE_DETAIL](state, data) {
    state.article = data;
  },
  [SET_JOBS_LIST](state, data) {
    state.jobList = data;
  }
};
export default mutations;
