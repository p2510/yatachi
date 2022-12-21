<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        Formulaire de contact
      </p>

      <form @submit.prevent="sendEmail" class="font-general-regular space-y-7">
        <span
        v-if="isSend"
          class="
            bg-green-600 bg-opacity-70 dark:bg-opacity-50
            p-2
            sm:p-4
            text-center
            font-semibold
            text-md text-white
            rounded-lg
            tracking-wide
            w-full
          "
        >
          Votre message a été envoyé avec succès
        </span>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Votre nom</label
          >
          <input
            v-model="form.name"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Votre nom"
            aria-label="Name"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            v-model="form.email"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="email"
            name="email"
            type="email"
            required=""
            placeholder="Votre email"
            aria-label="Email"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Message</label
          >
          <textarea
            v-model="form.message"
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="Envoyer un message"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "../reusable/Button.vue";
import emailjs from "@emailjs/browser";
export default {
  components: { Button },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      isSend:false,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .send(
          "service_1ujxufi",
          "template_jofb03l",
          this.form,
          "U47Yl_oFLMbDIS_5l"
        )
        .then(
          (res) => {
            if (res.status===200) {
              this.isSend=true
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
<style lang="scss" scoped></style>
