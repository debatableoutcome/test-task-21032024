<template>
  <section class="top-bar">
    <div class="top-bar__left">
      <LogoComponent />
    </div>
    <div class="top-bar__right">
      <p>Пользователь</p>
    </div>
  </section>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
export default {
  name: "TopBar",
  components: {
    LogoComponent,
  },
  setup() {},
};
</script>
<style scoped lang="scss">
.top-bar {
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1266px;
  height: 30px;

  &__left,
  &__right {
    height: 100%;

    &.top-bar__left {
      width: 250px;
    }

    &.top-bar__right {
      padding-right: 7px;
      text-align: end;
      width: 1016px;
    }
  }
}
</style>
