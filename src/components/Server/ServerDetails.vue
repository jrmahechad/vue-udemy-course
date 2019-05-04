<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <div v-if="this.id>0">
      <p>Server # {{this.id}}</p>
      <p>Server Status {{this.status}}</p>
      <button @click="changeStatusNormal">Change Status to Normal</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data: function() {
    return {
      id: 0,
      status: ""
    };
  },
  methods: {
    changeStatusNormal: function() {  
      const server = {
          id: this.id,
          status: 'Normal'
      }
      this.id = 0;
      eventBus.updateServerDetails(server);
    }
  },
  created() {
    eventBus.$on("openServerDetails", server => {
      this.id = server.id;
      this.status = server.status;
    });
  }
};
</script>

<style>
</style>
