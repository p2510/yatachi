<template>

<section class="text-gray-100">
  <div>
    <div v-if="$fetchState.pending" class=" flex justify-center my-8 md:my-12sm:my-16">
         <Loading   />
    </div>
    <p v-else-if="$fetchState.error">Nous avons rencontré une erreur, vous pouvez actualiser  :(</p>
    <div v-else>
      <div v-if="showData">
            <h1 class="text-gray-900 text-center font-bold text-md sm:text-3xl md:text-5xl pb-6">Mon blog</h1>
            <div class="container max-w-9xl p-6 mx-auto space-y-6 sm:space-y-12">
              <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <NuxtLink v-for="(item, index) in data.data" :key="index" rel="noopener noreferrer" :to="'/'+item.id" class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" :src="link_img+item.img">
                  <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">{{item.title}}</h3>
                    <span class="text-xs dark:text-gray-400">{{convertDate(item.date_created)}}</span>
                    <p class="text-left break-words">{{item.content.substring(0,250)+'...'}}</p>
                  </div>
                </NuxtLink>
              </div>
              <div class="flex justify-center">
                <button type="button" class="px-6  py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"  @click="$fetch"  >Rafraîchir</button>
              </div>
            </div> 
      </div>
      <Nodata v-else />
    </div>
  </div>

</section>


</template>

<script>
import moment   from 'moment';
import Loading  from "@/components/Loading.vue";
import Nodata from "@/components/Nodata.vue";

export default {
  name:'IndexName',
  components:{
    Loading,
    Nodata 
  },
  layout:'default-page',
  data() {
    return {
        data:[],
        link_img:'https://z53upa14.directus.app/assets/',
        showData:null
    }
  },
  async fetch() {
      this.data = await fetch(
        'https://z53upa14.directus.app/items/articles?sort=sort,-date_created'
      ).then(res =>res.json()).catch(err=>{return err})
   
        if (this.data.data.length>0) {
            this.showData=true
        } else {
            this.showData=false
        }  
    },
  head: {
    title: 'Bienvenue sur le blog de yatachi code , le développeur fou  ...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Vous êtes sur le blog de yatachi code , ici je partage mon avis sur le code , les technologies , ma vie et mon quotidien .'
      },
      { name: 'keywords',content:'yatachi-code, yatachi , développeur , blog yatachi '},
      { name: 'og:language',property:'fr'},
      { name: 'og:title',property:'yatachi blog'},
      { name: 'robots',property:'index'},
      { name: 'http-equiv',content:'no-cache'},

    ],
    
  },



  watch: {
    '$route.query': '$fetch'
  },

  methods:{
        convertDate(date){
            moment.locale('fr');
            return moment(date).fromNow();
        },

    },

}
</script>
