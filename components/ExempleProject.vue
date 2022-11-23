<template>
       <div class=" px-2  sm:px-4 md:px-4 lg:px-6 rounded-md bg-gray-800 hover:bg-opacity-80 shadow-lg shadow-gray-700  hover:text-white transition ease-in-out duration-1000 w-full h-full ">
           <span class="grid grid-cols-2">
              <h3 class="col-span-full text-center p-2 sm:p-4 font-bold text-md sm:text-lg md:text-2xl text-white">{{name}}</h3>
               <blockquote class="text-center p-4 m-2 col-span-full text-white">
                    {{description}}
               </blockquote>
              <p class="text-center p-4 m-2 col-span-2">
                <a :href="link" class="p-4 drop-shadow-md  text-white bg-gray-400 rounded-full font-bold hover:bg-gray-800 hover:text-gray-400 transition ease-in-out duration-700 ">Voir la page  <strong class=" hidden">→</strong></a>
              </p>
           </span>
       </div>
</template>

<script>
export default {
    name:"ExempleProject",
    props:{
         name:{
             type:String,
             required:true

         },
         description:{
             type:String,
             required:true
         },
         link:{
             type:String,
             required:true
         },
    }
}
</script>

<style >

span:hover strong{
     display: inline;
}
span blockquote{   
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
}



</style>