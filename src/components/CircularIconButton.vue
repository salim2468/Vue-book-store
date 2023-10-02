UploadBookImage<template>
  <div class="circular-button" @click="onPress">
    <span
      class="material-symbols-outlined"
    >
      {{icon}}
    </span>
  </div>
</template>

<script>
export default {
  name: "CircularIconButton",
  props: ["icon"],
  methods:{
    onPress(){
      this.$emit('buttonPress');
    }
  }
};
</script>

<style scoped>
.circular-button {
  height: 50px;
  width: 50px;
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 4px;
}
.circular-button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  background: grey;
}
</style>
