<script setup lang="ts">
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { $t } from "@/plugins/i18n-setup";
import { BasicFile } from "@/services";
import { tyPreview } from "@/components/TyPreview/index";
defineOptions({
  name: "TablePreview"
});
const props = withDefaults(
  defineProps<{
    data: BasicFile[];
    isUploaded?: boolean;
  }>(),
  {
    data: () => [],
    isUploaded: true
  }
);
const columns: TableColumnList = [
  {
    label: $t("序号"),
    width: 70,
    type: "index"
  },
  {
    label: $t("文件名称"),
    prop: "name",
    minWidth: 120
  },
  {
    label: $t("上传时间"),
    prop: "create_time",
    width: 200,
    hide: !props.isUploaded
  },
  {
    label: $t("操作"),
    width: 100,
    slot: "operation"
  }
];

const handlePreview = (row: BasicFile) => {
  tyPreview({ name: row.name, url: row.url });
};
</script>

<template>
  <pure-table
    border
    align-whole="center"
    table-layout="auto"
    size="small"
    :data="data"
    :columns="columns"
    :header-cell-style="{
      background: 'var(--el-table-row-hover-bg-color)',
      color: 'var(--el-text-color-primary)'
    }"
  >
    <template #operation="{ row }">
      <el-button
        class="reset-margin"
        link
        type="primary"
        size="small"
        :icon="useRenderIcon('mdi:eye')"
        @click="handlePreview(row)"
      >
        {{ $t("查看") }}
      </el-button>
    </template>
  </pure-table>
</template>

<style scoped lang="scss"></style>
