// rollup.config.js
const {uglify} = require ("rollup-plugin-uglify");
const babel = require ("rollup-plugin-babel");
const shebang = require("rollup-plugin-preserve-shebang");
console.log("TCL: shebang", shebang);
const path = require("path");

const config = {
    input: "src/thinner.js",
    output: {
        name: "dist/thinner.min.js",
        format: "cjs",
    },
    plugins: [
        shebang.default(),
        babel({
            exclude: "node_modules/**",
        }),
        uglify(),
        
    ],
};
module.exports = config;