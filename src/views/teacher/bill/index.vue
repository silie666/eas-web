<script setup lang="ts">
import TyList from "@/components/TyList/index.vue";
import { useBillList } from "@/views/teacher/bill/utils/hook";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Bill from "@iconify-icons/ri/bill-line";
import { Auth } from "@/constants/back-api";

defineOptions({
  name: "BillList"
});

const { columns, onSend, hook, actionBtn } = useBillList();
</script>

<template>
  <div class="main">
    <TyList :title="$t('账单管理')" :columns="columns" :hook="hook" :action-btn="actionBtn">
      <template #operation="{ row, size }">
        <el-button
          :icon="useRenderIcon(Bill)"
          :size="size"
          class="reset-margin"
          link
          type="primary"
          @click="onSend(row)"
          v-auth="Auth.PATCH_TEACHER_COURSE_BILLS_BY_ID_SEND"
          v-if="row.status === false"
        >
          {{ $t("发送账单") }}
        </el-button>
      </template>
    </TyList>
  </div>
</template>
