<template>
    <MixinWrapper :backgroundColor="'#FFFAF7'" id="contact">
        <div class="contact-us-wrapper">
            <div class="contact-us">
                <LineSubTitle />
                <SubTitle :title="'Contact Us'"/>
                <form>
                    <div class="form-group">
                        <input type="text" placeholder="Your name">
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your email">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>

            <div class="circle1"></div>
            <div class="circle2"></div>
        </div>
    </MixinWrapper>
</template>

<script>
import LineSubTitle from '@/components/LandingPage/mixin/LineSubTitle.vue';
import MixinWrapper from '@/components/LandingPage/mixin/MixinWrapper.vue';
import SubTitle from '@/components/LandingPage/mixin/SubTitle.vue';

export default {
    components: {
        MixinWrapper,
        LineSubTitle,
        SubTitle,
    }
}
</script>

<style lang="scss" scoped>
    @import './index';
</style>
