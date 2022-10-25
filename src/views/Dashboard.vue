<script setup>
import { ref } from "vue";
import Navigation from "../components/Navigation.vue";
import Button from "../components/base/Button.vue";
import Foods from "../components/common/Foods.vue";
import Nature from "../components/common/Nature.vue";

const tabMenu = ref("Nature");
const tabs = {
  Nature: Nature,
  Foods: Foods
}
</script>

<template>
  <div class="w-full px-12 pt-32 overflow-y-scroll h-full relative">
    <Navigation />
    <main class="flex flex-col gap-12">
      <figcaption class="tes h-[300px] w-full relative">
        <div class="bg-black opacity-20 w-full h-full absolute top-0 left-0" />
        <div
          class="flex flex-col gap-4 absolute z-10 px-12 text-white top-1/2 transform -translate-y-1/2"
        >
          <h1 class="font-bold text-5xl">
            Discover, show, and<br />Inspiring people.
          </h1>
          <p>the world’s first and largest digital shots</p>
          <div class="flex gap-4">
            <Button to="/tes" title="explore">
              <template #icon>
                <i class="bx bxs-compass" />
              </template>
            </Button>
            <Button to="/upload" title="Create yours" bordered="true">
              <template #icon>
                <i class="bx bxs-compass" />
              </template>
            </Button>
          </div>
        </div>
      </figcaption>
      <h2 class="text-2xl font-semibold">
        <i class="bx bx-images" />
        My Collections
      </h2>
      <section class="flex flex-col gap-6 pb-6">
        <div class="flex gap-6">
          <button
            v-for="(_, tab) in tabs"
            :key="tab"
            @click="tabMenu = tab"
            class="border-b-2 border-transparent transition ease-in duration-200 opacity-70 py-1"
            :class="
              tabMenu == tab ? 'border border-b-2 border-b-blue-brand-primary opacity-100' : ''
            "
          >
            {{ tab }}
          </button>
        </div>
        <div>
          <transition name="grow-in" mode="out-in">
            <component :is="tabs[tabMenu]" />
          </transition>
        </div>
      </section>
    </main>
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
