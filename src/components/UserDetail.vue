<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Name: {{switchName()}}</p>
    <p>Age: {{userAge}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn">Reset Name from parent Callback</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    myName: {
      type: String,
      required: true,
      default: "Default"
    },
    userAge: Number,
    resetFn: Function
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Julian";
      this.$emit("nameWasReset", this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
    });
  }
};
</script>
       
<style scoped>
div {
  background-color: lightcoral;
}
</style>
