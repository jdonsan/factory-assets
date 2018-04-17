<template>
  <div class="app-loader">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'AppLoader'
}
</script>

<style lang="scss" scoped>
.app-loader {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #3498db;
    margin: 35px 5px;

    &:nth-child(1) {
      animation: bounce 1s ease-in-out infinite;
    }

    &:nth-child(2) {
      animation: bounce 1s ease-in-out 0.33s infinite;
    }

    &:nth-child(3) {
      animation: bounce 1s ease-in-out 0.66s infinite;
    }
  }
}

@keyframes bounce {
  0%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
</style>
