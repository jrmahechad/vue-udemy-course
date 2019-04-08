new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    link : 'http://www.google.com',
    finishedLink: '<a href="http://www.google.com">Google</a>'
  },
  methods: {
    changeGreeting: function (event) {
      this.greeting = event.target.value;
    },
    sayHello(){
      return this.greeting;
    }
  }
})