<template>
  <MixinWrapper :backgroundColor="'#FFFAF7'" id="service">
    <LineSubTitle />
    <SubTitle :title="'Our Service'" />
    <DescSubTitle>
      Nostrud consequat amet enim sit veniam ullamco nostrud qui ex irure cupidatat quis ea non.
    </DescSubTitle>
    <div class="service-wrapper">
      <div class="left-side">
        <Section :reverse="false">
          <IconService :icon="'brunch_dining'" />
          <TextService :title="'Advance table booking'" :reverse="false" />
        </Section>
        <Section :reverse="true">
          <IconService :icon="'restaurant'" />
          <TextService :title="'Food for free'" :reverse="true" />
        </Section>
      </div>
      <!-- <div class="right-side">
        <IconServiceWithText />
      </div> -->
    </div>
  </MixinWrapper>
</template>

<script>
import DescSubTitle from '@/components/LandingPage/mixin/DescSubTitle.vue';
import LineSubTitle from '@/components/LandingPage/mixin/LineSubTitle.vue';
import MixinWrapper from '@/components/LandingPage/mixin/MixinWrapper.vue';
import SubTitle from '@/components/LandingPage/mixin/SubTitle.vue';
import IconService from '@/components/LandingPage/Service/partials/IconService.vue';
import IconServiceWithText from '@/components/LandingPage/Service/partials/IconServiceWithText.vue';
import Section from '@/components/LandingPage/Service/partials/Section.vue';
import TextService from '@/components/LandingPage/Service/partials/TextService.vue';

export default {
  components: {
    LineSubTitle,
    SubTitle,
    DescSubTitle,
    MixinWrapper,
    IconServiceWithText,
    TextService,
    IconService,
    Section
  }
}
</script>

<style lang="scss" scoped>
.service-wrapper {
  display: flex;
  justify-content: space-between;

  .left-side {
    width: 53%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right-side {
    width: 43%;
  }
}

@media screen and (max-width: 991px) {
  .service-wrapper {
    display: flex;
    flex-direction: column-reverse;

    .left-side {
      width: 100%;
    }

    .right-side {
      width: 100%;
    }
  }
}
</style>
