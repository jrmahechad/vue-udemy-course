<template>
  <li class="list-group-item" @click="this.openDetails">Server # {{this.id}} Status: {{this.status}}</li>
</template>
<script>
import { eventBus } from "../../main";
export default {
  props: {
    id: Number,
    status: String
  },
  methods: {
    openDetails: function() {
      const server = {
        id: this.id,
        status: this.status
      };
      eventBus.openServerDetails(server);
    }
  }
};
</script>

