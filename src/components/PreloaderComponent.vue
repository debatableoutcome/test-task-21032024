<template>
  <div class="preloader">
    <div class="preloader__loader"></div>
  </div>
</template>

<style scoped lang="scss">
.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  &__loader {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #333;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
