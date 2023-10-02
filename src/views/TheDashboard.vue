<template>
 <TheNav />
  <div class="con">
    <SideBar />
    <router-view> </router-view>
  </div>
</template>



<script>
import TheNav from "../components/TheNav.vue";
import SideBar from "../components/SideBar.vue";

export default {
name:'TheDashboard',
  components: { TheNav, SideBar },

}
</script>

<style scoped>
.con {
  display: flex;
  margin-inline: 0 !important;
  padding-inline: 0 !important;
}
</style>