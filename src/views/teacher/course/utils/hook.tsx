import { $t } from "@/plugins/i18n-setup";
import { addDialog } from "@/components/ReDialog";
import { h, ref } from "vue";
import { CourseCourseApi, CourseCourseApiGetTeacherApiCoursesRequest, CourseCourse } from "@/services";
import { useListHooks } from "@/views/hooks";
import { ActionBtn } from "@/components/TyList/type";
import { Auth } from "@/constants/back-api";
import CourseForm from "@/views/teacher/course/CourseForm.vue";
import { message } from "@/utils/message";

export function useCourseList() {
  const hook = useListHooks(new CourseCourseApi().getTeacherApiCourses);
  const { getTableData } = hook;
  const actionBtn: ActionBtn<CourseCourse> = {
    add: {
      auth: Auth.POST_TEACHER_COURSES,
      onClick() {
        openDialog();
      }
    },
    edit: {
      auth: Auth.PATCH_TEACHER_COURSES_BY_ID,
      onClick(row) {
        openDialog($t("编辑"), row);
      }
    },
    delete: {
      auth: Auth.DELETE_TEACHER_COURSES_BY_ID,
      onConfirm({ id: courseId }) {
        hook.handleDelete(new CourseCourseApi().deleteTeacherApiCourse, {
          courseId
        });
      }
    }
  };
  const columns: TableColumnList<CourseCourseApiGetTeacherApiCoursesRequest> = [
    {
      label: $t("序号"),
      type: "index",
      width: 70
    },
    {
      label: $t("课程名称"),
      prop: "name",
      minWidth: 130,
      search: {
        type: "input"
      }
    },
    {
      label: $t("日期"),
      prop: "date",
      minWidth: 130,
      search: {
        type: "dateRange"
      }
    },
    {
      label: $t("费用（日元）"),
      prop: "fees",
      minWidth: 130
    },
    {
      label: $t("学生"),
      prop: "students",
      minWidth: 90,
      cellRenderer: (scope): any => {
        const textArr = [];
        let student: { id: number; name: string };
        for (student of scope.row.students) {
          if ((scope.row.student_ids as number[]).includes(student.id)) {
            textArr.push(student.name);
          }
        }
        return textArr.join(",") as string;
      }
    },
    {
      label: $t("操作"),
      width: 200,
      slot: "operation"
    }
  ];

  function openDialog(title = $t("新增"), row?: CourseCourse) {
    const dialogRef = ref<InstanceType<typeof CourseForm>>();
    addDialog({
      title: `${title}${$t("课程")}`,
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      loading: false,
      contentRenderer: () => h(CourseForm as any, { ref: dialogRef, row }),
      beforeSure: (done, { options }) => {
        const { form, ruleFormRef } = dialogRef.value;
        ruleFormRef.validate(async (valid: boolean) => {
          if (valid) {
            // 表单规则校验通过
            options.loading = true;
            try {
              row
                ? await new CourseCourseApi().patchTeacherApiCourse({
                    courseId: row.id.toString(),
                    patchTeacherApiCourseRequest: form
                  })
                : await new CourseCourseApi().postTeacherApiCourses({
                    patchTeacherApiCourseRequest: form
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
