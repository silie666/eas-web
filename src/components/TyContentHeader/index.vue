<script setup lang="ts">
import { useRouter } from "vue-router";
defineOptions({
  name: "TyContentHeader"
});

interface Props {
  title: string;
}

defineProps<Props>();

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <el-card shadow="hover">
    <template #header>
      <div class="flex justify-between">
        <h2>{{ title }}</h2>
        <div>
          <el-button @click="goBack">{{ $t("返回") }}</el-button>
        </div>
      </div>
    </template>
    <slot />
  </el-card>
</template>

<style scoped lang="scss"></style>
