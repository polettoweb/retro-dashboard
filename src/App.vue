<template>
  <div id="app">
    <Board title="Retrospective Dashboard" />
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Board
  },
  mounted() {
    this.$store.commit("toggleModal", false);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.rotate45 {
  transform: rotate(45deg);
}
</style>
