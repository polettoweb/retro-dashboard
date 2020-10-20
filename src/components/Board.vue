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
    height: 100%;
    margin: 0 auto;
  }

  &__title {
    height: 60px;

    @media (max-width: 500px) {
      padding-top: 30px;
      font-size: 18px;
    }
  }
}
</style>
