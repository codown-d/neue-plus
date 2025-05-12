import { cardProps } from "element-plus";
import { ExtractPropTypes } from "@vue/runtime-core";

export const neCardProps = {
  ...cardProps,
};
export type NeCardProps = ExtractPropTypes<typeof neCardProps>;