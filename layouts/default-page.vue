<template>
  <div>
    <nav class="container mx-auto px-auto  sm:mt-2">
      <div class="flex flex-col  sm:flex-row sm:justify-between justify-center">
            <figure class="sm:basis-1/6 basis-full">   
                    <NuxtLink to="/"  >
                    <h2 class="block sm:hidden pt-4 font-bold text-neutral-800 sm:text-md hover:text-blue-500  animation easing-out duration-500 ">YATACHI-CODE</h2>
                    <img src="~/assets/img/logo.png" class="hidden sm:block sm:w-full sm:h-full" alt="logo">
                    </NuxtLink> 
            </figure>         
            <div class=" pt-6 sm:pt-0 grid grid-cols-2 sm:content-center gap-y-4 sm:gap-x-6 sm:basis-2/6 ">
                    <NuxtLink to="/galerie"  class="col-span-1 font-sans sm:p-2 md:p-2 text-neutral-800 sm:text-md hover:text-blue-500  animation easing-out duration-500 ">Ma galerie</NuxtLink>
                    <NuxtLink to="/blog"> <BtnLink title="Blog" /></NuxtLink> 
            </div>
      </div>
    </nav>
    <Nuxt />
    <footer class="bg-blue-500 py-16 sm:py-24 md:py-40 mx-auto "> 
           <p class="text-center text-white font-bold text-2xl pt-4 pb-8">Vivre et comprendre l'innovation </p>
           <div>
              <ul  class="flex justify-center gap-x-6 mx-4">
                <li class="border rounded-full mx-2  p-2 sm:p-4  text-slate-900   hover:text-white hover:bg-slate-900 cursor-pointer transition ease-out duration-500">
                 <a href="mailto:poupoinaka03@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M242.1 275.6l-18.2-13.7-.1-.1c-5.8-4.6-10-8.3-10-14.7 0-7 5-11.8 10.9-17.4l.5-.4c20-15.2 44.7-34.3 44.7-74.6 0-26.9-11.9-44.7-23.3-57.7h13L320 64H186.5c-25.3 0-62.7 3.2-94.6 28.6l-.1.3C70 110.9 57 137.4 57 163.5c0 21.2 8.7 42.2 23.9 57.4 21.4 21.6 48.3 26.1 67.1 26.1 1.5 0 3 0 4.5-.1-.8 3-1.2 6.3-1.2 10.3 0 10.9 3.6 19.3 8.1 26.2-24 1.9-58.1 6.5-84.9 22.3-39.4 22.7-42.5 56-42.5 65.6 0 38.2 35.7 76.8 115.5 76.8 91.6 0 139.5-49.8 139.5-99 0-37.1-22.8-55.6-44.9-73.5zM116.7 139.9c0-13.4 3-23.5 9.3-30.9 6.5-7.9 18.2-13.1 29-13.1 19.9 0 32.9 15 40.4 27.6 9.2 15.5 14.9 36.1 14.9 53.6 0 4.9 0 20-10.2 29.8-7 6.7-18.7 11.4-28.6 11.4-20.5 0-33.5-14.7-40.7-27-10.4-17.8-14.1-38.2-14.1-51.4zM237.8 368c0 27.4-25.2 44.5-65.8 44.5-48.1 0-80.3-20.6-80.3-51.3 0-26.1 21.5-36.8 37.8-42.5 18.9-6.1 44.3-7.3 50.1-7.3 3.9 0 6.1 0 8.7.2 36.6 25.2 49.5 36.1 49.5 56.4z" fill="currentColor"></path><path d="M402 142V64h-34v78h-80v34h80v81h34v-81h78v-34z" fill="currentColor"></path></svg></a> 
                </li>
                <li class="border rounded-full mx-2  p-2 sm:p-4  text-slate-900   hover:text-white hover:bg-slate-900 cursor-pointer transition ease-out duration-500">
                 <a href="https://www.instagram.com/this_is_yatachi/?hl=fr" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z"></path></svg></a> 
                </li>

              </ul>
               
           </div>
           <p class="text-center py-8 text-white text-opacity-70">
                 Yatachi code 2022 - <a class="underline" href="https://changepro.ma">changepro</a> 
           </p>
    </footer>
  </div>
</template>
<script>
import BtnLink from "@/components/BtnLink.vue"
export default {
  components:{BtnLink},
}
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Bellefair&family=Hubballi&family=Josefin+Sans:wght@600&family=Oswald:wght@500&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(59, 130 ,246);
}
  
    html::-webkit-scrollbar {
      width: 8px;
      
    }

    html::-webkit-scrollbar-thumb {
      background-color: #1f2937;
    }

    html::-webkit-scrollbar-thumb:hover {
      background-color: #1f2937;
    }

    html::-webkit-scrollbar-track {
      background-color: white;
    }

    html::-webkit-scrollbar-track:hover {
      background-color: white;
    }
    footer p{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
</style>



