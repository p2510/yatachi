<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Retrouvez les instants de yatachi </h1>
      <cite class="lg:w-2/3 mx-auto leading-relaxed text-base">Mes souvenirs les plus chers, je les range bien à l'abri dans mon coeur, et je ferme la porte à clé. Pour que personne ne me les vole. Pour les empêcher de se faner à la lumière du soleil. Pour éviter que les intempéries ne les abîment. " De <strong>Ito Ogawa</strong></cite>
    </div>
    <div v-if="$fetchState.pending" class=" flex justify-center my-8 md:my-12sm:my-16">
         <Loading />
    </div>
    <div v-else class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4" v-for="(item, index) in data.data" :key="index" >
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="link_img+item.img">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{{item.title}}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{item.subtitle}}</h1>
            <p class="leading-relaxed">{{item.description}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</template>

<script>
import Loading  from "@/components/Loading.vue";

export default {
  layout:'default-page',
  name:'Galerie',
  components:{
    Loading
  },

    head: {
    title: 'Bienvenue sur la galerie de yatachi code , le développeur fou  ...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Ici vous trouverez les moments de ma vie , mon quotdien et aussi je d\'autres contenus'
      },
      { name: 'keywords',content:'yatachi-code, yatachi , développeur , blog yatachi '},
      { name: 'og:language',property:'fr'},
      { name: 'og:title',property:'yatachi gallerie'},
      { name: 'robots',property:'index'},
      { name: 'http-equiv',content:'no-cache'},

    ],
    
  },

  data() {
    return {
        data:[],
        link_img:'https://z53upa14.directus.app/assets/'
    }
  },

  watch: {
    '$route.query': '$fetch'
  },
  
  async fetch() {
    this.data = await fetch(
        'https://z53upa14.directus.app/items/galerie?sort=sort,-date_created'
    ).then(res => res.json()).catch(err=>{return err})
  },

}
</script>

<style>

</style>