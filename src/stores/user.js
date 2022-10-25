import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "",
    email: "",
  }),

  actions: {
    logout() {
      this.name = "";
      this.email = "";
      // we could do other stuff like redirecting the user
    },
    /**
     * Attempt to login a user
     * @param {string} user
     */
    async login(user) {
      this.name = user;
      this.email = this.name + "@utec.edu.pe";
    },
    isAuthenticated() {
      return this.name !== "";
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

//export default useUserStore;
