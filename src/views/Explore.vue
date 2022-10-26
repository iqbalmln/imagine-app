<template>
  <div class="w-full pt-32 px-12 overflow-y-scroll h-full relative">
    <Navigation />
    <div class="columns-2 md:columns-3">
      <div
        v-for="shot in shots"
        :key="shot.id"
        class="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 ease-in"
      >
        <Figure
          :title="shot.title"
          :img="shot.img"
          :category="shot.category"
          :desc="shot.description"
          class="mb-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navigation from "../components/Navigation.vue";
import Figure from "../components/base/Figure.vue";
export default {
  data() {
    return {
      shots: [],
    };
  },
  components: {
    Navigation,
    Figure,
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  methods: {
    getData() {
    axios.get("http://127.0.0.1:8080/shots").then((response) => {
        this.shots = response.data.data;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped></style>
