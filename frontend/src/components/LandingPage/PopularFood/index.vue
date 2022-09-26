<template>
  <MixinWrapper :backgroundColor="'#FFFAF7'">
    <LineSubTitle />
    <SubTitle :title="'Populer Food'" />
    <DescSubTitle>
      Nostrud consequat amet enim sit veniam ullamco nostrud qui ex irure cupidatat quis ea non.
    </DescSubTitle>
    <div class="food-wrapper">
      <template v-for="(food, index) of foods" :key="index">
        <Food :food="food" />
      </template>
    </div>
  </MixinWrapper>
</template>

<script>
import DescSubTitle from '@/components/LandingPage/mixin/DescSubTitle.vue';
import LineSubTitle from '@/components/LandingPage/mixin/LineSubTitle.vue';
import MixinWrapper from '@/components/LandingPage/mixin/MixinWrapper.vue';
import SubTitle from '@/components/LandingPage/mixin/SubTitle.vue';
import Food from '@/components/LandingPage/PopularFood/partials/Food.vue';
import { popularFood } from "../../../assets/dummy_data/index.js";


export default {
  data: function () {
    return {
      foods: [],
    }
  },
  components: {
    LineSubTitle,
    SubTitle,
    DescSubTitle,
    MixinWrapper,
    Food
  },
  created() {
    this.foods = popularFood;
  }
}
</script>

<style lang="scss">
@import './index';
</style>
