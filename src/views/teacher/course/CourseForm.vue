<script lang="ts" setup>
import { reactive, ref } from "vue";
import { $t } from "@/plugins/i18n-setup";
import { PatchApiTeacherApiCourseRequest, CourseCourse, BasicSimpleApi } from "@/services";
import TySelect from "@/components/TySelect/index.vue";
import { useOptions } from "@/views/hooks";

const props = defineProps<{
  row?: CourseCourse;
}>();

const form = reactive<PatchApiTeacherApiCourseRequest>({
  name: props?.row?.name ?? "",
  content: props?.row?.content ?? "",
  date: props?.row?.date ?? "",
  fees: props?.row?.fees ?? null,
  student_ids: props?.row?.student_ids ?? []
});

const studentList = useOptions(new BasicSimpleApi().getApiCommonApiStudents, "id");

const ruleFormRef = ref();

defineExpose({ ruleFormRef, form });
</script>

<template>
  <el-form ref="ruleFormRef" :model="form" label-width="100px">
    <el-form-item :label="$t('课程名称')" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item :label="$t('课程内容')" prop="content">
      <el-input v-model="form.content" type="textarea" />
    </el-form-item>
    <el-form-item :label="`${$t('上课日期')}`" prop="date">
      <el-date-picker
        v-model="form.date"
        type="month"
        :placeholder="`${$t('请选择')} ${$t('上课日期')}`"
        value-format="YYYY-MM-DDTHH:mm:ssZ"
      />
    </el-form-item>
    <el-form-item :label="`${$t('费用(日元)')}`" prop="fees">
      <el-input v-model="form.fees" :placeholder="`${$t('请输入')} ${$t('费用')}${$t('(100日元起)')}`" />
    </el-form-item>
    <el-form-item :label="$t('学生')" prop="student_ids">
      <TySelect :options="studentList" v-model="form.student_ids" collapse-tags multiple :placeholder="$t('学生')" />
    </el-form-item>
  </el-form>
</template>
