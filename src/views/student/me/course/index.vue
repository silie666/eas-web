<script setup lang="ts">
import TyList from "@/components/TyList/index.vue";
import { useCourseList } from "@/views/student/me/course/utils/hook";

defineOptions({
  name: "CourseList"
});

const { columns, hook } = useCourseList();
</script>

<template>
  <div class="main">
    <TyList :title="$t('我的课程')" :columns="columns" :hook="hook" />
  </div>
</template>
