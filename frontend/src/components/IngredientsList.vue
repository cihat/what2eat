<template>
  <h3 :style="{ margin: '16px 0' }">Available Ingredients</h3>
  <a-list size="small" bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
  <h3 :style="{ marginTop: '16px' }">Unavailable Ingredients</h3>
  <a-list bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
</template>
<script>
import { defineComponent } from 'vue';
const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },

});
</script>
