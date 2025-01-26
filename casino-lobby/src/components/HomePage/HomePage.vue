<script>
import {getMockQueryBackendData} from "@/components/HomePage/API";
import HeaderSection from "@/components/HomePage/HeaderSection.vue";
import GamesGrid from "@/components/HomePage/GamesGrid.vue";

export default {
  components: {GamesGrid, HeaderSection},
  beforeMount() {
    getMockQueryBackendData()
        .then(gamesResult => {
          this.games = [...gamesResult];
          this.displayGames = [...gamesResult];
        })
  },
  data() {
    return {
      games: [],
      displayGames: []
    }
  },
  methods: {
    filterDisplayGames(searchTerm) {
      if (searchTerm?.length <= 0) {
        this.displayGames = [...this.games];
      } else {
        this.displayGames = this.games.filter(game =>
            game.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <header-section @user-search="filterDisplayGames"/>
    <games-grid :games="displayGames"/>
  </div>
</template>
