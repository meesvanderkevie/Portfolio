<script>
  import SocialBar from "@/components/SocialBar.vue";
  import Header from "@/components/Header.vue";
  import ContactForm from "@/components/ContactForm.vue";
  import Kaarten from "@/components/Kaarten.vue";
  export default {
    components: {
      SocialBar,
      Header,
      ContactForm,
      Kaarten
    }
  }

</script>

<template>
  <div class="welkomsttekst">
    <h1>Hallo, ik ben Mees van der Kevie</h1>
    <p>Welkom bij mijn portfolio.</p>

    <SocialBar />
  </div>

  <ContactForm />

  <Kaarten />

</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  h1 {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.7rem;
  }
  
  p {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }

  .welkomsttekst {
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }

</style>