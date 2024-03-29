import { $t } from "@/plugins/i18n-setup";
import { Auth } from "@/constants/back-api";

export default {
  path: "/teacher",
  redirect: "/teacher/course",
  meta: {
    icon: "material-symbols:add-business",
    title: $t("课程"),
    rank: 1
  },
  children: [
    {
      path: "/teacher/course",
      name: "CourseList",
      component: () => import("@/views/teacher/course/index.vue"),
      meta: {
        icon: "material-symbols:adf-scanner-outline-sharp",
        title: $t("课程管理"),
        showParent: true,
        roles: [Auth.GET_TEACHER_COURSES]
      }
    },
    {
      path: "/teacher/course-bills",
      name: "BillList",
      component: () => import("@/views/teacher/bill/index.vue"),
      meta: {
        icon: "material-symbols:adf-scanner-outline-sharp",
        title: $t("账单管理"),
        showParent: true,
        roles: [Auth.GET_TEACHER_COURSE_BILLS]
      }
    },
    {
      path: "/teacher/course-bills/detail/:courseBillId",
      name: "BillDetail",
      component: () => import("@/views/teacher/bill/BillDetail.vue"),
      meta: {
        showLink: false,
        hiddenTag: true,
        activePath: "/asset/search",
        roles: [Auth.GET_TEACHER_COURSE_BILLS_BY_ID]
      }
    }
  ]
} as RouteConfigsTable;
