<script>
export default {
  props: ['imgSrc', 'title', 'description'],
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-4">
    <div class="text-center">
      <img
          :src="imgSrc"
          :alt="title"
          class="w-80 h-auto rounded-lg shadow-lg mx-auto"
      />

      <h2 class="text-3xl font-semibold mt-6">{{ title }}</h2>

      <div
          class="w-full max-w-4xl mx-auto mt-6 px-8 py-4 
             text-lg leading-relaxed text-white 
             bg-black bg-opacity-50 rounded-lg backdrop-blur-md 
             overflow-y-auto max-h-60">
        <p v-html="description"></p>
      </div>
    </div>
  </div>
</template>