<script setup lang="ts">
import { ref } from 'vue';
import Figure from '../base/Figure.vue';

const menus = ref([
  {
    id: 0,
    title: 'pepperoni pizza english muffins on a wood background with a glass of wine',
    img: 'https://images.unsplash.com/photo-1659561158823-61fbd1bf5f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
  },
  {
    id: 1,
    title: 'Bottle of wine with fall decor',
    img: 'https://images.unsplash.com/photo-1665726838402-2e3a84cc22d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 2,
    title: 'Tofu Bowl',
    img: 'https://images.unsplash.com/photo-1659480150417-25f9f0d5ca2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
  },
  {
    id: 3,
    title: 'Close up of a glass and a bottle of red wine with empty space background',
    img: 'https://images.unsplash.com/photo-1665636606691-2b1e9dd368e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
  },
])
</script>

<template>
  <div class="columns-2 md:columns-3">
    <div
      v-for="menu in menus"
      :key="menu.id"
      class="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 ease-in"
    >
      <Figure
        :title="menu.title"
        :img="menu.img"
        class="mb-4 cursor-pointer"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
