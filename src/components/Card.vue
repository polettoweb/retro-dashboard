<template>
  <div class="card__content">
    <p>{{ task.content }}</p>
    <AddRemoveIcon :action="handleAction" color="#ccc" rotate absolute />
  </div>
</template>
<script>
import AddRemoveIcon from "./AddRemoveIcon";
export default {
  components: {
    AddRemoveIcon
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
      top: 50%;
      right: 5px;
      transform: translate3d(0, -50%, 0);
      opacity: 0;
      transition: 0.4s ease-in-out;
    }
  }
}
</style>
