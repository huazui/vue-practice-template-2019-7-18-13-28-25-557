import Vue from 'vue'
import Router from 'vue-router'
import calc from '.././components/calc.vue'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'calc',
            compenent: calc

    }
]
})