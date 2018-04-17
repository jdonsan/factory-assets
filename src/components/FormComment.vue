<template>
  <form class="form-comment" @submit.prevent="submitComment">
    <textarea name="comment" v-model="comment"></textarea>
    <button type="submit" :disabled="hasNotComment">Guardar comentario</button>
  </form>
</template>

<script>
export default {
  name: 'FormComment',

  data() {
    return {
      comment: ''
    }
  },

  computed: {
    hasNotComment() {
      return this.comment.length === 0
    }
  },

  methods: {
    submitComment() {
      this.$emit('comment', this.comment)
      this.comment = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";

.form-comment {
  padding: 1rem;

  textarea {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 7rem;
    resize: none;
    padding: 1rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid darken($color-basic-ligth-2, 20%);
  }

  button {
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
    background: $color-primary;
    color: $color-basic-ligth-1;
    border: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &:hover {
      cursor: pointer;
      background: darken($color-primary, 20%);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  button,
  textarea {
    outline: none;
  }
}
</style>

