<template>
  <div class="main-container">
    Book
    <div class="top-container">
        <img src="../assets/logo.svg" height="120" width="100"/>
        <table>
          <tr>
            title
            <td>kk{{book}}</td>
          </tr>
        </table>  
    </div>
  </div>
</template>

<script>
import axiosInstance from "../axios/axios";

export default {
  name: "BookDetail",
  props:['book'],
};
</script>

<style>
.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.top-container {
  background: #f8f8f8;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  
}
</style>