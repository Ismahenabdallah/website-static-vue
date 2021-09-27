<template>
  <div>
<div class="about">
   <div class="header"> <h1>About</h1></div>
   <div class="row">
     <div class="col-md-6 one" >
       <div class="onee"></div>
       <img src="../assets/about.jpg" alt=""></div>
    
   <div class="col-md-6">
     <p class="p1">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non, fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!
     </p>
     <hr>
     <p class="p2 text-start text-muted">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quidem voluptatum vel laboriosam consequuntur maiores ratione enim officia quibusdam ad iste, dolores numquam eos minima, rem nemo neque atque commodi!
     </p>
   </div>
   </div>
</div>

</div>

</template>
<script>
export default {
  name:"about"
}
</script>
<style lang="css" scoped>
.onee{
  width: 100px;
  height: 80vh;
  background-color: #eee;
}
.one{
  display: inline-flex;
}
 img{
position: relative;
width: 280px ;
height: 380px;
margin-top: 5%;
transform: translateX(-18%);
}



.p1{
   font-weight: bold;
   font-size: 18px;
 margin-top: 18%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: start;
 
 } 
 hr{
  width: 50%;
height: 3px;
  background-color:  #10cab7;
 }
.header {
  color: gray;
 transform: scale(3.3);
 text-transform: capitalize;
 opacity: 0.2;
 margin: 10%; 

}

.header h1{
 
  font-weight: bold;
}
</style>