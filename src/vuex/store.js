import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
    count :0
}
const actions={
    increate:({commit})=>commit('increate'),
    decrease:({commit})=>commit('decrease')
}
const mutations={
    increate (state){
    state.count=state.count+1
    },
    decrease(state){
        state.count=state.count-1;
    }
}
const getters={

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
