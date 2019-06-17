<template>
  <div class="col-sm-6 col-md-4">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">
          {{stock.name}}
          <small>(Price: {{stock.price}}) | Quantity {{stock.quantity}}</small>
        </h5>
        <div class>
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{danger: insufficientQuantiy}"
          >
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantiy || quantity<=0 || !Number.isInteger(quantity)"
          >{{insufficientQuantiy ? 'Not enough':'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantiy() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
