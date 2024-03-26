<script setup lang="ts">
import Motion from "./utils/motion";
import { $t } from "@/plugins/i18n-setup";
import { useRouter } from "vue-router";
import { message } from "@/utils/message";
import { loginRules } from "./utils/rule";
import { useNav } from "@/layout/hooks/useNav";
import type { FormInstance } from "element-plus";
import { useLayout } from "@/layout/hooks/useLayout";
import { bg, avatar, illustration } from "./utils/static";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ref, reactive, toRaw, onMounted, onBeforeUnmount } from "vue";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";
import Lock from "@iconify-icons/ri/lock-fill";
import User from "@iconify-icons/ri/user-3-fill";
import { setToken } from "@/utils/auth";
import { addPathMatch } from "@/router/utils";
import { usePermissionStoreHook } from "@/store/modules/permission";
import { getLogin, getNode } from "@/api/AccountService";
import { useBaseDataStore } from "@/store/modules/baseData";
import { storageLocal } from "@pureadmin/utils";

interface StorageConfigs {
  username: string;
  password: string;
  guard_type: number;
}
defineOptions({ name: "Login" });
const router = useRouter();
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();

const { initStorage } = useLayout();
initStorage();

const { dataThemeChange } = useDataThemeChange();
dataThemeChange();
const { title } = useNav();

// 初始化表单数据
const ruleForm = reactive({
  username: "",
  password: "",
  guard_type: 1
});

// 登录逻辑
const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        const loginData = { ...ruleForm };
        const res = await getLogin(loginData);

        const userInfo = {
          username: ruleForm.username,
          roles: [],
          accessToken: res.data.access_token
        };
        setToken(userInfo);
        const nodeRes = await getNode();
        userInfo.roles = nodeRes.data.map(item => item.sign);
        setToken(userInfo);

        usePermissionStoreHook().handleWholeMenus([]);
        addPathMatch();
        await router.push("/");
        message("登录成功", { type: "success" });
        await useBaseDataStore().getUserData();
      } catch (err) {
        console.error(err);
        message("登录失败", { type: "error" });
      } finally {
        loading.value = false;
      }
    } else {
      loading.value = false;
      return fields;
    }
  });
};

function onKeyPress({ code }: KeyboardEvent) {
  if (code === "Enter") {
    onLogin(ruleFormRef.value);
  }
}

onMounted(() => {
  const rememberInfo = storageLocal().getItem<StorageConfigs>("rememberInfo");
  if (rememberInfo) {
    ruleForm.username = rememberInfo.username;
    ruleForm.password = rememberInfo.password;
    ruleForm.guard_type = rememberInfo.guard_type;
  }

  window.document.addEventListener("keypress", onKeyPress);
});
onBeforeUnmount(() => window.document.removeEventListener("keypress", onKeyPress));
</script>

<template>
  <div class="select-none">
    <img :src="bg" class="wave" alt="wave" />
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <img :src="avatar" class="mx-auto" alt="avatar" />
          <Motion>
            <h2 class="outline-none">{{ title }}</h2>
          </Motion>
          <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules" size="large">
            <Motion :delay="100">
              <el-form-item
                prop="username"
                :rules="[
                  {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                  }
                ]"
              >
                <el-input clearable v-model="ruleForm.username" placeholder="账号" :prefix-icon="useRenderIcon(User)" />
              </el-form-item>
            </Motion>
            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input
                  clearable
                  show-password
                  v-model="ruleForm.password"
                  placeholder="密码"
                  :prefix-icon="useRenderIcon(Lock)"
                />
              </el-form-item>
            </Motion>
            <Motion :delay="200">
              <el-form-item>
                <el-radio-group v-model="ruleForm.guard_type">
                  <el-radio :label="1">{{ $t("教师端") }}</el-radio>
                  <el-radio :label="2">{{ $t("学生端") }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </Motion>
            <Motion :delay="250">
              <el-button
                class="w-full mt-4"
                size="default"
                type="primary"
                :loading="loading"
                @click="onLogin(ruleFormRef)"
              >
                登录
              </el-button>
            </Motion>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
