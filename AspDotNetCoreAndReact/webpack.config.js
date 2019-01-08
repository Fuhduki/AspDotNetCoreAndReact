/// <binding AfterBuild='Run - Development' Clean='Run - Development' />
"use strict";
console.log(' ');
console.log('-------------------');
console.log(' ');

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
];