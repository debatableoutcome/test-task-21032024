<template>
  <div class="home-page">
    <div class="home-page-container__top">
      <TopBar />
    </div>
    <section class="home-page-container">
      <div class="home-page-container__bottom">
        <SideBar />
        <main class="profile-content">
          <CardComponent :user="currentUser" />
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "HomePage",
  components: {
    SideBar,
    CardComponent,
    TopBar,
  },
  setup() {},
};
</script>

<style scoped lang="scss">
.home-page {
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 1366px;
  height: 748px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;

  &-container {
    width: 1266px;
    height: 625px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(234, 223, 223);
    border-radius: 8px;

    &__bottom {
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
  }
}

.sidebar {
  box-sizing: border-box;
  padding: 10px;
  width: 290px;
  height: 575px;
  background-color: rgb(255, 255, 255);
}

.profile-content {
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  width: 975px;
  height: 575px;
}
</style>
