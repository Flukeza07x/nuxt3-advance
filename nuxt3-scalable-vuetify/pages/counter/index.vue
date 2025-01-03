<script setup lang="ts">
    
    // import store counter
    import { useCounterStore } from '@/stores/counter'

    // create counter object
    const counter = useCounterStore()

    // import cart from components cart
    import Cart from '@/components/cart/cartItem.vue'

</script>

<template>

<div>
    <!-- Cart -->
    <Cart />
.
.
</div>

  <div>
    <v-card class="mx-auto" width="400">
      <v-card-title>
        Counter
      </v-card-title>
      <v-card-text>
        <p>Count: {{ counter.count }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" color="teal-accent-4" @click="counter.increment()">
            Count Up
        </v-btn>
        <v-btn variant="text" color="red-accent-4" @click="counter.decrement()">
            Count Down
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>

</style>
