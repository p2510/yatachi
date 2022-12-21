<script>
import feather from "feather-icons";


export default {
  name: "About",
  scrollToTop: true,
  head() {
    return {
      title: "Yatachi code - à propopos de moi ",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Découvrez qui est yatachi code er comment quelles technologies il utilise au quotidien dans son environnement de développement . ",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "http://localhost:3000/_nuxt/static/profile.jpg",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div>
    <AboutMe class="container mx-auto" />
    <AboutCounter />
    <AboutTools class="container mx-auto" />
  </div>
</template>

<style scoped></style>
