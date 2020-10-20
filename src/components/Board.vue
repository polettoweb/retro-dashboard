<template>
  <div class="board__container">
    <h1 class="board__title">{{ title }}</h1>
    <Columns />
  </div>
</template>

<script>
import Columns from "./Columns";

export default {
  components: {
    Columns
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  &__container {
    width: 100%;
    max-width: 1280px;
    min-width: 900px;
    height: 100%;
    margin: 0 auto;
  }

  &__title {
    height: 60px;
  }
}
</style>
