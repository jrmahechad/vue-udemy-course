import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
      openServerDetails(server) {
          this.$emit('openServerDetails', server);
      },
      updateServerDetails(server) {
          this.$emit('updateServerDetails', server);
      },
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
