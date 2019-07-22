<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Calc/> -->
    <input type="text" v-model.number="num">
    <counter-group :counterNum="num"></counter-group>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CounterGroup from './components/CounterGroup.vue'
import Calc from './components/calc'

export default {
  name: 'app',
  components: {
    // Calc
    HelloWorld,
    CounterGroup
  },
  data: function() {
    return {
      num: 0
    }
  }
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
