<template>
      <table style="margin:18px 8px; width:200px;" >
        <tr>
          <td
            style="display: flex; justify-content: center; align-items: center;"
          >
          <img v-if="author.attributes.image"
              :src="author.attributes.image" 
              alt="image"
              style="height: 90px; width:90px; object-fit: cover; border-radius:50%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
            />
            <img v-else
              src="../assets/person2.jpg" 
              alt="image"
              style="height: 90px; width:90px; object-fit: cover; border-radius:50%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
            />
          </td>
        </tr>
        <tr>
          <td style="text-align:center">{{ author.attributes.name }}</td>
        </tr>
      </table>


</template>

<script>

export default {
  name: "AuthorCard",
  props:['author'],
}
</script>

<style scoped>
 
</style>
