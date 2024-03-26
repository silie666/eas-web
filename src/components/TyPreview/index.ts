import { h, render } from "vue";
import Preview from "@/components/TyPreview/Preview.vue";
import { PreviewType } from "@/components/TyPreview/type";
import { message } from "@/utils/message";

export interface PreviewFile {
  name: string;
  url: string;
}

function getMimeType(suffix: string) {
  switch (suffix) {
    case "pdf":
      return PreviewType.Pdf;
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "bmp":
      return PreviewType.Image;
    case "docx":
      return PreviewType.Docx;
    // case "xls":
    // case "xlsx":
    //   return PreviewType.Excel;
    default:
      return "none";
  }
}

export const tyPreview = (file: PreviewFile | PreviewFile[], initialIndex?: number) => {
  let src: string | string[];
  let type: PreviewType | string;
  // 多个查看一定是图片
  if (Array.isArray(file)) {
    if (file.length === 0) {
      return;
    }
    type = PreviewType.Image;
    src = file.map(item => item.url);
  } else {
    const suffix = file.name.split(".").pop()?.toLowerCase();
    type = getMimeType(suffix);
    if (!Object.values<string>(PreviewType).includes(type)) {
      // 不支持的文件类型, 直接下载
      message("不支持的文件类型, 请下载后本地查看。");
      window.open(file.url);
      return;
    }
    if (type === PreviewType.Pdf) {
      window.open(file.url);
      return;
    }
    if (type === PreviewType.Image) {
      src = [file.url];
    } else {
      src = file.url;
    }
  }

  const handleDestroy = () => {
    // 从 body 上移除组件
    render(null, document.body);
  };

  // 使用 h 函数创建 vnode
  const vNode = h(Preview as any, {
    src,
    type,
    visible: true,
    initialIndex,
    "onUpdate:visible": (val: boolean) => {
      if (!val) {
        handleDestroy();
      }
    }
  });
  // 使用 render 函数将 vnode 渲染为真实DOM并挂载到 body 上
  render(vNode, document.body);
};
