'use strict';
import axios from 'axios';
import Cookies from 'js-cookie';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';

export default {
  post(url, json, store: any = {}) {
    const { state = { origin: '' } } = store;
    const headers: any = {};
    if (EASY_ENV_IS_NODE) {
      const csrfToken = Cookies.get('csrfToken') || '';
      headers['x-csrf-token'] = csrfToken;
      // headers.Cookie = `csrfToken=${Cookies.get('csrfToken')}`;
    }
    return axios.post(`${state.origin}${url}`, json, { headers });
  },
  get(url, store: any = {}) {
    const { state = { origin: '' } } = store;
    return axios.get(`${state.origin}${url}`);
  }
};