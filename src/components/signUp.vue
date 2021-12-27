<template lang="html">
  <img src="../assets/resto_logo.jpeg" alt="resto logo" />
  <h3>Sign-Up</h3>
  <div class="register">
      <input type="text" v-model="name" placeholder="Enter name"><br><br>
      <input type="email" v-model="email" placeholder="Enter email"><br><br>
      <input type="password" v-model="password" placeholder="Enter password"><br><br>
      <button type="button" v-on:click="onClick">signUp</button><br><br>
      <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:'signUp',
  data(){
    return{
      name:'',
      email:'',
      password:'',
    }
  },
  methods:{
  async onClick(){
      console.log("Clicked",this.name, this.email);
      let res=await axios.post("http://localhost:3000/users",{
        name:this.name,
        email:this.email,
        password:this.password,
      });
      console.log(res);
      if(res.status==201){
        alert("SignUp Successful");
        localStorage.setItem('userInfo',JSON.stringify(res.data));
        this.$router.push({name:'home'})
    }
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
