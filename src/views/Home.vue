<script setup>
import HomeNav from "@/components/navs/HomeNav.vue";
import HeroContent from "@/components/hero/HeroContent.vue";
import GetStartedForm from "@/components/forms/GetStartedForm.vue";
import HomeSection from "@/components/home-section/HomeSection.vue";
import HomeSectionHeadings from "@/components/home-section/HomeSectionHeadings.vue";
import BaseAccordion from "@/components/ui/accordion/BaseAccordion.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <div>
    <section :class="classes.hero">
      <div class="container">
        <HomeNav />
        <HeroContent />
      </div>
    </section>
    <HomeSection>
      <HomeSectionHeadings
        heading="Watch on your tv"
        subHeading=" Watch on smart-tv:s, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray-players and many more."
      />
      <div :class="classes.imgContainer">
        <img src="@/assets/images/tv2.png" alt="tv" :class="classes.outsideImg" />
        <video
          src="@/assets/videos/video1.mp4"
          playsinline
          autoplay
          muted
          loop
          :class="classes.inside"
        ></video>
      </div>
    </HomeSection>
    <HomeSection>
      <div :class="classes.imgContainer">
        <img src="@/assets/images/phone.png" alt="tv" :class="classes.phoneOutside" />
        <img
          src="@/assets/images/netflix-phone.jpg"
          playsinline
          autoplay
          muted
          loop
          :class="classes.phoneInside"
        />
      </div>
      <HomeSectionHeadings
        heading="Download your programmes to watch offline."
        subHeading="Save your favourites so that you always have something to watch."
      />
    </HomeSection>
    <HomeSection>
      <HomeSectionHeadings
        heading="Watch anywhere."
        subHeading="Stream unlimited movies and series on mobile, tablet, pc and tv without paying extra."
      />
      <div :class="classes.imgContainer">
        <img src="@/assets/images/imac.png" alt="tv" :class="classes.outsideImg" />
        <video
          src="@/assets/videos/video2.mp4"
          playsinline
          autoplay
          muted
          loop
          :class="classes.insideImac"
        ></video>
        <img
          src="@/assets/images/iphone-netflix.png"
          alt="tv"
          :class="classes.imacOutsideIphone"
        />
      </div>
    </HomeSection>
    <HomeSection>
      <div :class="classes.faqWrapper">
        <h3 :class="classes.accordionHeading">FAQ</h3>
        <BaseAccordion />
        <h3 :class="classes.formHeading">
          Ready to start watching? Fill in your e-mail to create an account.
        </h3>
        <div :class="classes.faqFormWrapper">
          <GetStartedForm />
        </div>
      </div>
    </HomeSection>
    <HomeSection>
      <Footer />
    </HomeSection>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/home';
</style>
