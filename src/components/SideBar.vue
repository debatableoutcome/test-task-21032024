<template>
  <aside class="sidebar">
    <SearchBar />
    <UsersList />
  </aside>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import UsersList from "@/components/UsersList.vue";
export default {
  name: "SideBar",
  components: {
    SearchBar,
    UsersList,
  },
  setup() {},
};
</script>
<style scoped lang="scss">
.sidebar {
  box-sizing: border-box;
  padding: 10px;
  width: 290px;
  height: 575px;
  background-color: rgb(255, 255, 255);
}
</style>
