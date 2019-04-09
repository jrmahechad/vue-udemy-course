new Vue({
  el: '#app',
  data: {
    value: 0
  },
  computed: {
    result: function(){
      return this.value < 37 ? 'not there yet' : 'Done!'
    }
  },
  watch: {
    result: function(value){
      var vm = this;
      setTimeout(() => {
        vm.value = 0;
      }, 5000)
    }
  }
})