<template>
  <div id="home-page">
    <Navbar/>
    <Hero />
    <PopularFood ref="sectiono" />
    <ExploreFood ref="sectiono" />
    <Service ref="sectiono" />
    <Testimonial />
    <ContactUs ref="sectiono" />
    <Footer/>
  </div>
</template>

<script>
import ContactUs from '@/components/LandingPage/ContactUs/index.vue';
import ExploreFood from '@/components/LandingPage/ExploreFood/index.vue';
import Hero from '@/components/LandingPage/Hero/index.vue';
import Footer from "@/components/LandingPage/layouts/Footer/Footer.vue";
import Navbar from "@/components/LandingPage/layouts/Navbar/Navbar.vue";
import PopularFood from '@/components/LandingPage/PopularFood/index.vue';
import Service from '@/components/LandingPage/Service/index.vue';
import Testimonial from '@/components/LandingPage/Testimonial/index.vue';
export default {
  name: 'landing-page',
  components: {
    Hero,
    PopularFood,
    ExploreFood,
    Service,
    Testimonial,
    ContactUs,
    Navbar,
    Footer
  },
}
</script>
