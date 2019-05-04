<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server-item v-for="server in this.servers" :id="server.id" :status="server.status"></app-server-item>
    </ul>
  </div>
</template>

<script>
import ServerItem from "./ServerItem.vue";
import { eventBus } from "../../main";
export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Normal" },
        { id: 4, status: "Unknown" },
        { id: 5, status: "Normal" }
      ],
    };
  },
  components: {
    "app-server-item": ServerItem
  },
  created(){
      eventBus.$on('updateServerDetails', (server) => {
          console.log(server)
          this.servers.forEach((s)=>{
              if(s.id === server.id){
                  s.status= server.status
              }
          })
      })
  }
};
</script>

<style>
</style>
