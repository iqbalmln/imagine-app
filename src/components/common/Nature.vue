<script setup>
import { ref } from "vue";
import Figure from "../base/Figure.vue";

const natures = ref([
  {
    id: 0,
    title: "Bryce Canyon National Park, Utah, USA",
    img: "https://images.unsplash.com/photo-1666059368794-247cd40f3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    detail: "hahahahha",
    desc: "lorem ipsum dolor sit amet poasadakd"
  },
  {
    id: 1,
    title: "Golden rock waterfall",
    img: "https://images.unsplash.com/photo-1666107677986-c264fc8f908e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    detail: "hahahahha",
    desc: "lorem ipsum dolor sit amet 1234567ihgf"
  },
  {
    id: 2,
    title: "Fall colors at Smokey Mountains",
    img: "https://images.unsplash.com/photo-1665933351334-001a90d24fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    detail: "hahahahha",
    desc: "lorem ipsum dolor sit amet ahfigweiuf"
  },
  {
    id: 3,
    title: "Volcano Acatenango - Guatemala 2022 by Alex Person",
    img: "https://images.unsplash.com/photo-1663790912631-204405725026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80",
    detail: "hahahahha",
    desc: "lorem ipsum dolor sit amet ahfiuley"
  },
]);
</script>

<template>
  <div class="columns-2 md:columns-3">
    <div
      v-for="nature in natures"
      :key="nature.id"
      class="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 ease-in"
    >
      <Figure
        :title="nature.title"
        :img="nature.img"
        :detail-card="nature.detail"
        :desc="nature.desc"
        class="mb-4 cursor-pointer"
      />
    </div>
  </div>
</template>

<style scoped></style>
