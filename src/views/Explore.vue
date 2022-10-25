<script setup>
import Navigation from '../components/Navigation.vue';
import Figure from '../components/base/Figure.vue';
import axios from 'axios'
import { onMounted, ref } from 'vue';


axios.get(`http://localhost:8080/shots`,
  Headers= {
    "Access-Control-Allow-Origin": "*",
})
  .then(response => {
    console.log(response.data);
  })
const explores = [
{
    id: 0,
    title: "Bryce Canyon National Park, Utah, USA",
    img: "https://images.unsplash.com/photo-1666059368794-247cd40f3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 1,
    title: "Golden rock waterfall",
    img: "https://images.unsplash.com/photo-1666107677986-c264fc8f908e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Fall colors at Smokey Mountains",
    img: "https://images.unsplash.com/photo-1665933351334-001a90d24fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 3,
    title: "Volcano Acatenango - Guatemala 2022 by Alex Person",
    img: "https://images.unsplash.com/photo-1663790912631-204405725026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80",
  },
  {
    id: 4,
    title: 'pepperoni pizza english muffins on a wood background with a glass of wine',
    img: 'https://images.unsplash.com/photo-1659561158823-61fbd1bf5f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
  },
  {
    id: 5,
    title: 'Bottle of wine with fall decor',
    img: 'https://images.unsplash.com/photo-1665726838402-2e3a84cc22d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 6,
    title: 'Tofu Bowl',
    img: 'https://images.unsplash.com/photo-1659480150417-25f9f0d5ca2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
  },
  {
    id: 7,
    title: 'Close up of a glass and a bottle of red wine with empty space background',
    img: 'https://images.unsplash.com/photo-1665636606691-2b1e9dd368e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
  },
]
</script>

<template>
  <div class="w-full pt-32 px-12 overflow-y-scroll h-full relative">
    <Navigation />
    <div class="columns-2 md:columns-3">
      <div
        v-for="explore in explores"
        :key="explore.id"
        class="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 ease-in"
      >
        <Figure :title="explore.title" :img="explore.img" class="mb-4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
