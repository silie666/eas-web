<script setup lang="ts">
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ComponentType, UploadType } from "@/components/TyUpload/types";
import { tyPreview } from "@/components/TyPreview";
import { useVModel } from "@vueuse/core";
import { ref, watch } from "vue";
import { UploadProps, UploadRequestHandler, UploadUserFile } from "element-plus";
import { BasicFile, BasicFile1, BasicFileApi } from "@/services";
import { UploadFile } from "element-plus/es/components/upload/src/upload";
import TablePreview from "@/components/TyPreview/TablePreview.vue";

defineOptions({
  name: "TyUpload"
});

const props = withDefaults(
  defineProps<{
    codeList: string[];
    original?: BasicFile[];
    componentType?: ComponentType;
    uploadType: UploadType;
  }>(),
  {
    codeList: () => [],
    original: () => [],
    componentType: ComponentType.Normal
  }
);

const fileList = ref<(UploadUserFile & { code?: string })[]>([]);
watch(
  () => props.original,
  newVal => {
    fileList.value = newVal.length > 0 ? newVal.map(({ name, url, code }) => ({ name, url, code })) : [];
  }
);

const emit = defineEmits(["update:codeList"]);
const codeList = useVModel(props, "codeList", emit);

const handleRemove: UploadProps["onRemove"] = (uploadFile: UploadFile & { code: string }) => {
  const codeIndex = codeList.value.findIndex(code => code === uploadFile.code);
  if (codeIndex > -1) {
    codeList.value.splice(codeIndex, 1);
  }
};

// 单图浏览
const handlePreview: UploadProps["onPreview"] = uploadFile => {
  tyPreview({ name: uploadFile.name, url: uploadFile.url });
};

// 卡片式图片浏览
const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile: UploadFile & { code: string }) => {
  const imageIndex = fileList.value.findIndex(item => item.url === uploadFile.url);
  if (imageIndex > -1) {
    tyPreview(
      fileList.value.map(item => ({
        name: item.name,
        url: item.url
      })),
      imageIndex
    );
  }
};

const ajaxUpload: UploadRequestHandler = async option => {
  const files = option.file;
  const uploadRes =
    (props.uploadType as UploadType) === UploadType.Image
      ? await new BasicFileApi().postCommonApiImages({ files })
      : await new BasicFileApi().postCommonApiFiles({ files });
  option.onSuccess(uploadRes.data[0]);
};

const handleSuccess = (response: BasicFile1, file: UploadFile & { code: string }) => {
  if (!response) {
    return;
  }
  const { code, url } = response;
  codeList.value.push(code);
  file.code = code;
  file.url = url;
};
</script>

<template>
  <el-upload
    v-if="componentType === ComponentType.Normal"
    class="w-[100%]"
    :drag="uploadType !== UploadType.Image"
    v-bind="$attrs"
    v-model:file-list="fileList"
    action="#"
    multiple
    :accept="uploadType === UploadType.Image ? 'image/*' : '*/*'"
    :list-type="uploadType === UploadType.Image ? 'picture-card' : 'text'"
    :http-request="ajaxUpload"
    :on-remove="handleRemove"
    :on-preview="uploadType === UploadType.Image ? handlePictureCardPreview : handlePreview"
    :on-success="handleSuccess"
  >
    <component
      v-if="uploadType === UploadType.Image"
      :is="useRenderIcon('ic:baseline-plus')"
      class="w-[32px] h-[32px]"
    />
    <div class="flex flex-col items-center justify-center" v-else-if="uploadType === UploadType.File">
      <component :is="useRenderIcon('ep:upload-filled')" class="el-icon--upload" />
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </div>
  </el-upload>

  <div class="flex" v-else-if="componentType === ComponentType.Table">
    <el-popover :width="600" trigger="click" v-if="fileList.length > 0">
      <template #reference>
        <el-button link type="primary">共（{{ fileList.length }}）份文件</el-button>
      </template>
      <TablePreview :is-uploaded="false" :data="fileList" />
    </el-popover>
    <el-upload
      class="w-[100%]"
      v-bind="$attrs"
      :show-file-list="false"
      v-model:file-list="fileList"
      action="#"
      multiple
      :accept="uploadType === UploadType.Image ? 'image/*' : '*/*'"
      :http-request="ajaxUpload"
      :on-remove="handleRemove"
      :on-preview="uploadType === UploadType.Image ? handlePictureCardPreview : handlePreview"
      :on-success="handleSuccess"
    >
      <el-button size="small" type="primary">上传</el-button>
    </el-upload>
  </div>
</template>

<style scoped lang="scss"></style>
