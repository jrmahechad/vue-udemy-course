export const fruitMixin = {
  data: function() {
    return {
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(elemet => {
        return elemet.match(this.filterText);
      });
    }
  },
  created(){
      console.log('mixin created')
  }
};
