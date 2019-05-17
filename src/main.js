import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/base.css';
import BaiduMap from 'vue-baidu-map';

Vue.use(iView);
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: 'KQmn5VUySHveknsaGZT7rQYQpQRhsYlZ'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
