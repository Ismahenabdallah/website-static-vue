<template>
  <div>
    <div class="contact">
<h1>Contact</h1>
<p>Feel free to drop us a line at:</p>
  <a href="#" class="link">leonagency@mail.com</a>
<div class="social">
            Find Us On Social Networks
            <img src="../assets/youtube.png" alt="">
            <img src="../assets/facebook.png" alt="">
            <img src="../assets/twitter.png" alt="">
          </div>

    </div>
  </div>
</template>
<script>
export default {
  name:"contact"
}
</script>
<style scoped>
.contact{
  background-color: #eee;
}
a{
  font-size: 40px;
   transform: scale(1);
   color:#10CAB7;
   text-decoration: none;
    font-weight: 800;
}
p {
  font-size: 44px;
  transform: scale(1);
  font-weight: 800;
}
 h1 {
 margin: 10%; 
  color: gray;
  transform: scale(3.1);
 text-transform: capitalize;
 opacity: 0.2;
}
.social{
  text-transform: capitalize;
  font-size: 18px;
  margin: 10px;
  padding: 5px;
}
img{
  width: 20px;
  height: 20px;
  margin: 5px;
}
</style>