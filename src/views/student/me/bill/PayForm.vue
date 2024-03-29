<script lang="ts" setup>
import { reactive, ref } from "vue";
import { $t } from "@/plugins/i18n-setup";
import { PatchApiStudentApiCourseBillPayRequest, UserMeApi } from "@/services";
import TySelect from "@/components/TySelect/index.vue";
import { useOptions } from "@/views/hooks";

const form = reactive<PatchApiStudentApiCourseBillPayRequest>({
  number: ""
});

const cardList = useOptions(() => new UserMeApi().getApiStudentApiMeCards({ withAll: "true" }), "number", "number");
const ruleFormRef = ref();
defineExpose({ ruleFormRef, form });
</script>

<template>
  <el-form ref="ruleFormRef" :model="form" label-width="100px">
    <el-form-item :label="$t('我的信用卡')" prop="number">
      <TySelect :options="cardList" v-model="form.number" :placeholder="$t('信用卡号')" />
    </el-form-item>
  </el-form>
</template>
