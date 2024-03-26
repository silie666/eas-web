<script setup lang="ts">
import { $t } from "@/plugins/i18n-setup";
import { useVModel } from "@vueuse/core";
import { Option } from "@/utils/format";

// 封装的通用下拉框
defineOptions({
  name: "TySelect"
});

const props = withDefaults(
  defineProps<{
    modelValue: number | string | string[] | number[] | null;
    options: Option<string | number, string>[];
    labelFormatter?: (option: Option<string | number, string>) => string; // 默认的格式化方法
    placeholder?: string;
  }>(),
  {
    labelFormatter: (option: Option<string | number, string>) => option.name // 默认的格式化方法
  }
);
const emit = defineEmits(["update:modelValue"]);
const data = useVModel(props, "modelValue", emit);
</script>

<template>
  <el-select
    v-model="data"
    :placeholder="`${$t('请选择')} ${placeholder || ''}`"
    clearable
    class="w-[100%]"
    filterable
    v-bind="$attrs"
  >
    <el-option v-for="item in options" :key="item.code" :value="item.code" :label="labelFormatter(item)" />
  </el-select>
</template>

<style scoped lang="scss"></style>
