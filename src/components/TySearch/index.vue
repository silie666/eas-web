<script lang="ts" setup>
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Search from "@iconify-icons/ep/search";
import Refresh from "@iconify-icons/ep/refresh";
import { useVModel } from "@vueuse/core";
import { computed, h, reactive, ref, toRaw, watch } from "vue";
import { useBaseDataStore } from "@/store/modules/baseData";
import { useRoute } from "vue-router";
import { addDialog } from "@/components/ReDialog/index";
import FilterPopup from "@/components/TySearch/FilterPopup.vue";
import _ from "lodash-es";
import { isArray } from "@pureadmin/utils";
import { $t } from "@/plugins/i18n-setup";
const props = defineProps<{ columns: TableColumnList; loading?: boolean; form: Record<string, any> }>();

const emit = defineEmits<{
  (e: "search", data: object): void;
  (e: "update:form", data: object): void;
}>();
const newForm = useVModel(props, "form", emit);

defineOptions({
  name: "TySearch"
});

const formRef = ref();

// 全部的搜素列 并过滤掉undefined
const allSearchColumns = props.columns.map(column => (column.search ? column : undefined)).filter(column => column);

const searchTotal = allSearchColumns.length;
// 默认选择前3个
const defaultChecked =
  allSearchColumns.length > 3
    ? allSearchColumns.slice(0, 3).map(column => column.prop)
    : allSearchColumns.map(column => column.prop);
// console.log(defaultChecked);
const checkedFilter = ref(defaultChecked);
// 用于在筛选条件下 关闭了一个打钩的 搜索表单还残留数据的问题
watch(checkedFilter, value => {
  const keys = Object.keys(props.form);
  keys.forEach(key => {
    if (!value.includes(key)) {
      delete newForm.value[key];
    }
  });
});
// 默认勾选的搜索列
const { updateUserCustom } = useBaseDataStore();
const route = useRoute();
checkedFilter.value = defaultChecked;

const openFilter = () => {
  addDialog({
    width: "50%",
    title: "自定义搜索",
    hideFooter: true,
    closeOnClickModal: false,
    loading: false,
    contentRenderer: () =>
      h(FilterPopup as any, {
        allSearchColumns,
        checkedFilter: checkedFilter.value,
        "onUpdate:checkedFilter": val => (checkedFilter.value = val)
      })
  });
};

// 自定义搜索列
const searchColumns = computed(() => {
  const res = [];
  allSearchColumns.forEach(column => {
    if (checkedFilter.value.includes(column.prop)) {
      // console.log(_.isPromise(column.search.options));
      res.push({
        label: column.label,
        prop: column.prop,
        ...column.search
      });
    }
  });
  res.forEach(async column => {
    if (_.isFunction(column.options)) {
      column.options = await column.options();
    }
  });

  return res;
});

// 触发搜索
function onSearch() {
  emit("search", getSearchParams());
}

// 获取搜素当下的搜索条件
function getSearchParams() {
  const searchForm = toRaw(props.form);
  Object.keys(searchForm).forEach(item => {
    searchForm[item] = isArray(searchForm[item]) ? searchForm[item].join(",") : searchForm[item];
  });
  return searchForm;
}

// 重置表单
const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
  // 清空form表单
  Object.keys(newForm.value).map(key => {
    delete newForm.value[key];
  });
  // 清空时间范围
  Object.keys(dateRangePicker).map(key => {
    delete dateRangePicker[key];
  });
  onSearch();
};

//专门用来存日期范围的临时值
const dateRangePicker = reactive({});
// 日期范围值格式化
const dateRangePickerChange = (key: string, val: string) => {
  newForm.value[_.camelCase(key) + "Start"] = val[0];
  newForm.value[_.camelCase(key) + "End"] = val[1];
};
</script>

<template>
  <el-form
    ref="formRef"
    :inline="true"
    :model="newForm"
    class="search-form bg-bg_color pl-8 pt-[12px]"
    v-if="searchColumns.length > 0"
  >
    <el-row :gutter="15">
      <el-col :span="6" v-for="item in searchColumns" :key="item.prop">
        <el-form-item :label="`${item.label}`" :prop="item.key ? item.key : item.prop" class="!w-[95%]">
          <template v-if="item.type === 'input'">
            <el-input v-model="newForm[item.key ?? item.prop]" :placeholder="`请输入${item.label}`" class="!w-[100%]" />
          </template>
          <template v-if="item.type === 'select'">
            <el-select
              v-model="newForm[item.key ?? item.prop]"
              :multiple="item.multiple ?? false"
              :collapse-tags="item.multiple ?? false"
              filterable
              :placeholder="`请选择${item.label}`"
              class="!w-[100%]"
              clearable
            >
              <el-option v-for="option in item.options" :key="option.code" :label="option.name" :value="option.code" />
            </el-select>
          </template>
          <template v-if="item.type === 'dateRange'">
            <el-date-picker
              class="!w-[100%]"
              @change="val => dateRangePickerChange(item.key ?? item.prop, val)"
              v-model="dateRangePicker[item.key ?? item.prop]"
              :placeholder="`请选择${item.label}`"
              :start-placeholder="`${$t('开始日期')}`"
              :end-placeholder="`${$t('结束日期')}`"
              type="daterange"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </template>
          <template v-if="item.type === 'inputRange'">
            <el-row>
              <el-col :span="10">
                <el-input
                  class="!w-[100%]"
                  v-model="newForm[(item.key ? item.key : _.camelCase(item.prop)) + 'Start']"
                  type="number"
                />
              </el-col>
              <el-col :span="4" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="10">
                <el-input
                  class="!w-[100%]"
                  v-model="newForm[(item.key ? item.key : _.camelCase(item.prop)) + 'End']"
                  type="number"
                />
              </el-col>
            </el-row>
          </template>
          <template v-if="item.type === 'radio'">
            <el-radio-group v-model="newForm[item.key ?? item.prop]" class="!w-[100%]">
              <el-radio v-for="option in item.options" :key="option.code" :label="option.code">{{
                option.name
              }}</el-radio>
            </el-radio-group>
          </template>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item>
          <el-button :icon="useRenderIcon(Search)" :loading="props.loading" type="primary" @click="onSearch">
            搜索
          </el-button>
          <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)"> 重置 </el-button>
          <el-link v-if="searchTotal > 3" :underline="false" class="ml-4" type="primary" @click="openFilter"
            >筛选条件
          </el-link>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<style lang="scss" scoped>
::v-deep(.el-form-item__label) {
  font-weight: 700;
}
.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}
</style>
