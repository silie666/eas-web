<script lang="ts" setup>
import { reactive, ref } from "vue";
import { $t } from "@/plugins/i18n-setup";
import { PatchApiTeacherApiCourseBillRequest, CourseCourseBill, BasicSimpleApi } from "@/services";
import TySelect from "@/components/TySelect/index.vue";
import { useOptions } from "@/views/hooks";

const props = defineProps<{
  row?: CourseCourseBill;
}>();

const form = reactive<PatchApiTeacherApiCourseBillRequest>({
  course_ids: props?.row?.course_ids ?? ""
});

const courseList = useOptions(new BasicSimpleApi().getApiCommonApiCourses, "id");
const ruleFormRef = ref();

defineExpose({ ruleFormRef, form });
</script>

<template>
  <el-form ref="ruleFormRef" :model="form" label-width="100px">
    <el-form-item :label="$t('课程')" prop="course_ids">
      <TySelect :options="courseList" v-model="form.course_ids" collapse-tags multiple :placeholder="$t('课程')" />
    </el-form-item>
  </el-form>
</template>
