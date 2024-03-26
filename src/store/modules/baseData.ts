import { defineStore } from "pinia";
import { UserUser, UserMeApi } from "@/services";
import { Constant } from "@/constants/constant";
import _ from "lodash-es";

export const useBaseDataStore = defineStore("base-data", {
  state: () => ({
    baseData: Constant,
    userData: {} as UserUser
  }),
  actions: {
    async getUserData() {
      const userResponse = await new UserMeApi().getCommonApiMe({});
      this.userData = userResponse.data;
    }
  },
  persist: true
});
