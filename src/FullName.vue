<template>
  <div class="form-group">
    <label for="fName">Firt Name</label>
    <input type="text" id="fName" class="form-control" v-model="fName" @change="textEntered">
    <label for="lName">Last Name</label>
    <input type="text" id="lName" class="form-control" v-model="lName" @change="textEntered">
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      fName: "",
      lName: ""
    };
  },
  methods: {
    textEntered: function() {
      const fullname = `${this.fName} ${this.lName}`.trim();
      this.$emit("input", fullname);
    }
  }
};
</script>

