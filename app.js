new Vue({
  el: '#exercise',
  data: {
    name:'Julian',
    age: 30,
    imageUrl: 'https://placekitten.com/408/287'
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