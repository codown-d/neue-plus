import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'
import {
  buildOutput,
  epOutput,
  epPackage,
  projRoot,
} from '@element-plus/build-utils'
import { buildConfig, run, runTask, withTaskName } from './src'
import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'typings', 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyTypesToSource: TaskFunction = async () => {
  const typesDir = path.resolve(buildOutput, 'types', 'packages')
  const sourceDir = path.resolve(projRoot, 'packages')

  // Copy .d.ts files to source directories
  await copy(typesDir, sourceDir, {
    recursive: true,
    filter: (src) => {
      // Only copy .d.ts files, exclude .d.mjs and .d.mjs.map files
      return (
        src.endsWith('.d.ts') ||
        (!src.includes('.') && !src.includes('node_modules'))
      )
    },
  })

  // Fix import paths in copied .d.ts files
  const { readFile, writeFile } = await import('fs/promises')

  // Fix locales.d.ts
  const localesFile = path.resolve(sourceDir, 'locales.d.ts')
  try {
    let content = await readFile(localesFile, 'utf8')
    content = content.replace(
      /export \* from 'element-plus\/es\/locale';?/,
      "export * from './locale';"
    )
    await writeFile(localesFile, content, 'utf8')
  } catch (e) {
    // File might not exist, ignore
  }

  // Fix base component style files
  const baseStyleFiles = [
    path.resolve(sourceDir, 'components/base/style/index.d.ts'),
    path.resolve(sourceDir, 'components/base/style/css.d.ts'),
  ]

  for (const file of baseStyleFiles) {
    try {
      let content = await readFile(file, 'utf8')
      // Fix theme-chalk imports
      content = content.replace(
        /import 'element-plus\/theme-chalk\/(src\/)?([^']+)';?/g,
        "import '@element-plus/theme-chalk/$1$2';"
      )
      // Fix specific el-base.css import
      content = content.replace(
        /import 'element-plus\/theme-chalk\/el-base\.css';?/g,
        "import '@element-plus/theme-chalk/base.css';"
      )
      await writeFile(file, content, 'utf8')
    } catch (e) {
      // File might not exist, ignore
    }
  }

  // Fix card component style files
  const cardStyleFiles = [
    path.resolve(sourceDir, 'components/card/style/index.d.ts'),
    path.resolve(sourceDir, 'components/card/style/css.d.ts'),
  ]

  for (const file of cardStyleFiles) {
    try {
      let content = await readFile(file, 'utf8')
      // Fix base component imports
      content = content.replace(
        /import 'element-plus\/es\/components\/base\/style(\/css)?';?/g,
        "import '@element-plus/components/base/style$1';"
      )
      // Fix theme-chalk imports
      content = content.replace(
        /import 'element-plus\/theme-chalk\/(src\/)?([^']+)';?/g,
        "import '@element-plus/theme-chalk/$1$2';"
      )
      // Fix specific el-card.css import
      content = content.replace(
        /import 'element-plus\/theme-chalk\/el-card\.css';?/g,
        "import '@element-plus/theme-chalk/el-card.css';"
      )
      await writeFile(file, content, 'utf8')
    } catch (e) {
      // File might not exist, ignore
    }
  }
}

export const cleanUnwantedTypeFiles: TaskFunction = async () => {
  const { remove } = await import('fs-extra')
  const glob = (await import('fast-glob')).default

  // Remove only .d.mjs and .d.mjs.map files from dist directory
  // Keep .mjs.map files (JavaScript source maps)
  const unwantedFiles = await glob(['**/*.d.mjs', '**/*.d.mjs.map'], {
    cwd: buildOutput,
    absolute: true,
  })

  await Promise.all(unwantedFiles.map((file) => remove(file)))
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'theme-chalk/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    // runTask('buildHelper'), // Removed: docs directory no longer exists
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles, copyTypesToSource),
  cleanUnwantedTypeFiles
)

export * from './src'
