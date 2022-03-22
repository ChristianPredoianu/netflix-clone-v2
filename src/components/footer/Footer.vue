<template>
  <footer :class="classes.footer">
    <div class="container">
      <h4>This site is powered by:</h4>
      <img
        src="@/assets/images/themoviedblogo.svg"
        alt="the movie db"
        :class="classes.footerImg"
      />
      <h4>This product uses the TMDb API but is not endorsed or certified by TMDb</h4>
      <h5 :class="classes.pngCredit">
        Png:s on this site are from
        <a
          href="https://www.freepnglogos.com/pics/tv"
          class="footer__attribution"
          target="_blank"
          rel="noopener"
          >Freepnglogos</a
        >
      </h5>
    </div>
  </footer>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/footer/footer';
</style>
