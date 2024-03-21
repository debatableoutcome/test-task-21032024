<template>
  <div
    class="mini-card-component"
    :class="{ 'is-active': isActive }"
    @click="setCurUser(user)"
  >
    <div class="mini-user-image">
      <img src="/dummy-img.png" />
    </div>
    <div class="mini-user-info">
      <h3 class="user-name">{{ user.username }}</h3>
      <p class="user-email">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "MiniCardComponent",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const isActive = computed(() => {
      return store.state.users.curUser?.id === props.user.id;
    });
    const setCurUser = (user) => {
      store.dispatch("users/setCurUser", user);
    };
    return {
      setCurUser,
      isActive,
    };
  },
};
</script>

<style scoped lang="scss">
.mini-card-component {
  width: 250px;
  height: 60px;
  font-size: 14px;
  color: #333333;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.3rem;
  margin: 1rem 0.3rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 4px rgba(42, 41, 41, 0.1);
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }
}

.mini-user-image {
  width: 20%;

  img {
    width: 50px;
    height: 50px;
    border: none;
    opacity: 50%;
  }
}

.mini-user-info {
  width: 70%;
  margin-left: 0.7rem;
}

.user-name,
.user-email,
.user-phone {
  font-size: 14px;
  margin: 0.25rem 0;
  color: #666;
}

.is-active {
  background-color: rgb(231, 229, 229);
}
</style>
