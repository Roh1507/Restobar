<template lang="html">
  <Header />
<h3> Welcome to Update Restaurant Page</h3>
<form class="addRest">
<input type="text" placeholder="Enter name" v-model="resto.name" name="name"><br><br>
<input type="text"  placeholder="Enter address" v-model="resto.addr" name="addr"><br><br>
<input type="number" placeholder="Enter number" v-model="resto.contact" name="contact"><br><br>
<button type="button" v-on:click="update">Update Restaurant</button>
</form>

</template>

<script>
import axios from 'axios'
import Header from './header.vue'
export default {
  name:'update',
  components:{
    Header,
      },
    data(){
      return{
        resto:{
        name:'',
        addr:'',
        contact:'',
      }
      }
    },
    methods:{
      async  update(){
      let result=await axios.put("http://localhost:3000/restobar/"+this.$route.params.id,{
          name:this.resto.name,
          addr:this.resto.addr,
          contact:this.resto.contact,
        });
        console.log(result);
        if(result.status ==200){
          alert("Sucessfully updated Restaurant");
          this.$router.push({name:'home'});
        }
      }
    },

  async mounted(){
    let user=localStorage.getItem('userInfo');
    if(!user){
      this.$router.push({name:'signUp'});
    }
    const res=await axios.get('http://localhost:3000/restobar/'+this.$route.params.id);
    this.resto= res.data;
  }
}
</script>

<style lang="css" scoped>
</style>
