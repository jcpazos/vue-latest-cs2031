<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    onUsernameInput(e) {
      this.username = e.target.value;
    },
    onLogin() {
      sessionStorage.setItem("user", this.username);
      this.username = "";
    },
  },
};
</script>

<template>
  <div class="about">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="username"
        aria-label="username"
        aria-describedby="basic-addon2"
        :value="username"
        @input="onUsernameInput"
      />
      <div class="input-group-append">
        <button
          @click="onLogin"
          class="btn btn-outline-secondary"
          type="button"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
