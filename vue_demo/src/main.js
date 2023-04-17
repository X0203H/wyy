import Vue from "vue";
import App from "./App.vue";
import MainLeft from "@/components/MainLeft";
import MainCenter from "@/components/MainCenter";
import MainRight from "@/components/MainRight";

Vue.config.productionTip = false;
Vue.component("MyMainLeft", MainLeft);
Vue.component("MyMainCenter", MainCenter);
Vue.component("MyMainRight", MainRight);

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // 在vm创建之前，给vm身上添加一个全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
