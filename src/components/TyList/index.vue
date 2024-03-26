<script setup lang="ts">
import { PureTableBar } from "@/components/RePureTableBar";
import TySearch from "@/components/TySearch/index.vue";
import { useListHooks } from "@/views/hooks";
import { ref, toRefs } from "vue";
import { EpPropMergeType } from "element-plus/es/utils";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import AddFill from "@iconify-icons/ri/add-circle-line";
import { ActionBtn } from "@/components/TyList/type";
import EditPen from "@iconify-icons/ep/edit-pen";
import Delete from "@iconify-icons/ep/delete";

defineOptions({
  name: "TyList"
});

const props = defineProps<{
  title: string;
  columns: TableColumnList;
  hook: ReturnType<typeof useListHooks>;
  actionBtn?: ActionBtn<any>;
}>();

const { hook, columns } = toRefs(props);

const {
  form,
  loading,
  getTableData,
  tableData,
  pagination,
  handleSelectionChange,
  handleSizeChange,
  handleCurrentChange
} = hook.value;
// 用来获取表格中的插槽名称 排除操作列
const tableSlotName = columns.value.map(item => item.slot).filter(item => item !== "operation");

type tableSizeType = EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>;
const tableSize = ref<tableSizeType>("default");
const onChangeTableSize = (size: tableSizeType) => {
  tableSize.value = size;
};
</script>

<template>
  <TySearch :form="form" :columns="columns" :loading="loading" @search="getTableData" />
  <PureTableBar :title="title" :columns="columns" @refresh="getTableData" @change-table-size="onChangeTableSize">
    <template #buttons>
      <slot name="toolbar" />
      <el-button
        :icon="useRenderIcon(AddFill)"
        type="primary"
        @click="(actionBtn as ActionBtn<any>)?.add?.onClick && (actionBtn as ActionBtn<any>).add.onClick()"
        v-auth="(actionBtn as ActionBtn<any>)?.add?.auth"
        v-if="(actionBtn as ActionBtn<any>)?.add"
      >
        {{ $t("新增") }}
      </el-button>
    </template>
    <template v-slot="{ size, dynamicColumns }">
      <pure-table
        border
        adaptive
        align-whole="center"
        table-layout="auto"
        :loading="loading"
        :size="size"
        :data="tableData"
        :columns="dynamicColumns"
        :pagination="pagination"
        :paginationSmall="size === 'small'"
        :header-cell-style="{
          background: 'var(--el-table-row-hover-bg-color)',
          color: 'var(--el-text-color-primary)'
        }"
        @selection-change="handleSelectionChange"
        @page-size-change="handleSizeChange"
        @page-current-change="handleCurrentChange"
      >
        <template v-for="slot in tableSlotName" :key="slot" v-slot:[slot]="{ row }">
          <slot :name="slot" :row="row" :size="tableSize" />
        </template>
        <template #operation="{ row, size }">
          <el-button
            class="reset-margin"
            link
            type="primary"
            :size="size"
            :icon="useRenderIcon('mdi:eye')"
            @click="(actionBtn as ActionBtn<any>)?.detail?.onClick && (actionBtn as ActionBtn<any>).detail.onClick(row)"
            v-auth="(actionBtn as ActionBtn<any>)?.detail?.auth"
            v-if="(actionBtn as ActionBtn<any>)?.detail"
          >
            {{ $t("详情") }}
          </el-button>
          <el-button
            class="reset-margin"
            link
            type="primary"
            :size="size"
            :icon="useRenderIcon(EditPen)"
            @click="(actionBtn as ActionBtn<any>)?.edit?.onClick && (actionBtn as ActionBtn<any>).edit.onClick(row)"
            v-auth="(actionBtn as ActionBtn<any>)?.edit?.auth"
            v-if="(actionBtn as ActionBtn<any>)?.edit"
          >
            {{ $t("编辑") }}
          </el-button>
          <el-popconfirm
            v-if="(actionBtn as ActionBtn<any>)?.delete"
            :title="$t('是否确认删除这条数据')"
            @confirm="
              (actionBtn as ActionBtn<any>)?.delete?.onConfirm && (actionBtn as ActionBtn<any>).delete.onConfirm(row)
            "
          >
            <template #reference>
              <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(Delete)"
                v-auth="(actionBtn as ActionBtn<any>)?.delete?.auth"
                v-if="(actionBtn as ActionBtn<any>)?.delete"
              >
                {{ $t("删除") }}
              </el-button>
            </template>
          </el-popconfirm>
          <slot name="operation" :row="row" :size="size" />
        </template>
      </pure-table>
    </template>
  </PureTableBar>
</template>
