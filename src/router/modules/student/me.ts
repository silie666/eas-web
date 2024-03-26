import { $t } from "@/plugins/i18n-setup";
import { Auth } from "@/constants/back-api";

export default {
  path: "/student/me",
  redirect: "/student/me/courses",
  meta: {
    icon: "material-symbols:add-business",
    title: $t("我的"),
    rank: 1
  },
  children: [
    {
      path: "/student/me/courses",
      name: "InsuranceList",
      component: () => import("@/views/student/me/course/index.vue"),
      meta: {
        icon: "entypo:creative-commons-public-domain",
        title: $t("我的课程"),
        showParent: true,
        roles: [Auth.GET_STUDENT_COURSES]
      }
    },
    {
      path: "/student/me/bills",
      name: "meBillList",
      component: () => import("@/views/student/me/bill/index.vue"),
      meta: {
        icon: "material-symbols:adf-scanner-outline-sharp",
        title: $t("我的账单"),
        showParent: true,
        roles: [Auth.GET_STUDENT_COURSES_BILLS]
      }
    },
    {
      path: "/student/me/cards",
      name: "meCardList",
      component: () => import("@/views/student/me/card/index.vue"),
      meta: {
        icon: "material-symbols:adf-scanner-outline-sharp",
        title: $t("我的信用卡"),
        showParent: true,
        roles: [Auth.GET_STUDENT_ME_CARDS]
      }
    }
  ]
} as RouteConfigsTable;
