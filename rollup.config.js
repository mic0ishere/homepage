import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const all_plugins = [
  terser(),
  nodeResolve({
    jsnext: true,
    main: true
  }),
  commonjs({
    include: 'node_modules/**',
    sourceMap: false
  })
]

export default [
  {
    input: 'src/plugin.js',
    output: {file: 'assets/js/plugin.js', format: 'iife'},
    plugins: all_plugins
  },
  {
    input: 'src/options.js',
    output: {file: 'assets/options.js', format: 'iife'},
    plugins: all_plugins
  },
  {
    input: 'src/demo.js',
    output: {file: 'assets/js/demo.js', format: 'iife'},
    plugins: all_plugins
  }
]
