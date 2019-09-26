// rollup.config.js
const {uglify} = require ("rollup-plugin-uglify");
const babel = require ("rollup-plugin-babel");
const path = require("path");

const config = {
    input: "src/slender.js",
    output: {
        name: "dist/slender.min.js",
        format: "cjs",
        banner: "#! /usr/bin/env node"
    },
    plugins: [
        babel({
            exclude: "node_modules/**",
        }),
        uglify(),    
    ],
};
module.exports = config;