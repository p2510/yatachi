<template>
<div class="py-16 bg-white">  

  <div v-if="$fetchState.pending" class=" flex justify-center my-8 md:my-12sm:my-16">
         <Loading  />
  </div>
  <div v-else class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img :src="link_img+data.data.img" alt="image" loading="lazy" width="" height="">
        </div>
        
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">{{data.data.title}}</h2>
          <p class="mt-6 text-gray-600">{{convertDate(data.data.date_created)}}</p>
          <p class="mt-4 text-gray-600"> {{data.data.content}}</p>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';
import Loading  from "@/components/Loading.vue";

export default {
  layout:'default-page',
  name:'IndexName',
  components:{
    Loading
  },
  head: {
    title: 'Un article de yatachi ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: `Vous êtes actuellement sur la page qui propose le contenu individuel `
      },
      { name: 'keywords',content:'yatachi-code, yatachi , développeur , blog yatachi '},
      { name: 'og:language',property:'fr'},
      { name: 'og:title',property:'yatachi blog'},
      { name: 'robots',property:'index'},
      { name: 'http-equiv',content:'no-cache'},
    ],
    
  },

  data() {
    return {
        data:[],
        link_img:'https://z53upa14.directus.app/assets/',
       
    }
  },

  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
      this.data = await fetch(
        `https://z53upa14.directus.app/items/Article/${this.$route.params.id}`
      ).then(res => res.json()).catch(err=>{return err})
    },

  methods:{
        convertDate(date){
            moment.locale('fr');
            return moment(date).fromNow();
        }
    }

}
</script>
