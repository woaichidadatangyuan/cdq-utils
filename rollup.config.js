// export default {
//   input: "src/index.js",
//   output: {
//     file: "dist/cdq.js",
//     format: "esm",
//     name: "cdq",
//   },
// };
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import json from "@rollup/plugin-json";

const paths = {
  input: {
    root: "src/index.js",
  },
  output: {
    root: "dist/",
  },
};

const fileName = `cdq.js`;

export default {
  input: `${paths.input.root}`,
  output: {
    file: `${paths.output.root}${fileName}`,
    format: "esm",
    name: "cdq",
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    uglify(),
  ],
};
