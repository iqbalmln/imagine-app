<script setup>
import Button from "../components/base/Button.vue";
</script>

<template>
  <div class="h-screen relative w-full flex bg-white">
    <p class="absolute top-0 right-0 text-sm p-6">
      Not a member? <router-link to="/register" class="text-blue-brand-primary">Sign up now</router-link>
    </p>
    <figcaption class="flex-[40%] h-full relative">
      <div class="absolute top-0 left-0 opacity-25 bg-black w-full h-full" />
      <img
        src="https://images.unsplash.com/photo-1664109478657-343a74b62ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        alt=""
        class="w-full h-full object-cover"
      />
    </figcaption>
    <div class="flex-[60%] flex items-center justify-center">
      <form action="" class="w-2/3 flex flex-col gap-6">
        <h1 class="text-2xl font-bold mb-12">Sign in to IMG.</h1>
        <div class="flex flex-col gap-2">
          <label for="email" class="font-bold">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="input your email"
            class="px-4 py-2 rounded-md focus:outline-none focus:bg-white focus:border-blue-brand-primary border-2 border-[#f3f3f4] bg-[#f3f3f4] shadow-md transition duration-300"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="font-bold">Password</label>
          <input
            type="password"
            id="password"
            placeholder="input your password"
            class="px-4 py-2 rounded-md focus:outline-none focus:bg-white focus:border-blue-brand-primary border-2 border-[#f3f3f4] bg-[#f3f3f4] shadow-md transition duration-300"
          />
        </div>
        <button
          type="submit"
          class="mt-6 py-2 px-12 rounded-md self-start bg-blue-brand-primary text-white"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
