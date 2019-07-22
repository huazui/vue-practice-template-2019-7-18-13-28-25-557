<template>
 <div>
     <div>
         <button @click="increate">+</button>
         <input type="text" v-model="number">
         <button @click="decrease">-</button>
     </div>
 </div>
</template>

<script>
    export default {
        data() {
            return {
                number: 0
            }
        },
        methods: {
            increate: function() {
                this.number++;
                this.$emit("addToAll", 1)
            },
            decrease: function() {
                this.number--;
                this.$emit("decreaseToAll", 1)
            }
        }
    }
</script>

<style>

</style>