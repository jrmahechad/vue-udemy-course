new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    link: 'http://www.google.com',
    finishedLink: '<a href="http://www.google.com">Google</a>',
    counter: 0,
    secondCounter: 0,
    x: 0,
    y: 0,
    name: 'Julian'
  },
  computed: {
    output: function(){
      console.log('Computed!')
      return this.counter > 5 ? 'Greater 5' : ' Smaller 5';

    }
  },
  watch: {
    counter: function(value){
      var vm = this;
      setTimeout(() => {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    changeGreeting: function (event) {
      this.greeting = event.target.value;
    },
    sayHello() {
      return this.greeting;
    },
    increase: function (step, event) {
      this.counter += step;
      this.result = this.counter > 5 ? 'Greater 5' : ' Smaller 5';
    },
    decrease: function (step, event) {
      this.counter -= step;
      this.result = this.counter > 5 ? 'Greater 5' : ' Smaller 5';
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert('Alert!!!')
    },
    result: function (){
      console.log('Method');
      
      return this.counter > 5 ? 'Greater 5' : ' Smaller 5';
    }
  }
})