<script setup lang="ts">
import { ref, watch } from "vue";
import { useVModel } from "@vueuse/core";

defineOptions({
  name: "FilterPopup"
});

// 使用defineProps和defineEmits
const props = defineProps<{
  allSearchColumns: Array<{ label: string; prop: string }>;
  checkedFilter: Array<string>;
}>();

const emit = defineEmits(["update:checkedFilter"]);

const filterColumns = ref(props.allSearchColumns);
const checked = useVModel(props, "checkedFilter", emit);
const allChecked = ref(false);

// 当选中的项目改变时，更新全选状态
watch(checked, (newChecked, prevChecked) => {
  if (newChecked.length === filterColumns.value.length) {
    allChecked.value = true;
  } else if (newChecked.length < prevChecked.length) {
    // 只有在减少选中项时才更新全选状态
    allChecked.value = false;
  }
});

// 当全选状态改变时，更新选中项目
watch(allChecked, newValue => {
  if (newValue) {
    checked.value = filterColumns.value.map(item => item.prop);
  } else if (checked.value.length === filterColumns.value.length) {
    // 只有在之前全选状态下，取消全选才清空选中项目
    checked.value = [filterColumns.value[0].prop];
  }
});
</script>

<template>
  <div>
    <p class="mb-2">
      {{ $t("已选条件") }}
      <el-checkbox class="relative ml-4 top-[3px]" v-model="allChecked">{{ $t("全选") }}</el-checkbox>
    </p>
    <el-checkbox-group v-model="checked" :min="1">
      <el-row>
        <el-col :span="6" v-for="column in filterColumns" :key="column.prop">
          <el-checkbox :label="column.prop">{{ column.label }}</el-checkbox>
        </el-col>
      </el-row>
    </el-checkbox-group>
  </div>
</template>
