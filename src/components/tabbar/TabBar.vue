<template>
    <div id="tab_bar">
        <TabBarItem v-for="(item,index) in icon_path"
                    :path="item"
                    :icon_color="icon_color"
                    :key="index">
            <span slot="item-icon" class="iconfont" :class="icon_class[index]"></span>
        </TabBarItem>
    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem.vue";

    export default {
        name: "TabBar",
        props:['icon_path','icon_class', 'icon_color'],
        components: {
            TabBarItem
        }
    }
</script>

<style scoped>

    #tab_bar {
        display: flex;
        background-color: #f6f6f6;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -3px 3px rgba(100, 100, 100, .2);
    }

</style>