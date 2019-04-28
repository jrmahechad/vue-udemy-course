<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <app-servers></app-servers>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Servers from './Servers';
export default {
  components:{
    'app-servers': Servers
  }
}
</script>


<style>
</style>
