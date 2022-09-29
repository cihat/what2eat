<script>
import SearchBar from '@/components/SearchBar.vue';
export default {
  name: "dashboard-view",
  components: {
    SearchBar
  },
  data() { },
}
</script>

<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <SearchBar />
  </div>
</template>

<style lang="scss" scoped>

</style>
