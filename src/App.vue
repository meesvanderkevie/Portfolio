<script>
  import SocialBar from "./components/SocialBar.vue";
  import Header from "./components/Header.vue";
  export default {
    components: {
      SocialBar,
      Header
    }
  }

</script>

<template>
  <Header/>
  <div class="welkomsttekst">
    <h1>Hallo, ik ben Mees van der Kevie</h1>
    <p>Welkom bij mijn portfolio.</p>

    <SocialBar />
  </div>
</template>

<style scoped>
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  .welkomsttekst {
    margin-top: 5rem;
    text-align: center;
    letter-spacing: 0.1rem;
    line-height: 1rem;
  }
</style>