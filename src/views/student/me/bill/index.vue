<script setup lang="ts">
import TyList from "@/components/TyList/index.vue";
import { useBillList } from "@/views/student/me/bill/utils/hook";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Money from "@iconify-icons/ri/money-dollar-circle-line";
import { Auth } from "@/constants/back-api";

defineOptions({
  name: "BillList"
});

const { columns, openPayDialog, hook } = useBillList();
</script>

<template>
  <div class="main">
    <TyList :title="$t('我的账单')" :columns="columns" :hook="hook">
      <template #operation="{ row, size }">
        <el-button
          :icon="useRenderIcon(Money)"
          :size="size"
          class="reset-margin"
          link
          type="primary"
          @click="openPayDialog(row)"
          v-auth="Auth.PATCH_STUDENT_COURSE_BILLS_BY_ID_PAY"
          v-if="row.pay_status === 10"
        >
          {{ $t("支付") }}
        </el-button>
      </template>
    </TyList>
  </div>
</template>
