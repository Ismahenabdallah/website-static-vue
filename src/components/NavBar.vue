<template>
 <div id="nav">
  <nav class="navbar navbar-expand-lg navbar-light  bg-white">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
          <img src="../assets/logo.png" alt="">
   

      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active " to="/">Home</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/service" >
           service
          </router-link>
        
        </li>

        <li class="nav-item ">
          <router-link class="nav-link" to="/PortFlio" >
           PortFlio
          </router-link>
        
        </li>
        
         <li class="nav-item">
          <router-link class="nav-link " to="/about"  >about</router-link>
        </li>
         <li class="nav-item ">
          <router-link class="nav-link" to="/contact" >
           contact
          </router-link>
   </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 " type="search"  placeholder="Search" >
        <button class="btn  " type="submit">logout</button>
      </form>
    </div></div>

   
</nav>
    </div>
</template>
<script>
export default {
  name:"NavBar"

}
</script>


<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


 

  #nav  a {
    text-transform: capitalize;
    font-weight: bold;
    color: #2c3e50;
  }
   
#nav a.router-link-exact-active {
  color: #10CAB7;
   
  
} 
.collapse img{
  width: 5%;
  height: 50%;
  margin: 5px;
  background-size: cover;
}
button
{
   text-align: center;
   width:fit-content;
}
button:hover{
  background-color: #10CAB7;
}

</style>

