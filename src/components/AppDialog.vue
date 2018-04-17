<template>
  <div class="app-dialog" v-if="isOpen">
    <div class="app-dialog-fill"></div>
    <div class="app-dialog-container">
      <header class="app-dialog-header">
        <h3>{{ title }}</h3>
        <i class="material-icons" @click="close">close</i>
      </header>
      <div class="app-dialog-content">
        <slot></slot>
      </div>
      <footer class="app-dialog-footer">
        <button @click="action">{{ actionName }}</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDialog',

  props: {
    title: {
      type: String,
      required: true
    },

    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },

    close: {
      type: Function,
      required: true
    },

    action: {
      type: Function,
      required: true
    },

    actionName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";
@import "../assets/scss/_breakpoints";

.app-dialog {
  &-fill {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $color-basic-dark;
    z-index: 5;
  }

  &-container {
    position: fixed;
    z-index: 6;
    background: $color-basic-ligth-1;
    left: 50%;
    border-radius: 5px;
    width: 90%;
    margin-left: -45%;
    top: 5rem;

    @media (min-width: $bp-destops) {
      width: 60%;
      margin-left: -30%;
    }
  }

  &-header {
    background: $color-primary;
    color: $color-basic-ligth-1;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    h3 {
      margin: 0;
      padding: 0;
    }

    i:hover {
      cursor: pointer;
    }
  }

  &-content {
    padding: 1rem;

    p {
      margin: 0;
    }

    input[type="text"] {
      width: 100%;
      padding: 0.5rem;
      border-radius: 5px;
      box-sizing: border-box;
      border: 1px solid darken($color-basic-ligth-2, 20%);
      outline: none;
    }
  }

  &-footer {
    padding: 0.5rem 1rem;
    border-top: 1px solid $color-basic-ligth-2;
    text-align: right;

    button {
      background: $color-primary;
      color: $color-basic-ligth-1;
      border: 0;
      border-radius: 5px;
      padding: 0.5rem 1rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

