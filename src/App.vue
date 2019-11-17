<template>
  <div id="App">
    <router-view></router-view>

    <div>{{$store.state.counter}}</div>
    <button @click="add">+</button>
    <button @click="dec">-</button>

    <TabBar :icon_path="icon_path"
    :icon_class="icon_class"
    :icon_color="icon_color"></TabBar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";

  export default {
    name: 'App',
    components:{
      TabBar
    },
    data() {
        return {
          icon_path: ['/home', '/cart', '/user', '/more'],
          icon_class: ['icon-menu','icon-shopping-cart','icon-user','icon-more'],
          icon_color: 'darkgreen'
        }
    },
    methods:{
      add(){
        this.$store.commit('increment')
      },
      dec(){
        this.$store.commit('decrement')
      }
    }
}

</script>

<style>
    @import url('assets/css/reset.css');

</style>
