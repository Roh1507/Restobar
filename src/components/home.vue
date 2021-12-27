<template lang="html">
  <Header />
  <h3> Hello {{name}}, Welcome to Home Page</h3><br><br>

  <table  class="center" border="1px solid" >
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>address</th>
      <th>Contact</th>
      <td>Action</td>
    </tr>
    <tr v-for="item in resto" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.addr}}</td>
      <td>{{item.contact}}</td>
      <td><router-link :to="'/update/'+item.id">Update</router-link>&nbsp;
      <button v-on:click="deleteResto(item.id)">Delete</button></td>
    </tr>
  </table>

</template>

<script>
import axios from "axios"
import Header from './header.vue'
export default {
  name:'home',

  data(){
    return{
      name:'',
      resto:[],
    }
  },
  components:{
    Header,
  },
  methods:{
    async deleteResto(id){
    let res= await axios.delete("http://localhost:3000/restobar/"+id);
    if(res.status==200){
        this.loadData();
    }
    }
  },
async loadData(){
  let user=localStorage.getItem('userInfo');
  this.name= JSON.parse(user).name;
  if(!user){
    this.$router.push({name:'signUp'});
  }
  let res= await axios.get("http://localhost:3000/restobar");
  console.log(res);
  this.resto=res.data;
},

   mounted(){
    this.loadData();
}
}
</script>

<style lang="css" scoped>
table{
  margin-left: auto;
  margin-right: auto;
}
td{
  width: 160px;
  height: 40px;

}

</style>
