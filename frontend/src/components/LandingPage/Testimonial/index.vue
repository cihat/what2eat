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
import axios from 'axios';

export default {
    data: function() {
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
        axios.get('/data/testimonials.json')
            .then((res) => {
                this.testimonials = res.data;
            })
            .catch((err) => {
                throw new Error(err);
            })
    }
}
</script>

<style lang="scss" scoped>
    @import './index';
</style>
