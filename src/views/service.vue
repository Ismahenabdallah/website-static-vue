<template>
  <div>
<div class="header"> <h1>service</h1></div> 
<div class="conta">
<div class="one">
  <div class="row">
    <div class="col-md-2">
      <img src="../assets/color-palette.png" alt=""></div>
     <div class="col-md-4">
       <h1>Graphic Design</h1>
<p>Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration.</p>
     </div>
    </div>
  </div>
  

<div class="one">
    <div class="row">
        <div class="col-md-2">
      <img src="../assets/frame.png" alt=""></div>
     <div class="col-md-4">
       <h1>Web Design</h1>
<p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p> </div>
    </div>
</div>
<div class="one">
    <div class="row">  <div class="col-md-2">
      <img src="../assets/ux.png" alt=""></div>
     <div class="col-md-4">
       <h1>UI & UX</h1>
<p>

Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction.

</p> </div></div>
</div>
<div class="one">
    <div class="row">  <div class="col-md-2">
      <img src="../assets/programming.png" alt=""></div>
     <div class="col-md-4">
       <h1>Web Development</h1>
<p>Web development is a broad term for the work involved in developing a web site for the Internet or an intranet.

</p>   </div></div>
</div></div>
  </div>
</template>
<script>
export default {
  name:"service"
}
</script>
<style scoped>
.header h1{
  margin: 10%;
  color: gray;
 transform: scale(4.3);
 text-transform: capitalize;
 opacity: 0.2;
 font-weight: bold;
}
.conta{
  display: grid;
  grid-template-columns: auto auto ;

}
.col-md-2 img{
  width:50px;
  height: 50px;
}
.one{
  width: 200%;
}
.conta h1{
 text-align: left;
  font-size: bold;
  font-size: 22px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
}
p{
  text-align: left;
}

</style>