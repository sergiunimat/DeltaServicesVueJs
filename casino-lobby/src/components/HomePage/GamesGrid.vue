<script>
import GameCardHeader from "@/components/GameCard/GameCardHeader.vue";
import GameCardBody from "@/components/GameCard/GameCardBody.vue";
import {Path} from "@/constants/routes";

export default {
  components: {GameCardBody, GameCardHeader},
  props: ['games'],
  methods: {
    selectGame(gameId) {
      this.$router.push(`${Path.game}/${gameId}`)
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6">
    <div
        v-for="(game, index) in games"
        :key="index"
        @click="selectGame(game.id)"
        class="border p-4 w-64 h-80 flex flex-col items-center justify-start bg-white rounded-lg shadow-md transform transition-transform duration-100 hover:scale-105"
    >
      <game-card-header :title="game.title" />
      <game-card-body :alt="game.title" :img-u-r-i="game.game_thumbnail" />
    </div>
  </div>
</template>
