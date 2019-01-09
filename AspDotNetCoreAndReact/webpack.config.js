/// <binding AfterBuild='Run - Development' Clean='Run - Development' />
"use strict";
console.log(' ');
console.log('-------------------');
console.log(' ');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Glob = require('glob');

module.exports = [
    {
        mode: 'development',
        entry: {
            "Home": "./Scripts/Home/index.js",
        },
        output: {
            path: __dirname + "/wwwroot/assets/js",
            filename: "[name].bundle.js"
        },
        devtool: "source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            ]
        },
    },
    {
        mode: 'development',
        entry: {
            "Style": Glob.sync("./Styles/*.scss")
        },
        output: {
            path: __dirname + "/wwwroot/assets/css",
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            })
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader', options: {
                                url: false,
                                sourceMap: true
                            }
                        },
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ],
                },
            ]
        },
    },
    {
        mode: 'production',
        entry: {
            "Home": "./Scripts/Home/index.js",
        },
        output: {
            path: __dirname + "/wwwroot/assets/js",
            filename: "[name].bundle.js"
        },
        devtool: "source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            ]
        },
    },
    {
        mode: 'production',
        entry: {
            "Style": Glob.sync("./Styles/*.scss")
        },
        output: {
            path: __dirname + "/wwwroot/assets/css",
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            })
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader', options: {
                                url: false,
                                sourceMap: true
                            }
                        },
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ],
                },
            ]
        },
    },
];