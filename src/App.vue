<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Components</h1>
        <my-cmp></my-cmp>
        <hr>
        <my-cmp></my-cmp>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {};

Vue.component("my-cmp", {
  data: function() {
    return {
      status: "Critical"
    };
  },
  template: "<p>Server Status {{status}} <button @click='changeStatus'>Change</button></p>",
  methods: {
    changeStatus : function(){
      this.status = 'Normal';
    }
  }
});
</script>

<style>
</style>
