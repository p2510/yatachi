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
    <div v-else class="grid grid-cols-6 gap-4  -m-4">
    <div v-for="(item, index) in data.data" :key="index" class="col-span-full md:col-span-3 lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" :src="link_img+item.img" :alt="item.title" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><strong class="text-blue-600 ">{{item.title}}</strong> / {{item.subtitle}}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{item.description}}</p>
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