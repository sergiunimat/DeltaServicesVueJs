<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<template>
  <button @click="goBack" class="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition">
    Go Back
  </button>
</template>