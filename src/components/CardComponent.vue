<template>
  <div class="card-component">
    <div class="card-component__display" v-if="curUser">
      <div class="user-image-block">
        <img src="/dummy-img.png" />
      </div>
      <div class="user-info-block">
        <h3 class="user-name">
          <strong>{{ curUser.name }}</strong>
        </h3>
        <span class="user-email"
          ><strong>email: </strong>{{ curUser.email }}</span
        >
        <span class="user-phone"
          ><strong>phone: </strong>{{ curUser.phone }}</span
        >
        <div class="user-about">
          <span><strong>О себе: </strong></span>
          <p class="user-about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum
            ipsum vel enim? Assumenda nesciunt repellat consequuntur, at, earum
            error velit quisquam nam totam perferendis saepe nisi fugiat numquam
            quas quod debitis quis iure. Architecto repellat ipsam praesentium
            laborum repellendus natus? Perspiciatis officiis accusantium est
            aliquid quae sequi cum ipsum provident ipsam non ex, quisquam
            ratione aperiam, optio nobis. Delectus et exercitationem
            reprehenderit. Necessitatibus distinctio veniam expedita nihil quos
            magni deserunt consequuntur dolores suscipit quae doloribus iusto
            quasi, quaerat consectetur
          </p>
        </div>
      </div>
    </div>
    <div class="card-component__alternative" v-else>
      <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CardComponent",
  setup() {
    const store = useStore();
    const curUser = computed(() => store.state.users.curUser);

    return {
      curUser,
    };
  },
};
</script>

<style scoped lang="scss">
.card-component {
  position: relative;

  &__display,
  &__alternative {
    width: 960px;
    height: 555px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px rgb(211, 207, 207) solid;
    border-radius: 8px;
  }

  &__alternative {
    align-items: center;
    justify-content: center;
  }
}

.user-image-block {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    opacity: 50%;
    padding: auto;
  }
}

.user-info-block {
  padding: 20px;
  gap: 10px;
  width: 45%;
  height: 70%;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.user-name,
.user-email,
.user-phone,
.user-about {
  font-size: 16px;
  margin: 0.25rem 0;
  color: #666;

  &__text {
    font-size: 14px;
    color: rgb(110, 108, 108);
    line-height: 22px;
  }
}

.user-about {
  margin-top: 20px;
}
</style>
