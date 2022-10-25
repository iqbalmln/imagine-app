<script setup>
import { ref } from "vue";
defineProps({
  img: String,
  title: String,
  detailCard: String,
  desc: String,
});
const mouseHover = ref(false);
const clickCard = ref(false);
</script>

<template>
  <div>
    <figure
      @mouseover="mouseHover = true"
      @mouseleave="mouseHover = false"
      class="relative"
      :class="mouseHover ? '' : ''"
      @click="clickCard = !clickCard"
    >
      <img :src="img" class="h-full w-full object-cover" />
      <Transition name="fade" mode="out-in">
        <p
          v-show="mouseHover"
          class="absolute bg-gradient-to-b bottom-0 from-transparent to-black text-white py-8 w-full text-center"
        >
          {{ title }}
        </p>
      </Transition>
    </figure>
    <div
      @click="clickCard = false"
      v-show="clickCard"
      class="bg-black opacity-40 fixed h-screen w-full z-40 left-0 top-0"
    />
    <div
      v-show="clickCard"
      class="bg-white p-8 rounded-md fixed top-1/2 transform
      -translate-y-1/2 -translate-x-1/2 left-1/2 w-2/3 z-50 flex flex-col gap-4"
    >
      <div class="h-[500px]">
        <img :src="img" class="w-full h-full object-cover" />
      </div>
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.grow-in-enter-from,
.grow-in-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
.grow-in-enter-active,
.grow-in-leave-active {
  transition: 0.5s ease-out;
}
</style>
