<template>
  <div>
      <button class="text-md sm:p-2 md:py-2 w-full md:x-4 ring-2 ring-blue-500 rounded-full text-blue-500  hover:bg-blue-500 hover:text-white animation easing-out duration-500">{{title}}</button>
  </div>
</template>

<script>
export default {
     name:"BtnLink",
     props:{
       title:{type:String,required:true},
       
     }
}
</script>

<style>

</style>