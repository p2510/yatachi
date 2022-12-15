<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  head() {
    return {
      title: "Yatachi code - Bienvenue ",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Bienvenue chez Yatachi coce , le développeur web full stack qui vous permet de matérialiser votre projet web rapidement .",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "http://yatachi-code.org/images/web-project-1.png",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "http://yatachi-code.org/images/web-project-2.png",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "http://yatachi-code.org/images/web-project-3.png",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "http://yatachi-code/images/ui-project-1.png",
        },
      ],
    };
  },
  components: { AppBanner, Button },
};
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

    <ProjectsGrid />

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="More Projects"
      >
        <Button title="Plus de projets" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
