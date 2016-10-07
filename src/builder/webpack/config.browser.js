// @flow

import { join } from "path"
import commonWebpackConfig from "./config.common.js"
import { offlinePlugin } from "../../_utils/offline/webpack.js"
import PhenomicLoaderWebpackPlugin from "../../loader/plugin.js"

const chunkNameBrowser = "phenomic.browser"

export default (config: PhenomicConfig): WebpackConfig => {

  const webpackConfig = commonWebpackConfig(config)

  return {
    ...webpackConfig,
    plugins: [
      new PhenomicLoaderWebpackPlugin(),
      ...webpackConfig.plugins,
      ...offlinePlugin(config),
    ],

    entry: {
      ...config.webpackConfig ? config.webpackConfig.entry : {},

      [chunkNameBrowser]: [
        join(config.cwd, config.scriptBrowser),
      ],
    },
  }
}
