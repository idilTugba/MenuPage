const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
//lossless//  npm uninstall imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo --save-dev
//lossly// npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo --save-dev

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'inline-source-map' : false,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]'  
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']  
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "icss",
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportLocalsConvention: 'camelCaseOnly'
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // --------
      // SCSS MODULES
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: (devMode ? "style-loader" : MiniCssExtractPlugin.loader),
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportLocalsConvention: 'camelCaseOnly'
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'], 
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',  
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      }
      
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,  
          },
        },
      }), // Terser Plugin
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.imageminMinify,
      //     options: {
      //       plugins: [

      //         //lossly
      //         ['imagemin-gifsicle', { interlaced: true, optimizationLevel: 3 }],
      //         ['imagemin-mozjpeg', { progressive: true, quality: 75 }], // Kalite değerini ayarlayabilirsiniz
      //         ['imagemin-pngquant', { quality: [0.6, 0.8] }], // Kalite aralığını ayarlayabilirsiniz
      //         // ['imagemin-svgo'],
      //         //lossly

      //         // Lossless optimization with custom option
      //         // ["gifsicle", { interlaced: true }],
      //         // ["jpegtran", { progressive: true }],
      //         // ["optipng", { optimizationLevel: 7 }],
      //         // // Svgo configuration here https://github.com/svg/svgo#configuration
      //         // [
      //         //   "svgo",
      //         //   {
      //         //     plugins: [
      //         //       {
      //         //         name: "preset-default",
      //         //         params: {
      //         //           overrides: {
      //         //             removeViewBox: false,
      //         //             addAttributesToSVGElement: {
      //         //               params: {
      //         //                 attributes: [
      //         //                   { xmlns: "http://www.w3.org/2000/svg" },
      //         //                 ],
      //         //               },
      //         //             },
      //         //           },
      //         //         },
      //         //       },
      //         //     ],
      //         //   },
      //         // ],
      //         // Lossless optimization with custom option
              
      //       ], 
      //     },
      //   },
      // }), //Image minimizer
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({filename: `app.css`,}),
    new HtmlWebpackPlugin({
      title: 'Menu page',
      template: './src/index.html',
      favicon: 'src/asset/image/favicon.ico' 
    }),
  ],
  devServer: {
    static: './dist'
  }
};