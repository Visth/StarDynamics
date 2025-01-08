const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
  '/',
  '/getting-started',
  '/docs',
  '/offer',
  '/tutorials',
  '/tutorials/axelote-pre-requirements-redis-set-up',
  '/tutorials/axelote-provider-set-up',
  '/tutorials/integrating-axelote-adapter-with-spring-boot-application',
  '/tutorials/integrating-frontend-app-with-axelote',
  '/tutorials/creating-todo-list-using-react-and-axelote',
  '/tutorials/axelote-js-query-builder',
  '/tutorials/axelote-js-repositories',
  '/tutorials/axelote-js-transactions',
  '/tutorials/axelote-cli-securing-combined-queries',
  '/tutorials/axelote-adapter-security-context',
  '/tutorials/axelote-adapter-security-rules',
  '/tutorials/axelote-adapter-exceptions-handling',
];

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      { test: /\.json$/, type: 'json' },
      {
        test: /\.(woff|png|webp|woff2|eot|ttf|svg|gif|ico|txt)(\?[a-z0-9=.-]+)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (resourcePath, resourceQuery) => {
                if (resourcePath.endsWith('.png') || resourcePath.endsWith('.webp')) {
                  return '[name].[ext]';
                }
                return '[hash].[ext]';
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', `./build/`),
    filename: 'bundle-[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      inject: 'head',
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      host: 'http://axelote.com',
    }),
    new SitemapPlugin({
      base: 'http://axelote.com',
      paths,
    }),
  ],
  stats: 'errors-only',
};
