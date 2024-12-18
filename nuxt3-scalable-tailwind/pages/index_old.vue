<script lang="ts" setup>
  useHead({
    title: 'Home',
    meta: [
      { 
        name: 'description', 
        content: 'Home Nuxt 3, Flukeza07x' 
      },
      {
        name: 'keywords',
        content: 'Home, Nuxt 3, Learning Nuxt 3 Flukeza07x'
      },
    ],
  })
</script>

<template>
  <div>
    
    <section
      id="hero"
      class="bg-skin-fill sm:h-screen grid place-items-center -mt-1 sm:mt-0 hero-default"
    >
      <div
        class="container mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20"
      >
        <div class="w-full sm:w-6/12">
          <h1 class="text-4xl sm:text-6xl font-bold xl:leading-[4rem] text-skin-base">
            รัก Ironman มากๆ
          </h1>
          <p class="text-xl mt-4 mb-14 text-skin-muted">
            รัก Ironman มากๆ
          </p>
          <div class="space-x-4">
            <button class="text-2xl text-white px-4 py-3 bg-teal-700 rounded-lg">
              รัก Ironman มากๆ
            </button>
          </div>
        </div>
        <div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
          <img loading="lazy" src="~/assets/images/ironman.jpg" alt="" class="w-auto rounded-lg animate-pulse">
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>
