<template>
    <div id="hello">
        <img src="../assets/logo.png">
        <router-link :to="{path:'/login'}">去登陆</router-link>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
    #hello{
        background:#eee;
    }
    #hello img{
        width:200px;
        height:200px;
    }
</style>
