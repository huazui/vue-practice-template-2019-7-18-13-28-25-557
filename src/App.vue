<template>
  <div id="app">
   <calc></calc>
  </div>
</template>


<script>
import calc from './components/calc.vue'

export default {
  name: 'app',
  components: {
     calc
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

