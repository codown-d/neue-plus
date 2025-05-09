import { cardProps } from "element-plus";
import { ExtractPropTypes } from "vue";

export const neCardProps = {
  ...cardProps,
};
export type NeCardProps = ExtractPropTypes<typeof neCardProps>;