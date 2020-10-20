<template>
  <div class="columns__container">
    <NewCard />
    <div
      class="column__container"
      v-for="(column, i) in columns"
      :key="column.title"
    >
      <div class="column__title" :style="'background-color: ' + column.color">
        <h2 :style="defineTextColor(column.color)">
          {{ column.title }}
        </h2>
      </div>
      <draggable
        :list="column.tasks"
        :animation="200"
        ghost-class="ghost-card"
        group="tasks"
        @end="handleEnd"
      >
        <Card
          v-for="task in column.tasks"
          :key="task.id"
          :task="task"
          :column="i"
          class="card__container"
          :style="defineCardColor(column.color, 30)"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import betterContrastColor from "../utils/betterContrastColor";
import lightenColor from "../utils/lightenColor";
import draggable from "vuedraggable";
import Card from "./Card";
import NewCard from "./NewCard";

export default {
  components: {
    draggable,
    Card,
    NewCard
  },
  data() {
    return {
      columns: this.$store.state.columns
    };
  },
  methods: {
    defineTextColor(hex) {
      return `color: ${betterContrastColor(hex)}`;
    },
    defineCardColor(hex, percentage) {
      return `background-color: ${lightenColor(
        hex,
        percentage
      )}; ${this.defineTextColor(hex)}`;
    },
    handleEnd() {
      this.$store.commit("setColumns", this.columns);
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  &__container {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    height: calc(100vh - 140px);
  }
}

.column {
  &__container {
    margin: 0 10px;
    flex: 1;
  }

  &__title {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }
}

.card {
  &__container {
    box-sizing: border-box;
    width: 100%;
    min-height: 80px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 0 10px 48px;
    cursor: move;
  }
}
</style>
