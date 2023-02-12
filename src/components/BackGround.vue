<template>
<div class="img">
    <div class="header">
      <h1>hello three</h1>
      <p>We are Leon - Super Creative & Minimal Agency Web Template</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BackGround",
};
</script>
<style lang="css" scoped>
.img {
  background-image: url("../assets/landing.jpg");
  background-position: center;
  background-size: cover;
  width: 250vh;
  height: 70vh;
  margin-top: 10px;
}
h1 {
  text-align: center;
  color: #10cab7;
  text-transform: capitalize;
  font-size: 50px;
}
p {
  font-size: 20px;
  width: 300px;
  text-align: center !important;
  margin-left: 40%;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.header {
  transform: translateY(100px);
}
</style>
