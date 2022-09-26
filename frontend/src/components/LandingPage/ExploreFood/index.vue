<template>
    <MixinWrapper :backgroundColor="'#FFF'" id="menu">
        <LineSubTitle />
        <SubTitle :title="'Explore Our Food'" />
        <DescSubTitle>
            Nostrud consequat amet enim sit veniam ullamco nostrud qui ex irure cupidatat quis ea non.
        </DescSubTitle>
        <div class="explore-food-wrapper">
            <template v-for="(food, index) of foods" :key="index">
                <Food :food="food" />
            </template>
        </div>
        <div class="more-button">
            <button>More</button>
        </div>
    </MixinWrapper>
</template>

<script>
import Food from '@/components/LandingPage/ExploreFood/partials/Food.vue';
import DescSubTitle from '@/components/LandingPage/mixin/DescSubTitle.vue';
import LineSubTitle from '@/components/LandingPage/mixin/LineSubTitle.vue';
import MixinWrapper from '@/components/LandingPage/mixin/MixinWrapper.vue';
import SubTitle from '@/components/LandingPage/mixin/SubTitle.vue';
import { exploreFood } from "../../../assets/dummy_data/index.js";


export default {
    data: function() {
        return {
            foods: [],
        }
    },
    components: {
        MixinWrapper,
        LineSubTitle,
        SubTitle,
        DescSubTitle,
        Food
    },
  created() {
      this.foods = exploreFood;
        // axios.get('/data/explore-food.json').then((res) => {
        //     this.foods = res.data;
        // }).catch((err) => {
        //     throw new Error(err);
        // });
    }
}
</script>

<style lang="scss" scoped>
    @import './index';
</style>
