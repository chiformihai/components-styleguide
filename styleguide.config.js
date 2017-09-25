'use strict';
/*global __dirname*/

var path = require('path');

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
      components: 'src/components/**/*.js'
    }
  ],
  webpackConfig: function(env) {
    var dir = path.join(__dirname, 'src/components');

    var babel = {
      test: /\.js?$/,
      include: dir,
      loader: 'babel-loader'
    };
    if (env !== 'production') {
      babel.query = {
        presets: ['es2015', 'react-hmre']
      };
    }

    return {
      module: {
        loaders: [babel]
      }
    };
  },
};
