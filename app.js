new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    link: 'http://www.google.com',
    finishedLink: '<a href="http://www.google.com">Google</a>',
    counter: 0,
    x: 0,
    y: 0
    , name: 'Julian'
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
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert('Alert!!!')
    }
  }
})