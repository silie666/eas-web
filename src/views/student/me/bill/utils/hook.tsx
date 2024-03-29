import { $t } from "@/plugins/i18n-setup";
import { h, ref } from "vue";
import { CourseCourseApiGetApiStudentApiCourseBillsRequest, CourseCourseApi, CourseCourseBill } from "@/services";
import { useListHooks } from "@/views/hooks";
import { addDialog } from "@/components/ReDialog";
import PayForm from "@/views/student/me/bill/PayForm.vue";
import { message } from "@/utils/message";
import { useBaseDataStore } from "@/store/modules/baseData";

export function useBillList() {
  const hook = useListHooks(new CourseCourseApi().getApiStudentApiCourseBills);
  const { getTableData } = hook;
  const { baseData } = useBaseDataStore();
  const columns: TableColumnList<CourseCourseApiGetApiStudentApiCourseBillsRequest> = [
    {
      label: $t("序号"),
      type: "index",
      width: 70
    },
    {
      label: $t("支付状态"),
      prop: "pay_status_name",
      minWidth: 130,
      search: {
        type: "select",
        key: "payStatus",
        options: baseData.student_bill_pay_status
      }
    },
    {
      label: $t("账单费用(日元)"),
      prop: "bill_fees",
      minWidth: 130
    },
    {
      label: $t("支付费用(日元)"),
      prop: "paid_fees",
      minWidth: 130
    },
    {
      label: $t("支付时间"),
      prop: "pay_time",
      minWidth: 130,
      search: {
        type: "dateRange"
      }
    },
    {
      label: $t("操作"),
      width: 200,
      slot: "operation"
    }
  ];

  function openPayDialog(row: CourseCourseBill) {
    const dialogRef = ref<InstanceType<typeof PayForm>>();
    addDialog({
      title: `${$t("是否支付")}`,
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      loading: false,
      contentRenderer: () => h(PayForm as any, { ref: dialogRef, row }),
      beforeSure: (done, { options }) => {
        const { form, ruleFormRef } = dialogRef.value;
        console.log(form);
        ruleFormRef.validate(async (valid: boolean) => {
          if (valid) {
            // 表单规则校验通过
            options.loading = true;
            try {
              await new CourseCourseApi().patchApiStudentApiCourseBillPay({
                courseBillId: row.id.toString(),
                patchApiStudentApiCourseBillPayRequest: form
              });
              message(`${$t("已发起支付，请等待结果")}`, {
                type: "success"
              });
              done();
              await getTableData();
            } finally {
              options.loading = false;
            }
          }
        });
      }
    });
  }

  return {
    columns,
    openPayDialog,
    hook
  };
}
