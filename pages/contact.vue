<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  head() {
    return {
      title: "Yatachi code -Contact ",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Vous avez un projet et vous souhaitez vous faire accompagner par quelqu'un ?  Vous pouvez désormais contacter Yatachi code",
        },
      ],
    };
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "MAROC , casablanca sidi maarouf",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "poupoinaka03@domain.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "+212 600 670 388",
          icon: "phone",
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
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
