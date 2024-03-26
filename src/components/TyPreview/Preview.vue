<script setup lang="ts">
import { ElDialog, ElImageViewer } from "element-plus";
import VueOfficeDocx from "@vue-office/docx";
import { useVModel } from "@vueuse/core";
import { PreviewType } from "@/components/TyPreview/type";
import { computed } from "vue";
defineOptions({
  name: "Preview"
});

const props = defineProps<{
  src: string | string[];
  type: PreviewType;
  visible: boolean;
  initialIndex?: number;
}>();
// 计算属性，用于确定src是否为字符串数组
const isSrcArray = computed(() => Array.isArray(props.src));
const emit = defineEmits(["update:visible"]);
const visible = useVModel(props, "visible", emit);
</script>

<template>
  <el-dialog v-if="type !== PreviewType.Image" fullscreen v-model="visible">
    <!-- 如果type为Docx -->
    <vue-office-docx v-if="type === PreviewType.Docx && !isSrcArray" :src="src" style="height: 90vh" />
    <!-- 如果type为Excel -->
    <!--    <vue-office-excel v-else-if="type === PreviewType.Excel && !isSrcArray" :src="src" style="height: 90vh" />-->
  </el-dialog>
  <!-- 如果type为Image且src为字符串数组 -->
  <el-image-viewer
    :initial-index="initialIndex"
    v-else
    :crossorigin="null"
    @close="visible = false"
    :url-list="src as string[]"
  />
</template>

<style scoped lang="scss"></style>
