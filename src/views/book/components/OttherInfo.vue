<template>
  <div class="card text-center mb-3 me-5" style="width: 18rem;box-shadow: 0px 1px 10px lightgray;">
    <div class="card-body">
      <h5 class="card-title">{{data}}</h5>
      <div class="text-icon">
        <span class="material-symbols-outlined"> {{icon}} </span>
        <p>{{title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherInfo",
  props: ["title","icon","data"],
};
</script>

<style scoped>
.text-icon{
  display:flex; flex-direction:row; justify-content:center; align-items:top;
}
</style>
