<script setup lang="ts">
import TyList from "@/components/TyList/index.vue";
import { useCourseList } from "@/views/teacher/course/utils/hook";

defineOptions({
  name: "CourseList"
});

const { columns, hook, actionBtn } = useCourseList();
</script>

<template>
  <div class="main">
    <TyList :title="$t('课程管理')" :columns="columns" :hook="hook" :action-btn="actionBtn" />
  </div>
</template>
