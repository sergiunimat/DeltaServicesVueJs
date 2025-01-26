<script>
export default {
  props: ['alt', 'imgURI'],
}
</script>

<template>
  <div class="flex-1 w-full">
    <img
        :src="imgURI"
        :alt="alt"
        class="w-full h-48 object-cover rounded-md"
    />
  </div>
</template>
