<script setup>
import HomeNav from '@/components/navs/HomeNav.vue';
import HeroContent from '@/components/hero/HeroContent.vue';
import GetStartedForm from '@/components/forms/GetStartedForm.vue';
import HomeSection from '@/components/home-section/HomeSection.vue';
import HomeSectionHeadings from '@/components/home-section/HomeSectionHeadings.vue';
import BaseAccordion from '@/components/ui/accordion/BaseAccordion.vue';
</script>

<template>
  <div>
    <div :class="classes.hero">
      <div class="container">
        <HomeNav />
        <HeroContent />
      </div>
    </div>
    <HomeSection>
      <div class="container">
        <div :class="classes.homeWrapper">
          <HomeSectionHeadings
            heading="Watch on your tv"
            subHeading=" Watch on smart-tv:s, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray-players and many more."
          />
          <div :class="classes.imgContainer">
            <img
              src="@/assets/images/tv2.png"
              alt="tv"
              :class="classes.outsideImg"
            />
            <video
              src="@/assets/videos/video1.mp4"
              playsinline
              autoplay
              muted
              loop
              :class="classes.inside"
            ></video>
          </div>
        </div>
      </div>
    </HomeSection>
    <HomeSection>
      <div class="container">
        <div :class="classes.homeWrapper">
          <div :class="classes.imgContainer">
            <img
              src="@/assets/images/phone.png"
              alt="tv"
              :class="classes.phoneOutside"
            />
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
        </div>
      </div>
    </HomeSection>
    <HomeSection>
      <div class="container">
        <div :class="classes.homeWrapper">
          <HomeSectionHeadings
            heading="Watch anywhere."
            subHeading="Stream unlimited movies and series on mobile, tablet, pc and tv without paying extra."
          />
          <div :class="classes.imgContainer">
            <img
              src="@/assets/images/imac.png"
              alt="tv"
              :class="classes.outsideImg"
            />
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
        </div>
      </div>
    </HomeSection>
    <HomeSection>
      <div class="container">
        <div :class="classes.faqWrapper">
          <h2 :class="classes.accordionHeading">FAQ</h2>
          <BaseAccordion />
          <h3 :class="classes.formHeading">
            Stream unlimited movies and series on mobile, tablet, pc and tv
            without paying extra.
          </h3>
          <div :class="classes.faqFormWrapper">
            <GetStartedForm />
          </div>
        </div>
      </div>
    </HomeSection>
    <HomeSection>
      <div class="container">
        <h4 :class="classes.credit">
          Png:s on this site are from
          <a
            href="https://www.freepnglogos.com/pics/tv"
            class="footer__attribution"
            target="_blank"
            rel="noopener"
            >Freepnglogos</a
          >
        </h4>
      </div>
    </HomeSection>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/home';
</style>
