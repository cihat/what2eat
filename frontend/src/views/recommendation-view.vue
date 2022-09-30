<script>
import { router } from '@/router';
import { useDinnerStore } from '@/store/dinner.store';
import { message } from 'ant-design-vue';
import { mapState } from 'pinia';
export default {
  name: "recommendation-view",
  data() { },
  computed: {
    ...mapState(useDinnerStore, ['ingredients', 'getIngredients'])
  },
  components: {
  },
  created() {
    if (!this.ingredients || this.ingredients.length == 0) {
      router.push({ name: "dashboard-view" });
      message.error('Please enter an ingredient');
    }
  }
}
</script>
  
<template>
  <div class="recommendation">
    <h1>Recommendation</h1>
    <span>
      {{ this.ingredients }}
    </span>
  </div>
</template>
  
<style lang="scss" scoped>

</style>
  