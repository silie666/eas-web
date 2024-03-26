import { $t } from "@/plugins/i18n-setup";
import { addDialog } from "@/components/ReDialog";
import { h, ref } from "vue";
import { CourseCourseBillApi, CourseCourseBillApiGetTeacherApiCourseBillRequest, CourseCourseBill } from "@/services";
import { useListHooks } from "@/views/hooks";
import { ActionBtn } from "@/components/TyList/type";
import { Auth } from "@/constants/back-api";
import { message } from "@/utils/message";
import BillForm from "@/views/teacher/bill/BillForm.vue";
import { ElMessageBox } from "element-plus";

export function useBillList() {
  const hook = useListHooks(new CourseCourseBillApi().getTeacherApiCourseBills);
  const { getTableData } = hook;
  const actionBtn: ActionBtn<CourseCourseBill> = {
    add: {
      auth: Auth.POST_TEACHER_COURSE_BILLS,
      onClick() {
        openDialog();
      }
    },
    edit: {
      auth: Auth.PATCH_TEACHER_COURSE_BILLS_BY_ID,
      onClick(row) {
        openDialog($t("编辑"), row);
      }
    },
    delete: {
      auth: Auth.DELETE_TEACHER_COURSE_BILLS_BY_ID,
      onConfirm({ id: courseBillId }) {
        hook.handleDelete(new CourseCourseBillApi().deleteTeacherApiCourseBill, {
          courseBillId
        });
      }
    }
  };
  const columns: TableColumnList<CourseCourseBillApiGetTeacherApiCourseBillRequest> = [
    {
      label: $t("序号"),
      type: "index",
      width: 70
    },
    {
      label: $t("课程名称"),
      prop: "courses",
      minWidth: 90,
      cellRenderer: (scope): any => {
        const textArr = [];
        let course: { id: number; name: string };
        for (course of scope.row.courses) {
          if ((scope.row.course_ids as number[]).includes(course.id)) {
            textArr.push(course.name);
          }
        }
        return textArr.join(",") as string;
      }
    },
    {
      label: $t("是否已发送账单"),
      prop: "status_name",
      minWidth: 130
    },
    {
      label: $t("创建时间"),
      prop: "create_time",
      minWidth: 130
    },
    {
      label: $t("操作"),
      width: 200,
      slot: "operation"
    }
  ];

  function onSend(row: CourseCourseBill) {
    ElMessageBox.confirm(`确认要发送账单?`, "系统提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      dangerouslyUseHTMLString: true,
      draggable: true
    })
      .then(async () => {
        await new CourseCourseBillApi().patchTeacherApiCourseBillSend({
          courseBillId: row.id.toString()
        });
        message($t("操作成功"), { type: "success" });
        await getTableData();
      })
      .catch(() => {
        message($t("操作失败"), { type: "error" });
      });
  }

  function openDialog(title = $t("新增"), row?: CourseCourseBill) {
    const dialogRef = ref<InstanceType<typeof BillForm>>();
    addDialog({
      title: `${title}${$t("账单")}`,
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      loading: false,
      contentRenderer: () => h(BillForm as any, { ref: dialogRef, row }),
      beforeSure: (done, { options }) => {
        const { form, ruleFormRef } = dialogRef.value;
        console.log(form);
        ruleFormRef.validate(async (valid: boolean) => {
          if (valid) {
            // 表单规则校验通过
            options.loading = true;
            try {
              row
                ? await new CourseCourseBillApi().patchTeacherApiCourseBill({
                    courseBillId: row.id.toString(),
                    patchTeacherApiCourseBillRequest: form
                  })
                : await new CourseCourseBillApi().postTeacherApiCourseBills({
                    patchTeacherApiCourseBillRequest: form
                  });
              message(`${title}成功`, {
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
    onSend,
    hook,
    actionBtn
  };
}
