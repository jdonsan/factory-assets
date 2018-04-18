<template>
  <select class="app-drop-down" v-model="selected" @change="onChange">
    <option value="null">Todos</option>
    <option  v-for="(option, index) in options" :key="index" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'AppDropDown',

  props: {
    options: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selected: null
    }
  },

  methods: {
    onChange() {
      this.$emit('selection', (this.selected === "null") ? null : this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-drop-down {
  outline: none;
  padding: 0.5rem 1rem;
}
</style>

