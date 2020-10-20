<template>
  <div v-if="!modalVisible" class="new-card__container">
    <div
      class="new-card__button"
      role="button"
      tabindex="0"
      aria-label="Add new card"
      title="Add new card"
      data-cy="openModal"
      @click="openModal"
      @keyup.enter="openModal"
    >
      <AddRemoveIcon :action="openModal" color="#4caf50" />
    </div>
  </div>
  <Modal v-else :closeModal="closeModal" :form="form" />
</template>

<script>
import Modal from "./Modal";
import AddRemoveIcon from "./AddRemoveIcon";
export default {
  components: {
    Modal,
    AddRemoveIcon
  },
  data() {
    return {
      form: {
        content: "",
        column: null
      }
    };
  },
  computed: {
    modalVisible() {
      return this.$store.state.modalVisible;
    }
  },
  methods: {
    openModal() {
      this.$store.commit("toggleModal", true);
    },
    closeModal() {
      this.$store.commit("addCardToColumns", this.form);
      this.$store.commit("toggleModal", false);
      this.form.content = "";
      this.form.column = null;
    }
  }
};
</script>

<style lang="scss">
.new-card {
  &__container {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__button {
    width: 48px;
    height: 48px;
  }
}
</style>
