new Vue({
  el: '#app',
  data: {
    myEffect:'',
    effects: ['highlight','shrink'],
    class1: 'blue',
    class2: 'height200',
    classFromInput:'blue',
    classToggle: true,
    styleFromInput:'',
    progressN : 0
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(() => {
        vm.myEffect = vm.myEffect === vm.effects[1] ? vm.effects[0]: vm.effects[1];
        
      }, 2000);
    },
    startProgressBar: function(){
      var vm = this;
      setInterval(() => {
        vm.progressN +=10;
        vm.progressN = vm.progressN <= 500 ? vm.progressN : 0
      }, 2000);
    }
  }
})