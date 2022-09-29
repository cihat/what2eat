<script>
export default {
  name: "recommendation-view",
  components: {
  },
  data() { },
  created() {
    const ingredients = this.$route.query.ingredients;
    console.log(ingredients);
    if (ingredients?.length == 0 || ingredients == undefined) {
      this.$router.push('/dashboard');
      message.error('Please enter an ingredient');
    }
  }
}
</script>
  
<template>
  <div class="recommendation">
    <h1>Recommendation</h1>
    <span>
      {{ $route.query.ingredients }}
    </span>
  </div>
</template>
  
<style lang="scss" scoped>

</style>
  