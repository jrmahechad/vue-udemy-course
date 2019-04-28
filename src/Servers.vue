<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <app-server-details v-for="item in 5" ></app-server-details>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>
<script>
import ServerDetails from './ServerDetails.vue';
export default {
  components: {
      'app-server-details': ServerDetails
  }
};

</script>
