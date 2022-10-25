<script setup>
  defineProps({
    to: String,
    title: String,
    bordered: Boolean
  })
</script>

<template>
  <button
    class="flex items-center p-4 gap-2 cursor-pointer"
    :class="bordered ? 'border border-blue-brand-primary text-blue-brand-primary hover:bg-blue-brand-primary hover:text-white transition duration-200 ease-in' : 'bg-blue-brand-primary border border-blue-brand-primary hover:border text-white hover:border-blue-brand-primary hover:text-blue-brand-primary transition duration-200 ease-in hover:bg-transparent'"
  >
    <slot name="icon"></slot>
    <router-link :to="to">{{ title }}</router-link>
  </button>
</template>

<style scoped>

</style>
