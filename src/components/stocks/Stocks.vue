<template>
    <div class="row">
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
</template>
<script>
import Stock from './Stock.vue';
export default {
    data(){
        return {
            stocks: [
                {id: 1, name: 'BMW', price: 110},
                {id: 2, name: 'Google', price: 120},
                {id: 3, name: 'Apple', price: 130},
                {id: 4, name: 'Twitter', price: 140},
            ]
        }
    },
    components:{
        appStock: Stock
    }
}
</script>

