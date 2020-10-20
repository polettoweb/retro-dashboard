<template>
  <div
    @keyup.esc="cancelModal"
    class="new-card__container--open"
    data-cy="modalContainer"
  >
    <div class="new-card__content">
      <AddRemoveIcon :action="cancelModal" rotate absolute />
      <form name="AddNewCard" @submit.prevent="closeModal">
        <div class="new-card__form-group">
          <label for="content">Content</label>
          <input
            type="text"
            name="content"
            tabindex="0"
            data-cy="inputContent"
            placeholder="Add you content here"
            v-model="form.content"
            autofocus
            required
          />
        </div>
        <div class="new-card__form-group">
          <label for="column">Select column</label>
          <select
            tabindex="0"
            name="column"
            data-cy="selectColumn"
            v-model="form.column"
            required
          >
            <option :value="null" selected disabled>-</option>
            <option :value="0">Glad</option>
            <option :value="1">Sad</option>
            <option :value="2">Mad</option>
          </select>
        </div>
        <button class="new-card__submit" data-cy="submitForm" type="submit">
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import AddRemoveIcon from "./AddRemoveIcon";
export default {
  components: {
    AddRemoveIcon
  },
  props: {
    form: {
      type: Object,
      required: true
    },
    closeModal: {
      type: Function,
      required: true
    },
    task: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  methods: {
    cancelModal() {
      this.$store.commit("toggleModal", false);
    }
  }
};
</script>

<style lang="scss">
.new-card {
  &__container {
    &--open {
      position: absolute;
      width: 480px;
      height: 480px;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      top: 50%;
      left: 50%;
      z-index: 100;
      transform: translate3d(-50%, -50%, 0);
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__form-group {
    display: flex;
    flex-direction: column;

    label {
      text-align: left;
      padding: 10px 0;
    }

    input[type="text"],
    select {
      width: 360px;
      height: auto;
      border: none;
      margin: 0;
      outline: 0;
      padding: 15px 0 15px 5px;
      background-color: #e8eeef;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
      margin-bottom: 30px;

      &:focus {
        border: 1px solid black;
      }
    }
  }

  &__submit {
    width: 360px;
    height: 60px;
    font-size: 24px;
    border: 2px solid #e8eeef;
    background: none;
    text-transform: uppercase;
    padding: 0;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      background: #e8eeef;
      transition: all 0.4s ease-in-out;
    }
  }
}
</style>
