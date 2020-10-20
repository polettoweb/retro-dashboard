<template>
  <div class="votes__container">
    <div
      class="votes__thumbs"
      @click="handleMinus"
      role="button"
      title="Remove Vote"
      aria-label="Remove Vote"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :fill="defineThumbsColor(-50)"
        width="24px"
        height="24px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
        />
      </svg>
    </div>
    <span>{{ votes > 0 ? votes : 0 }}</span>
    <div
      class="votes__thumbs"
      @click="handlePlus"
      role="button"
      title="Add Vote"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :fill="defineThumbsColor(-50)"
        width="24px"
        height="24px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import lightenColor from "../utils/lightenColor";
export default {
  props: {
    votes: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    column: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      mainColor: this.$store.state.columns[this.column].color
    };
  },
  methods: {
    defineThumbsColor(percentage) {
      return lightenColor(this.mainColor, percentage);
    },
    handlePlus() {
      this.$store.commit("commitVotes", {
        counter: this.votes + 1,
        column: this.column,
        id: this.id
      });
    },
    handleMinus() {
      if (this.votes > 0)
        this.$store.commit("commitVotes", {
          counter: this.votes - 1,
          column: this.column,
          id: this.id
        });
    }
  }
};
</script>

<style lang="scss">
.votes {
  &__container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 100px;
    height: 48px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

    span {
      font-weight: bold;
    }
  }

  &__thumbs {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
