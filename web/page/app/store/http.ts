import axios from 'axios';
import Cookies from 'js-cookie';
import { Toast } from 'mint-ui';
import router from '../router.ts';
// axios.defaults.timeout = 180000
const api = axios.create({
  timeout: 20000,
  headers: { 'x-csrf-token': Cookies.get('csrfToken') }
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 401:
          Toast({
            message: '登录过期,请重新登录',
            iconClass: 'icon icon-warning'
          });
          localStorage.removeItem('user');
          if (router.currentRoute.fullPath.indexOf('redirect') !== -1) return; // 处理多次请求，redirect重复问题
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        case 500:
          Toast({
            message: '系统异常，请联系管理员...',
            iconClass: 'icon icon-warning'
          });
          break;
        case 502:
          Toast({
            message: '系统正在重启，请稍后再试...',
            iconClass: 'icon icon-warning'
          });
          break;
        case 503:
          Toast({
            message: '服务暂时不可用...',
            iconClass: 'icon icon-warning'
          });
          break;
        case 504:
          Toast({
            message: '系统繁忙，请稍后再试...',
            iconClass: 'icon icon-warning'
          });
          break;
        default:
          Toast({
            message: '警告⚠️...',
            iconClass: 'icon icon-warning'
          });
      }
      return Promise.reject(
        error.response ? { ...data, status } : { message: '页面请求失败！' }
      ); // 返回接口返回的错误信息
    }
  }
);

export default api;
