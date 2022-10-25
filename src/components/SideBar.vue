<script setup>
import Button from "../components/base/Button.vue"
</script>

<template>
  <div class="bg-[#F3F8FB] w-[300px] flex flex-col gap-[50px] pl-12 py-6 relative">
    <div class="font-bold text-2xl">
      <router-link to="/">
        <p>IMG.</p>
      </router-link>
    </div>
    <ul class="flex flex-col gap-12">
      <li>
        <router-link
          to="/"
          class="flex gap-3 items-center cursor-pointer py-2 pl-3
            text-gray-400 hover:text-blue-brand-primary transition duration-150 ease-out"
          >
          <i class='bx bxs-dashboard' />
          <span class="text-[18px]">
            My Collections
          </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/upload"
          class="flex gap-3 items-center cursor-pointer py-2 pl-3
            text-gray-400 hover:text-blue-brand-primary"
          >
          <i class='bx bxs-cloud-upload' />
          <span class="text-[18px]">
            Upload Shots
          </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/explore"
          class="flex gap-3 items-center cursor-pointer py-2 pl-3
            text-gray-400 hover:text-blue-brand-primary"
          >
          <i class='bx bxs-compass' />
          <span class="text-[18px]">
            Explore
          </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/tes"
          class="flex gap-3 items-center cursor-pointer py-2 pl-3
            text-gray-400 hover:text-blue-brand-primary"
          >
          <i class='bx bxl-youtube' />
          <span class="text-[18px]">
            Tutorials
          </span>
        </router-link>
      </li>
    </ul>
    <div class="flex flex-col gap-2 justify-center items-center drop-shadow-2xl bg-white mr-6 py-6 px-2 rounded-xl">
      <span class="font-bold tracking-wider">Tooltip</span>
      <p class="text-center text-xs text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellendus deleniti?</p>
    </div>
    <!-- <li class="list-none absolute bottom-0 right-0">
        <router-link
          to="/login"
          class="flex gap-3 items-center cursor-pointer py-2 pl-3 pr-8
            text-gray-400 hover:text-blue-brand-primary transition duration-150 ease-out"
          >
          <i class='bx bxs-dashboard' />
          <span class="text-[18px]">
            Logout
          </span>
        </router-link>
      </li> -->
  </div>
</template>

<style scoped>

</style>
