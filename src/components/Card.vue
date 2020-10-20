<template>
  <div class="card__content">
    <p>{{ task.content }}</p>
    <AddRemoveIcon
      :action="handleAction"
      scope="Remove Card"
      color="#ccc"
      rotate
      absolute
    />
    <Votes :votes="task.votes" :id="task.id" :column="column" />
  </div>
</template>
<script>
import AddRemoveIcon from "./AddRemoveIcon";
import Votes from "./Votes";
export default {
  components: {
    AddRemoveIcon,
    Votes
  },
  props: {
    task: {
      type: Object,
      default: () => ({})
    },
    column: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleAction() {
      this.$store.commit("removeCardFromColumns", {
        id: this.task.id,
        column: this.column
      });
    }
  }
};
</script>
<style lang="scss">
.card {
  &__content {
    position: relative;

    &:hover {
      .action {
        opacity: 1;
      }
    }
    .action {
      top: 30px;
      right: 5px;
      transform: translate3d(0, -50%, 0);
      opacity: 0;
      transition: 0.4s ease-in-out;
    }
  }
}
</style>
