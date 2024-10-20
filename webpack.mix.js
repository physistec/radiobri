const mix = require('laravel-mix');
// const webpack = require("webpack");
const path = require('path');
// /*
//  |--------------------------------------------------------------------------
//  | Mix Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Mix provides a clean, fluent API for defining some Webpack build steps
//  | for your Laravel application. By default, we are compiling the Sass
//  | file for the application as well as bundling up all the JS files.
//  |
//  */
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WorkboxPlugin = require('workbox-webpack-plugin');
const VL = require('vuetify-loader/lib/plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .js('resources/installer/js/app.js', 'public/installer/js')
    .sass('resources/sass/installer/app.scss', 'public/installer/css')
    .vue()
    .webpackConfig({
        cache: false,
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                "@mixins": path.resolve(__dirname, './resources/js/mixins')
            }
        },
        stats: {
            warningsFilter: /node_modules/,
            children: true,
        },
        plugins: [
            // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new VL(),
            // new BundleAnalyzerPlugin(),
            // new VueLoaderPlugin(),
            new WorkboxPlugin.GenerateSW({
                maximumFileSizeToCacheInBytes: 100000000
            })
        ],
        output: {
            chunkFilename: 'js/chunks/[chunkhash].js',
        }
    })
    // .browserSync("radiobri.local:8000");
