<template>
  <p class="search-bar__header"><strong>Поиск сотрудников</strong></p>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchQuery"
      @input="onSearch"
      placeholder="Введите id или имя"
      class="search-bar__input"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "SearchBar",
  emits: ["search-results"],
  setup() {
    const searchQuery = ref("");
    const store = useStore();

    const onSearch = async () => {
      if (!searchQuery.value.trim()) {
        store.commit("users/CLEAR_CUR_USER");
        store.dispatch("users/clearUsers");
        return;
      }
      const params = searchQuery.value.split(",").map((param) => param.trim());
      await store.dispatch("users/fetchUsers", params);
    };

    return {
      searchQuery,
      onSearch,
    };
  },
};
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  &__header {
    font-size: 16px;
  }

  &__input {
    width: 95%;
    padding: 0.5rem;
    border-radius: 4px;
    margin: auto;
    opacity: 60%;
  }
}
</style>
