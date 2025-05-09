# lowcode

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

编译 material-render 需要到 material-render 文件夹下执行 npm run build

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 项目介绍

neue-cdp-space/
│
├── admin/                      # 业务项目：协同空间与CAX前端
└── packages/                   # 低代码渲染引擎
    ├──material-render          # 渲染处理
    └──materials                # 组件库


修改完 material-render 、 materials 执行 npm run build （后续增加 watch 自动刷新）

计划任务
1、基于 antd-vue 渲染已经完成
2、表单组件 提交校验重置等功能的
3、表格功能
4、事件流转
5、和后端的 api 接口对接功能
