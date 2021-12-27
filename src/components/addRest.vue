<template lang="html">
  <Header />
<h3>  Welcome to Add Restaurant Page</h3>
<form class="addRest">
<input type="text" placeholder="Enter name" v-model="name" name="name"><br><br>
<input type="text"  placeholder="Enter address" v-model="addr" name="addr"><br><br>
<input type="number" placeholder="Enter number" v-model="contact" name="contact"><br><br>
<button type="button" v-on:click="addResto">Add Restaurant</button>
</form>

</template>

<script>
import Header from './header.vue'
import axios from 'axios'
export default {
  name:'addRest',
  components:{
    Header,
  },
  data(){
    return{
      name:'',
      addr:'',
      contact:'',
    }
  },
  methods:{
    async addResto(){
      console.log(this.name, this.addr, this.contact);
      let result=await axios.post("http://localhost:3000/restobar",{
        name:this.name,
        addr:this.addr,
        contact:this.contact,
      });
      console.log(result);
      if(result.status ==201){
        alert("Sucessfully added Restaurant");
      }
    }
  },
  mounted(){
    let user=localStorage.getItem('userInfo');
    if(!user){
      this.$router.push({name:'signUp'});
    }
  }
}
</script>

<style lang="css" scoped>
</style>
