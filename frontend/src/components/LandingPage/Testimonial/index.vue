<template>
  <MixinWrapper :backgroundColor="'#FFF'">
    <LineSubTitle />
    <SubTitle :title="'What Customer Say'" />
    <div class="testimonials-wrapper">
      <template v-for="(testimonial, index) of testimonials" :key="index">
        <Testimonial :testimonial="testimonial" />
      </template>
    </div>
  </MixinWrapper>
</template>

<script>
import LineSubTitle from '@/components/LandingPage/mixin/LineSubTitle.vue';
import MixinWrapper from '@/components/LandingPage/mixin/MixinWrapper.vue';
import SubTitle from '@/components/LandingPage/mixin/SubTitle.vue';
import Testimonial from '@/components/LandingPage/Testimonial/partials/Testimonial.vue';
import { testimonials } from "../../../assets/dummy_data/index.js";

export default {
  data: function () {
    return {
      testimonials: [],
    }
  },
  components: {
    MixinWrapper,
    LineSubTitle,
    SubTitle,
    Testimonial
  },
  created() {
    this.testimonials = testimonials;
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
