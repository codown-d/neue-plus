import { buttonProps } from "element-plus";
import { ExtractPropTypes } from "@vue/runtime-core";

export const neButtonProps = {
  ...buttonProps,
  
};
export type NeButtonProps = ExtractPropTypes<typeof neButtonProps>;
