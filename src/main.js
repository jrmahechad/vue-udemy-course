import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history", // To remove # from the url, server needs to be configured
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
  //next(false); abort operation
  //next('/')
  //next({path:'/'})
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
