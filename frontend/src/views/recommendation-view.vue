<script>
import DinnerList from '@/components/Dinner/List.vue';
import { router } from '@/router';
import { useDinnerStore } from '@/store/dinner.store';
import { message } from 'ant-design-vue';
import { mapState } from 'pinia';
import IngredientsList from '@/components/IngredientsList.vue';
export default {
  name: "recommendation-view",
  data() { },
  computed: {
    ...mapState(useDinnerStore, ['ingredients', 'getIngredients'])
  },
  components: {
    DinnerList,
    IngredientsList
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
    <!-- <h1>Recommendation</h1> -->
    <a-row :gutter="[12,12]">
      <a-col :span="15">
        <DinnerList />
      </a-col>
      <a-col :span="9">
        <IngredientsList />
      </a-col>
    </a-row>
  </div>
</template>
  
<style lang="scss" scoped>

</style>
  