<template>
 <div id="calc">
         <button @click="increate">+</button>
          {{$store.state.count}}
         <button @click="decrease">-</button>

 </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
    export default {
        computed: mapGetters([
        ]),
    
    
        methods: {
            ...mapActions ([
            'increate',
            'decrease'
            ]) 
        } 
    }
</script>

<style>

</style>