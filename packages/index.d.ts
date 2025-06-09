import { AllowedComponentProps } from "vue";
import { App } from "vue";
import { ComponentCustomProps } from "vue";
import { ComponentOptionsMixin } from "vue";
import { ComputedRef } from "vue";
import { CSSProperties } from "vue";
import { default as dayjs } from "dayjs";
import { DefineComponent } from "vue";
import { ExtractPropTypes } from "vue";
import type { InjectionKey } from "vue";
import type { ObjectDirective } from "vue";
import type { Plugin as Plugin_2 } from "vue";
import type { PropType } from "vue";
import { Ref } from "vue";
import type { ShallowRef } from "vue";
import { StyleValue } from "vue";
import { VNodeProps } from "vue";
declare const __VLS_component: DefineComponent<{
    readonly header: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly footer: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly bodyStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly headerClass: StringConstructor;
    readonly bodyClass: StringConstructor;
    readonly footerClass: StringConstructor;
    readonly shadow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, "always", boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly header: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly footer: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly bodyStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly headerClass: StringConstructor;
    readonly bodyClass: StringConstructor;
    readonly footerClass: StringConstructor;
    readonly shadow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, "always", boolean>;
}>>, {
    readonly footer: string;
    readonly header: string;
    readonly bodyStyle: StyleValue;
    readonly shadow: EpPropMergeType<StringConstructor, "always" | "never" | "hover", unknown>;
}>;
declare function __VLS_template(): {
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
export declare type CardInstance = InstanceType<typeof _default_2> & unknown;
export declare type CardProps = ExtractPropTypes<typeof cardProps>;
export declare const cardProps: {
    readonly header: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly footer: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly bodyStyle: EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly headerClass: StringConstructor;
    readonly bodyClass: StringConstructor;
    readonly footerClass: StringConstructor;
    readonly shadow: EpPropFinalized<StringConstructor, "always" | "never" | "hover", unknown, "always", boolean>;
};
export declare const CHANGE_EVENT = "change";
export declare const ClickOutside: ObjectDirective;
export declare type ColumnAlignment = typeof columnAlignment[number];
export declare const columnAlignment: readonly [
    "left",
    "center",
    "right"
];
export declare type ComponentSize = typeof componentSizes[number];
export declare const componentSizeMap: {
    readonly large: 40;
    readonly default: 32;
    readonly small: 24;
};
export declare const componentSizes: readonly [
    "",
    "default",
    "small",
    "large"
];
export declare type DatePickType = typeof datePickTypes[number];
export declare const datePickTypes: readonly [
    "year",
    "years",
    "month",
    "months",
    "date",
    "dates",
    "week",
    "datetime",
    "datetimerange",
    "daterange",
    "monthrange",
    "yearrange"
];
export { dayjs };
declare const _default: {
    version: string;
    install: (app: App, options?: any) => void;
};
export default _default;
declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export declare const defaultNamespace = "el";
export declare const ElCard: SFCWithInstall<typeof _default_2>;
/**
 * output prop `buildProp` or `buildProps`.
 *
 * prop 输出参数。
 *
 * @example
 * EpProp<'a', 'b', true>
 * ⬇️
 * {
 readonly type: PropType<"a">;
 readonly required: true;
 readonly validator: ((val: unknown) => boolean) | undefined;
 readonly default: "b";
 __epPropKey: true;
 }
 */
declare type EpProp<Type, Default, Required> = {
    readonly type: PropType<Type>;
    readonly required: [
        Required
    ] extends [
        true
    ] ? true : false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    [epPropKey]: true;
} & IfNever<Default, unknown, {
    readonly default: Default;
}>;
/**
 * Finalized conversion output
 *
 * 最终转换 EpProp
 */
declare type EpPropFinalized<Type, Value, Validator, Default, Required> = EpProp<EpPropMergeType<Type, Value, Validator>, UnknownToNever<Default>, Required>;
declare const epPropKey = "__epPropKey";
/**
 * Merge Type, Value, Validator types
 * 合并 Type、Value、Validator 的类型
 *
 * @example
 * EpPropMergeType<StringConstructor, '1', 1> =>  1 | "1" // ignores StringConstructor
 * EpPropMergeType<StringConstructor, never, number> =>  string | number
 */
declare type EpPropMergeType<Type, Value, Validator> = IfNever<UnknownToNever<Value>, ResolvePropType<Type>, never> | UnknownToNever<Value> | UnknownToNever<Validator>;
export declare const EVENT_CODE: {
    tab: string;
    enter: string;
    space: string;
    left: string;
    up: string;
    right: string;
    down: string;
    esc: string;
    delete: string;
    backspace: string;
    numpadEnter: string;
    pageUp: string;
    pageDown: string;
    home: string;
    end: string;
};
/**
 * Extract the type of a single prop
 *
 * 提取单个 prop 的参数类型
 *
 * @example
 * ExtractPropType<{ type: StringConstructor }> => string | undefined
 * ExtractPropType<{ type: StringConstructor, required: true }> => string
 * ExtractPropType<{ type: BooleanConstructor }> => boolean
 */
declare type ExtractPropType<T extends object> = Value<ExtractPropTypes<{
    key: T;
}>>;
declare type IfNever<T, Y = true, N = false> = [
    T
] extends [
    never
] ? Y : N;
declare type IfUnknown<T, Y, N> = [
    unknown
] extends [
    T
] ? Y : N;
export declare const INPUT_EVENT = "input";
export declare const install: (app: App, options?: any) => void;
export declare const INSTALLED_KEY: unique symbol;
export declare const makeInstaller: (components?: Plugin_2[]) => {
    version: string;
    install: (app: App, options?: any) => void;
};
export declare const Mousewheel: ObjectDirective;
export declare const namespaceContextKey: InjectionKey<Ref<string | undefined>>;
declare interface RepeatClickOptions {
    interval?: number;
    delay?: number;
    handler: (...args: unknown[]) => unknown;
}
/**
 * Extracts types via `ExtractPropTypes`, accepting `PropType<T>`, `XXXConstructor`, `never`...
 *
 * 通过 `ExtractPropTypes` 提取类型，接受 `PropType<T>`、`XXXConstructor`、`never`...
 *
 * @example
 * ResolvePropType<BooleanConstructor> => boolean
 * ResolvePropType<PropType<T>> => T
 **/
declare type ResolvePropType<T> = IfNever<T, never, ExtractPropType<{
    type: WritableArray<T>;
    required: true;
}>>;
declare type SFCWithInstall<T> = T & Plugin_2;
export declare const TrapFocus: ObjectDirective;
declare type UnknownToNever<T> = IfUnknown<T, never, T>;
export declare const UPDATE_MODEL_EVENT = "update:modelValue";
export declare function useFocusController<T extends {
    focus: () => void;
}>(target: ShallowRef<T | undefined>, { beforeFocus, afterFocus, beforeBlur, afterBlur, }?: UseFocusControllerOptions): {
    isFocused: Ref<boolean>;
    /** Avoid using wrapperRef and handleFocus/handleBlur together */
    wrapperRef: ShallowRef<HTMLElement | undefined>;
    handleFocus: (event: FocusEvent) => void;
    handleBlur: (event: FocusEvent) => void;
};
declare interface UseFocusControllerOptions {
    /**
     * return true to cancel focus
     * @param event FocusEvent
     */
    beforeFocus?: (event: FocusEvent) => boolean | undefined;
    afterFocus?: () => void;
    /**
     * return true to cancel blur
     * @param event FocusEvent
     */
    beforeBlur?: (event: FocusEvent) => boolean | undefined;
    afterBlur?: () => void;
}
export declare const useGetDerivedNamespace: (namespaceOverrides?: Ref<string | undefined>) => ComputedRef<string>;
export declare const useNamespace: (block: string, namespaceOverrides?: Ref<string | undefined>) => {
    namespace: ComputedRef<string>;
    b: (blockSuffix?: string) => string;
    e: (element?: string) => string;
    m: (modifier?: string) => string;
    be: (blockSuffix?: string, element?: string) => string;
    em: (element?: string, modifier?: string) => string;
    bm: (blockSuffix?: string, modifier?: string) => string;
    bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
    is: {
        (name: string, state: boolean | undefined): string;
        (name: string): string;
    };
    cssVar: (object: Record<string, string>) => Record<string, string>;
    cssVarName: (name: string) => string;
    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
    cssVarBlockName: (name: string) => string;
};
export declare type UseNamespaceReturn = ReturnType<typeof useNamespace>;
declare type Value<T> = T[keyof T];
export declare const version: string;
export declare const vRepeatClick: ObjectDirective<HTMLElement, RepeatClickOptions | RepeatClickOptions["handler"]>;
export declare const WEEK_DAYS: readonly [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
];
declare type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
declare type WritableArray<T> = T extends readonly any[] ? Writable<T> : T;
export {};
