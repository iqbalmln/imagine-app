<template>
  <div>
    <p>tes</p>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        tickets: []
      }
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    methods: {
      getData() {
        axios.get('http://127.0.0.1:8080/shots')
        .then(response => {
          console.log(response.data.data);
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>