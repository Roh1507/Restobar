<template lang="html">
<div class="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/addRest">Add Restaurant</router-link>
  
  <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<script>
export default {
  name:'Header',
methods:{
  logout(){
    localStorage.clear();
    this.$router.push({name:'login'});
  }
}
}
</script>

<style lang="css" scoped>
.nav{
  background-color: #1B6CA8;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.nav a{
  float: left;
  color:#FCE8D5;
  text-align: center;
  padding: 8px 14px;
  font-size: 14px;
  text-decoration: none;
  margin: 5px;

}
.nav a:hover{
  background-color: #FFD3E1;
  color: black;
}
</style>
