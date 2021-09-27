<template>
  <div>
  
    <div class="port">
        <div class="header"> <h1>PortFlio</h1></div> 
        <div class="cardd">
 <div class="card text-start">
   <img class="card-img-top" src="../assets/portfolio-1.jpg" alt="">
   <div class="card-body">
     <h4 class="card-title">Project Here</h4>
     <p class="card-text">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
   </div>
 </div>
 <div class="card text-start">
   <img class="card-img-top" src="../assets/portfolio-2.jpg" alt="">
   <div class="card-body">
     <h4 class="card-title">Project Here</h4>
     <p class="card-text">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
   </div>
 </div>
 <div class="card text-start child3">
   <img class="card-img-top" src="../assets/portfolio-3.jpg" alt="">
   <div class="card-body">
     <h4 class="card-title">Project Here</h4>
     <p class="card-text">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
   </div>
 </div>
</div>





</div>





  </div>
</template>
<script>
export default {
  name:"PortFlio"
}
</script>

<style lang="css" scoped>

.header {
  

  color: gray;
 transform: scale(3.3);
 text-transform: capitalize;
 opacity: 0.2;
}
.header h1{
 margin-top: 5%;
  font-weight: bold;
}
.card{
  margin-left: 3%;
  width: 45%; 
  margin-top:10%;
  margin-right: 2%;
}
.port
{
   margin: 10% 0;
 background-color: #eee;
}
.port .cardd{
 
 
  display: inline-flex;
  flex-wrap: wrap;
}

</style>