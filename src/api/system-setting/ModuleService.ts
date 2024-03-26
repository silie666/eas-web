import { ModuleTypes } from "@/views/system-setting/module/types/ModuleTypes";
import { ModuleFormTypes } from "@/views/system-setting/module/types/ModuleFormTypes";
import { createApiFunction } from "@/api/hook";
import { Auth } from "@/constants/back-api";

export const getModuleDetail = () => createApiFunction<ModuleTypes>(Auth.GET_CONFIGS);

export const editModule = (data: ModuleFormTypes) => createApiFunction(Auth.PATCH_CONFIGS, { data });
