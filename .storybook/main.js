module.exports = {
  stories: ["../packages/**/*.stories.mdx", "../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss")
        },
        cssLoaderOptions: {
          importLoaders: 1,
        },
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react"
};
