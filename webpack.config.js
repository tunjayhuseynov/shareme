const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = [
  {
    entry: './public/js/index.js',
    mode: 'development',
    watch: true,
    output: {
      filename: 'main-bundle.js',
      path: path.resolve(__dirname, './public/dist'),
    },
  },
  {
    mode: 'development',
    watch: true,
    entry: ['./public/css/material.scss', './public/js/material.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './public/dist'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer()
                  ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
                implementation: require('sass'),

                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
                sassOptions: {
                  includePaths: ['./node_modules'],
                },
              },
            }
          ],
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }
      ],
    },
  }
];