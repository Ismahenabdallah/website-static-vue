<template>
  <div>
   
 
 <div class="containere">
 <div class="box">
   <img src="../assets/magic-wand.png" alt="">
   <h1>Tell Us Your Idea</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias soluta totam incidunt error magnam? Nobis, porro nihil voluptatem animi saepe qui accusantium ab quisquam quis maiores aliquam autem corrupti! Unde.</p>
 </div>
 <div class="box">
   <img src="../assets/gems.png" alt="">
    <h1>We Will Do All The Work</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias soluta totam incidunt error magnam? Nobis, porro nihil voluptatem animi saepe qui accusantium ab quisquam quis maiores aliquam autem corrupti! Unde.</p>

 </div>
 <div class="box">
   <img src="../assets/asia (1).png" alt="">
    <h1>Your Product is Worldwide</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias soluta totam incidunt error magnam? Nobis, porro nihil voluptatem animi saepe qui accusantium ab quisquam quis maiores aliquam autem corrupti! Unde.</p>

 </div>
 </div>
  
  </div>
</template>
<script>

export default {
  name:"home",
  components:{
   
  }
}
</script>
<style scoped>
.containere{
  background-color: #eee;
  display:grid;
  grid-template-columns: auto auto auto;
grid-gap: 5%;

}
.box{
  margin-top: 20%;
 margin-bottom: 20%;
}
.box h1{
  font-weight: bold;
  font-size: 25px;
  color: black;
  font-family:serif;
}
.box p{
  font-family:Georgia, 'Times New Roman', Times, serif;

  color: #777777;
  font-size: 17px;
}
.box img{
  width: 50px;
  margin: 10px;
}

</style>