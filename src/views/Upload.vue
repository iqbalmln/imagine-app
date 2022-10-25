<script setup>
import Navigation from "../components/Navigation.vue";
</script>

<template>
  <div class="w-full p-12 h-full relative">
    <div class="h-full bg-white rounded-xl shadow-xl">
      <section class="p-8 flex flex-col gap-12">
        <header>
          <h2 class="text-2xl font-bold mb-2">Upload your shots</h2>
          <p class="text-gray-400">
            Please fill in the form below to continue uploading your shots
          </p>
        </header>
        <form action="">
          <div class="flex flex-col gap-4">
            <p>Upload a shots *</p>
            <div class="flex justify-between items-center tes2">
              <p class="flex items-center gap-4">
                <i class="bx bx-image text-6xl text-blue-brand-primary" />
                <span class="text-sm text-gray-400">
                  Upload a shots. Max size 2MB
                </span>
              </p>
              <label
                for="shots"
                class="border border-gray-400 text-blue-brand-primary rounded-md inline-block py-1.5 px-3 cursor-pointer"
                >Browse</label
              >
              <input type="file" id="shots" class="hidden" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="category">Category</label>
              <select id="category" class="border border-gray-400 rounded-md px-4 py-2">
                <option value="nature">Nature</option>
                <option value="Foods">Foods</option>
              </select>
            </div>
            <div class="flex flex-col gap-2">
              <label for="title">Title *</label>
              <input
                type="text"
                id="title"
                class="border border-gray-400 rounded-md px-4 py-2"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="Description">Description *</label>
              <textarea
                cols="10"
                rows="4"
                id="description"
                class="border border-gray-400 rounded-md px-4 py-2"
              />
            </div>
            <button
              type="submit"
              class="self-start bg-blue-brand-primary px-8 py-2 text-white rounded-md"
            >
              Submit shots
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
