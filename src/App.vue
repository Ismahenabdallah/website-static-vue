<template>
  <div id="app">
    <div><NavBar /></div>
    <div><BackGround /></div>

    <router-view />
    <div class="footer"><FooterPage /></div>
  </div>
</template>
<script>
// @ is an alias to /src
import FooterPage from "@/components/FooterPage.vue";
import NavBar from "@/components/NavBar.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterPage,
    BackGround,
  },
};
</script>
<style lang="css">
* {
  box-sizing: border-box;
  transition: 0.3s;
  overflow-x: hidden;
}
</style>
