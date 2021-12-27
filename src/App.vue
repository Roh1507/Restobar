<template>
<router-view  />
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}

body{
  padding: 0;
  margin: 0;
  background-color: #FCE8D5;
}
.register input, .login input, .addRest input{
  width: 200px;
  height: 25px;
display: initial;
padding: 5px;
border: 2px solid #35589A;
}
.register button, .login button, .addRest button{
  background-color: #8267BE; /* Green */
  border: none;
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

.register button:hover{
  background-color: #406882;
  color: white;
}
.login button:hover{
  background-color: #406882;
  color: white;
}
.addRest button:hover{
  background-color: #406882;
  color: white;
}

img{
  height: 98px;
      border-radius: 50%;
      width: 98px;
  }
</style>
