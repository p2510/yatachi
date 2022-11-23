<template>
<div class="py-16 bg-white">
 
    <div v-if="$fetchState.pending" class=" flex justify-center my-8 md:my-12sm:my-16">
        <Loading />
    </div>
    <div v-else class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12">
            <div class=" lg:w-5/12">
                <img :src="link_img+data.data.img" alt="image" loading="lazy" width="" height="">
            </div>

            <div class=" lg:w-6/12">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">{{data.data.title}}</h2>
                <p class="mt-6 text-gray-600">{{convertDate(data.data.date_created)}}</p>
                <p class="mt-4 text-gray-600"> {{data.data.content}}</p>
            </div>
        </div>


        <article>
          <div v-for="(item, index) in article_content.data.id_article_content" :key="index" class="grid grid-cols-2 xl:grid-cols-3 gap-2 mt-6 "  >
              <div class=" col-span-full lg:col-span-1 xl:col-span-2 border-left border-1 border-opacity-70 border-blue-700 items-center p-2 text-slate-800">
                    <h2 class="font-bold text-opacity-90 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl pb-2">{{item.title}}</h2> 
                    <blockquote>
                      {{item.content}}
                    </blockquote>
              </div>
              
              <div class="col-span-full lg:col-span-1  flex flex-col gap-y-2  ">
                 <code v-for="(elem, val) in item.id_code" :key="val"  class="p-2 text-white text-opacity-80 bg-gray-900 bg-opacity-90 rounded-lg hover:bg-gray-800 transition duration-500 ease-in-out">
                     {{elem.code}} 
                 </code>
              </div>
          </div>


        </article>

    </div>

</div>
</template>

<script>
import moment from 'moment';
import Loading from "@/components/Loading.vue";

export default {
    name: 'IndexName',
    components: {
       Loading
    },
    layout: 'default-page',

  data() {
        return {
            data: [],
            article_content: [],
            link_img: 'https://z53upa14.directus.app/assets/',

        }
    },
    async fetch() {
        this.data = await fetch( `https://z53upa14.directus.app/items/Article/${this.$route.params.id}`)
        .then(async (res) =>{
              
              this.article_content=await fetch(`https://z53upa14.directus.app/items/Article/${this.$route.params.id}?fields=*.*.*`) // ?filter[id_article]=${this.$route.params.id}
              .then((res )=> {return res.json()})
              .catch(err=>{return err})
        

           return res.json()
          })
        .catch(err => {return err});
    },
    head: {
        title: 'Un article de yatachi ',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                name: 'description',
                content: `Vous êtes actuellement sur la page qui propose le contenu individuel `
            },
            {
                name: 'keywords',
                content: 'yatachi-code, yatachi , développeur , blog yatachi '
            },
            {
                name: 'og:language',
                property: 'fr'
            },
            {
                name: 'og:title',
                property: 'yatachi blog'
            },
            {
                name: 'robots',
                property: 'index'
            },
            {
                name: 'http-equiv',
                content: 'no-cache'
            },
        ],

    },

  

    watch: {
        '$route.query': '$fetch',
    },


    methods: {
        convertDate(date) {
            moment.locale('fr');
            return moment(date).fromNow();
        }
    },

}
</script>
