<script setup>
import SideBar from './components/SideBar.vue';
</script>

<template>
  <div class="h-screen flex bg-[#FAFAFA]">
    <SideBar v-if="['Dashboard', 'Explore', 'Upload'].includes($route.name)" />
    <transition name="fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity .75s ease-out;
}
</style>
