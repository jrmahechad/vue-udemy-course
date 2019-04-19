var data = {
  title: "The VueJS Instance",
  showParagraph: false
};

Vue.component("hello", {
  template: "<h1>Hello from component!!!</h1>"
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle("The VueJS Instance (Updated)");
      this.$refs.myButton.innerText = "Text";
      console.log(this.$refs);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert("Title changed, new value: " + value);
    }
  }
});

setTimeout(() => {
  vm1.title = "Changed by timer!!";
  vm1.show();
}, 3000);

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "The second instance"
  },
  methods: {
    onChange: function() {
      vm1.title = "Changed!!";
    }
  }
});

vm1.$mount("#app1");
vm1.$refs.heading.innerText = "Something else";
console.log(vm1);
console.log(vm1.$data === data);

var vm3 = new Vue({
  template: "<h1>Hello!!</h1>"
});

//vm3.$mount('#app3') Mount the vue instance passing the selector
// Or create the view instance and the attach it using JS
vm3.$mount("");
document.getElementById("app3").appendChild(vm3.$el);

var vm4 = new Vue({
  el: "#app4",
  data:{
    title: 'TITLE'
  },
  methods:{
    destroy: function(){
      this.$destroy();
    }
  },
  beforeCreate: function() {
    console.log("beforeCreate");
  },
  created: function() {
    console.log("created");
  },
  beforeMount: function() {
    console.log("beforeMount");
  },
  mounted: function() {
    console.log("mounted");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  },
  updated: function() {
    console.log("updated");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy");
  },
  destroyed: function() {
    console.log("destroyed");
  }
});
