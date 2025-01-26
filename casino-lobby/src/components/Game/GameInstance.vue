<script>
import NotFound from "@/components/Game/NotFound.vue";
import GameBody from "@/components/Game/GameBody.vue";
import GoBackBtn from "@/components/Game/GoBackBtn.vue";
import {getMockQueryBackendData} from "@/components/HomePage/API";

export default {
  components: {GoBackBtn, GameBody, NotFound},
  data() {
    return {
      games: []
    };
  },
  beforeMount() {
    getMockQueryBackendData()
        .then(gamesResult => {
          this.games = [...gamesResult];
        })
  },
  computed: {
    game() {
      const gameId = this.$route.params.gameId;
      return this.games.find(game => game.id === Number(gameId)) || null;
    }
  }
};
</script>

<template>
  <div v-if="game" class="bg-cover bg-center min-h-screen text-white"
       :style="{ backgroundImage: `url(${game.game_background})` }">
    <game-body :description="game.content" :img-src="game.game_thumbnail" :title="game.title"/>
    <footer class="w-full flex justify-center py-10">
      <go-back-btn/>
    </footer>
  </div>
  <not-found v-else/>
</template>