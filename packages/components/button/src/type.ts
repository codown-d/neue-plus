import { buttonProps } from "element-plus";
import { ExtractPropTypes } from "vue";

export const neButtonProps = {
  ...buttonProps,
  
};
export type NeButtonProps = ExtractPropTypes<typeof neButtonProps>;
