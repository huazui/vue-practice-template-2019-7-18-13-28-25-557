<template>
 <div>
    <!-- <span>{{this.counterNum}}</span> -->
    <calc v-for="count in this.counterNum" :key="count"
            v-on:addToAll="addToAll" v-on:decreaseToAll="decreaseToAll"
    ></calc><br/>
    <span>total: {{this.totalCount}}</span>
 </div>
</template>

<script>
    import calc from './calc.vue';
    export default {
        components: {
            calc
        },
        props: ["counterNum"],
        data: function() {
            return {
                totalCount: 0
            }
        },
        methods: {
            addToAll: function(data) {
                // this.totalCount++;
                this.totalCount = this.totalCount + data
            },
            decreaseToAll: function(data) {
                this.totalCount = this.totalCount - data
            }
        },
        watch: {
            counterNum: function() {
                this.totalCount = 0
            }
        }
    }
</script>

<style>

</style>