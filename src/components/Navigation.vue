<script setup>
import SearchInput from './common/SearchInput.vue';

</script>

<template>
  <div class="fixed top-0 right-[48px] z-20 flex items-center justify-between w-[1100px] py-6 bg-[#FAFAFA]">
    <SearchInput />
    <div class="flex items-center gap-4 text-gray-700 cursor-pointer">
      <div class="flex items-center gap-2">
        <figure class="w-12 h-12">
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" class="w-full h-full object-cover rounded-full">
        </figure>
        <span class="font-light text-sm">miqblmaulana@gmail.com</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
