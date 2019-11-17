<template>
    <div @click="itemClick"
         class="tab_bar_item"
         :class="{active: isActive}"
         :style="activeStyle">
        <slot name="item-icon"></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            icon_color: String
        },
        methods:{
          itemClick(){
              this.$router.push(this.path)
          }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isActive ? {color: this.icon_color} : {}
            }
        }
    }
</script>

<style scoped>
    @import url('../../assets/ReaderIcon/icons/style.css');

    .tab_bar_item{
        flex: 1;
        height: 49px;

        text-align: center;
        line-height: 49px;
        font-size: 1.3em;
        opacity: .35;
    }

    .active{
        opacity: 1;
    }
</style>