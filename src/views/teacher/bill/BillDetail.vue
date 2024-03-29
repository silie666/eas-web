<script setup lang="tsx">
import { ref, onMounted, onUnmounted, computed } from "vue";
import TyContentHeader from "@/components/TyContentHeader/index.vue";
import { useRoute } from "vue-router";
import { CourseCourseBill1, CourseCourseBillApi } from "@/services";
import { $t } from "@/plugins/i18n-setup";
import _ from "lodash-es";
const route = useRoute();
const courseBillId = route.params.courseBillId as unknown as number;
const data = ref<CourseCourseBill1[]>([]);

onMounted(async () => {
  const res = await new CourseCourseBillApi().getApiTeacherApiCourseBill({ courseBillId });
  data.value = [res.data];
});

const columns = computed(() => {
  return [
    {
      label: $t("课程名称"),
      prop: "device_insurance_uuid",
      cellRenderer: (): any => {
        const textArr = [];
        let course: { id?: number; name?: string };
        for (course of data.value[0].courses) {
          if ((data.value[0].course_ids as number[]).includes(course.id)) {
            textArr.push(course.name);
          }
        }
        return textArr.join(",") as string;
      }
    },
    {
      label: $t("是否已发送账单"),
      prop: "status_name"
    },
    {
      label: $t("创建时间"),
      prop: "create_time"
    }
  ];
});

const studentCourseBillsColumn: TableColumnList = [
  {
    label: $t("序号"),
    width: 70,
    type: "index"
  },
  {
    label: $t("支付状态"),
    prop: "pay_status_name"
  },
  {
    label: $t("费用(日元)"),
    prop: "bill_fees"
  },
  {
    label: $t("支付费用(日元)"),
    prop: "paid_fees"
  },
  {
    label: $t("支付时间"),
    prop: "pay_time"
  }
];

onUnmounted(() => {
  data.value = [];
});
</script>

<template>
  <TyContentHeader :title="$t('账单详情')" v-if="data.length > 0">
    <h3 class="mt-2">账单信息</h3>
    <PureDescriptions :column="3" border :data="data" :columns="columns" />
    <h3 class="mt-2">账单列表</h3>
    <pure-table
      border
      align-whole="center"
      table-layout="auto"
      size="small"
      :data="data[0].student_course_bills"
      :columns="studentCourseBillsColumn"
      :header-cell-style="{
        background: 'var(--el-table-row-hover-bg-color)',
        color: 'var(--el-text-color-primary)'
      }"
    />
  </TyContentHeader>
</template>

<style scoped lang="scss"></style>
