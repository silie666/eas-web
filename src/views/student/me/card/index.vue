<script setup lang="ts">
import TyList from "@/components/TyList/index.vue";
import { useCardList } from "@/views/student/me/card/utils/hook";

defineOptions({
  name: "CardList"
});

const { columns, hook, actionBtn } = useCardList();
</script>

<template>
  <div class="main">
    <TyList :title="$t('信用卡管理')" :columns="columns" :hook="hook" :action-btn="actionBtn" />
  </div>
</template>
