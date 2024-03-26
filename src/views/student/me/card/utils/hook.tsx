import { $t } from "@/plugins/i18n-setup";
import { addDialog } from "@/components/ReDialog";
import { h, ref } from "vue";
import { CourseCourse, UserMeApi, UserMeApiGetStudentApiMeCardsRequest } from "@/services";
import { useListHooks } from "@/views/hooks";
import { ActionBtn } from "@/components/TyList/type";
import { Auth } from "@/constants/back-api";
import { message } from "@/utils/message";
import CardForm from "@/views/student/me/card/CardForm.vue";

export function useCardList() {
  const hook = useListHooks(new UserMeApi().getStudentApiMeCards);
  const { getTableData } = hook;
  const actionBtn: ActionBtn<CourseCourse> = {
    add: {
      auth: Auth.POST_STUDENT_ME_CARDS,
      onClick() {
        openDialog();
      }
    },
    edit: {
      auth: Auth.PATCH_STUDENT_ME_CARDS_BY_ID,
      onClick(row) {
        openDialog($t("编辑"), row);
      }
    },
    delete: {
      auth: Auth.DELETE_STUDENT_ME_CARDS_BY_ID,
      onConfirm({ id: cardId }) {
        hook.handleDelete(new UserMeApi().deleteStudentApiMeCard, {
          cardId
        });
      }
    }
  };
  const columns: TableColumnList<UserMeApiGetStudentApiMeCardsRequest> = [
    {
      label: $t("序号"),
      type: "index",
      width: 70
    },
    {
      label: $t("品牌名称"),
      prop: "brand_name",
      minWidth: 130,
      search: {
        type: "input"
      }
    },
    {
      label: $t("信用卡号"),
      prop: "number",
      minWidth: 130,
      search: {
        type: "input"
      }
    },
    {
      label: $t("过期时间"),
      prop: "expiration_date",
      minWidth: 130
    },
    {
      label: $t("操作"),
      width: 200,
      slot: "operation"
    }
  ];

  function openDialog(title = $t("新增"), row?: CourseCourse) {
    const dialogRef = ref<InstanceType<typeof CardForm>>();
    addDialog({
      title: `${title}${$t("信用卡")}`,
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      loading: false,
      contentRenderer: () => h(CardForm as any, { ref: dialogRef, row }),
      beforeSure: (done, { options }) => {
        const { form, ruleFormRef } = dialogRef.value;
        ruleFormRef.validate(async (valid: boolean) => {
          if (valid) {
            // 表单规则校验通过
            options.loading = true;
            try {
              row
                ? await new UserMeApi().patchStudentApiMeCard({
                    cardId: row.id.toString(),
                    postStudentApiMeCardsRequest: form
                  })
                : await new UserMeApi().postStudentApiMeCards({
                    postStudentApiMeCardsRequest: form
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
    hook,
    actionBtn
  };
}
