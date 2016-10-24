<style scoped>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>
<template>

    <p style="text-align: center">
        <router-link to="/index">首页</router-link>
        <router-link to="/order">订单列表</router-link>
        <router-link to="/user">个人中心</router-link>
        <router-view></router-view>
    </p>
</template>


<script>
    import store from './vuex/store'

    module.exports = {
        data: function() {
            return {
            }
        },
        ready: function() {

        },
        components:{

        },
        store: store, 
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
