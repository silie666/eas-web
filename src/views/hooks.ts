// 抽离可公用的工具函数等用于系统管理页面逻辑
import { onMounted, reactive, ref } from "vue";
import { PaginationProps } from "@pureadmin/table";
import { message } from "@/utils/message";
import { $t } from "@/plugins/i18n-setup";
import { BaseAPI } from "@/services/base";
import { AxiosResponse } from "axios";
import { formatSelectOptions, Option } from "@/utils/format";

// 通用分页逻辑
export function usePaginationHooks(cb: () => void) {
  const pageSizes = [20, 50, 100, 200];
  const pagination = reactive<PaginationProps>({
    pageSizes,
    total: 0,
    pageSize: 20,
    currentPage: 1,
    background: true
  });

  function handleSizeChange(val: number) {
    pagination.pageSize = val;
    console.log(`每页：${val}条`);
    cb && cb();
  }

  function handleCurrentChange(val: number) {
    pagination.currentPage = val;
    console.log(`当前: ${val}页`);
    cb && cb();
  }

  return {
    pageSizes,
    pagination,
    handleSizeChange,
    handleCurrentChange
  };
}

interface Options<T> {
  formatResult?: (data: T[]) => any;
  onSuccess?: () => void;
  immediate?: boolean;
}

type Api<T> = () => Promise<AxiosResponse<T[]>>;
type DeleteFunction<T> = (id: T) => Promise<AxiosResponse<any>>;

export function useListHooks<T>(api: Api<T>, options?: Options<T>) {
  const { formatResult, onSuccess, immediate } = options || {};
  const form = reactive<any>({});
  const { pagination, handleCurrentChange, handleSizeChange } = usePaginationHooks(async () => {
    await getTableData();
  });
  const loading = ref(true);
  const tableData = ref([]);

  const getTableData = async () => {
    try {
      loading.value = true;
      const res = await api.call(new BaseAPI(), {
        page: pagination.currentPage,
        perPage: pagination.pageSize,
        ...form
      });
      tableData.value = formatResult ? formatResult(res.data) : res.data;
      pagination.total = res?.paginator?.total ?? 0;
      onSuccess && onSuccess();
    } catch (e) {
      console.log("列表获取有异常：", e);
    } finally {
      loading.value = false;
    }
  };

  // 默认立即获取数据
  const isImmediate = immediate ?? true;
  isImmediate && getTableData();

  // 选择项
  const selected = ref([]);
  const handleSelectionChange = (val: any) => {
    selected.value = val;
  };

  async function handleDelete<T>(deleteApi: DeleteFunction<T>, obj: T) {
    await deleteApi.call(new BaseAPI(), obj);
    message($t("删除成功"), { type: "success" });
    await getTableData();
  }
  return {
    form,
    pagination,
    loading,
    tableData,
    getTableData,
    handleSelectionChange,
    handleCurrentChange,
    handleSizeChange,
    selected,
    handleDelete
  };
}

export const useOptions = <T, K extends keyof T, V extends keyof T>(api: Api<T>, key: K, valueKey?: V) => {
  const options = ref<(Option<T[K], T[V]> & T)[]>([]);

  onMounted(async () => {
    const res = await api.call(new BaseAPI());
    // 里面直接any，为的是外面的代码提示
    options.value = formatSelectOptions(res.data, key as any, valueKey as any);
  });
  return options;
};
