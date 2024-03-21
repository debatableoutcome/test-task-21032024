<template>
  <div class="users-list">
    <p class="users-list__header"><strong>Результаты</strong></p>
    <Preloader v-if="isLoading" />
    <div v-if="isError" class="users-list__message">{{ errorMessage }}</div>
    <div class="users-list__box" v-else>
      <div v-if="users && users.length === 0" class="users-list__message">
        Ничего не найдено
      </div>
      <MiniCardComponent
        v-for="user in users"
        :key="user.id"
        :user="user"
        v-else
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Preloader from "./PreloaderComponent.vue";
import MiniCardComponent from "./MiniCardComponent.vue";

export default {
  name: "UsersList",
  components: {
    MiniCardComponent,
    Preloader,
  },
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.state.users.isLoading);
    const users = computed(() => store.state.users.users);
    const isError = computed(() => store.state.users.isError);
    const errorMessage = computed(() => store.state.users.errorMessage);
    return {
      users,
      isLoading,
      isError,
      errorMessage,
    };
  },
};
</script>

<style scoped lang="scss">
.users-list {
  position: relative;

  &__box {
    padding-top: 10px;
    height: 440px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 275px;
    box-shadow: 0 1px 2px rgba(78, 77, 77, 0.1);
    max-height: 400px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__header {
    font-size: 16px;
  }

  &__message,
  &__alternative {
    padding-left: 7px;
    padding-top: 30px;
    height: 50px;
    color: gray;
  }
}
</style>
