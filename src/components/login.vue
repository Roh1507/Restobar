<template lang="html">
<img src="../assets/resto_logo.jpeg" alt="resto logo" />
  <h3>Login</h3>
  <div class="login">

<input type="email" v-model="email" placeholder="Enter email"><br><br>
    <input type="password" v-model="password" placeholder="Enter password"><br><br>
    <button type="button" v-on:click="login">Login</button><br><br>
    <router-link to="/signUp">SignUp</router-link>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data(){
    return{
      email:'',
      password:'',
    }
  },
  methods:{
  async  login(){
      let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
        if(result.status==200 && result.data.length>0){
          alert("Login Successful");
          localStorage.setItem('userInfo',JSON.stringify(result.data[0]));
          this.$router.push({name:'home'})
      }
    console.log(result);
    }
  },
  mounted(){
    let user=localStorage.getItem('userInfo');
    if(user){
      this.$router.push({name:'home'});
    }
  }
}
</script>

<style lang="css" scoped>
img{
  margin-top: 60px;
}
</style>
