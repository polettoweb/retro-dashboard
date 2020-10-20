<template>
  <div
    :class="['action', { absolute: absolute }]"
    @click="action"
    role="button"
    :title="scope"
    :aria-label="scope"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 0 24 24"
      width="48"
      :class="rotate ? 'rotate45' : ''"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        :fill="color"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: Function,
      required: true
    },
    scope: {
      type: String,
      required: true
    },
    rotate: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: "black"
    },
    absolute: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss">
.action {
  cursor: pointer;

  &.absolute {
    position: absolute;
    right: -24px;
    top: -24px;
  }
}
</style>
