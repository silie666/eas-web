import { $t } from "@/plugins/i18n-setup";
import { CourseCourseApi, CourseCourseApiGetStudentApiCoursesRequest } from "@/services";
import { useListHooks } from "@/views/hooks";

export function useCourseList() {
  const hook = useListHooks(new CourseCourseApi().getStudentApiCourses);
  const columns: TableColumnList<CourseCourseApiGetStudentApiCoursesRequest> = [
    {
      label: $t("序号"),
      type: "index",
      width: 70
    },
    {
      label: $t("课程名称"),
      prop: "course.name",
      minWidth: 130,
      search: {
        type: "input"
      }
    },
    {
      label: $t("课程内容"),
      prop: "course.content",
      minWidth: 130,
      search: {
        type: "input"
      }
    },
    {
      label: $t("日期"),
      prop: "course.date",
      minWidth: 130,
      search: {
        type: "dateRange"
      }
    }
  ];

  return {
    columns,
    hook
  };
}
