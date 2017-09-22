module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md'
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/*.js'
    }
  ],
  getExampleFilename: function(componentPath) {
    return componentPath.replace(/\.jsx?$/,   '.md');
  },
  styleguideDir: 'styleguide',
  updateWebpackConfig: function(webpackConfig, env) {
    webpackConfig.module.resolve = {
      extensions: [
        '',
        '.js',
        '.jsx'
      ]
    };
    webpackConfig.module.loaders = webpackConfig.module.loaders.concat([
      // Babel loader will use your project’s .babelrc
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel'
      }
    ]);

    return webpackConfig;
  }
};