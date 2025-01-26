<template>
  <div class="flex flex-col items-center mb-6">
    <h1 class="text-3xl font-bold text-gray-800">
      <span class="text-black">Premier</span>
      <span class="text-yellow-500">Gaming</span>
    </h1>
  </div>

  <input
      type="text"
      v-model="searchTerm"
      @input="userSearch"
      placeholder="Search for a game"
      class="w-3/4 max-w-md p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-8"
  />
</template>

<script>
export default {
  emits: ['user-search'],
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    userSearch() {
      this.$emit('user-search', this.searchTerm);
    }
  }
}
</script>
