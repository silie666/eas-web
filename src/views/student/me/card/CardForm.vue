<script lang="ts" setup>
import { reactive, ref } from "vue";
import { $t } from "@/plugins/i18n-setup";
import { CourseCourse, PostApiStudentApiMeCardsRequest } from "@/services";

const props = defineProps<{
  row?: CourseCourse;
}>();

const form = reactive<PostApiStudentApiMeCardsRequest>({
  brand_name: props?.row?.brand_name ?? "",
  number: props?.row?.number ?? "",
  expiration_date: props?.row?.expiration_date ?? ""
});

const ruleFormRef = ref();
defineExpose({ ruleFormRef, form });
</script>

<template>
  <el-form ref="ruleFormRef" :model="form" label-width="100px">
    <el-form-item :label="$t('品牌名称')" prop="name">
      <el-input v-model="form.brand_name" />
    </el-form-item>
    <el-form-item :label="$t('信用卡号')" prop="content">
      <el-input v-model="form.number" />
    </el-form-item>
    <el-form-item :label="`${$t('过期时间')}`" prop="date">
      <el-date-picker
        v-model="form.expiration_date"
        type="date"
        :placeholder="`${$t('请选择')} ${$t('日期')}`"
        value-format="YYYY-MM-DDTHH:mm:ssZ"
      />
    </el-form-item>
  </el-form>
</template>
