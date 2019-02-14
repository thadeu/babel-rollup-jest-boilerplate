import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-cpy'
import flow from 'rollup-plugin-flow'

const plugins = targets => [
  flow(),
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['env', { modules: false, targets }]],
    plugins: ['babel-plugin-transform-object-rest-spread'],
    comments: false
  }),
  copy({
    files: ['src/*.flow'],
    dest: 'lib'
  })
]

const external = []

export default [
  {
    input: 'src/index.js',
    useStrict: false,
    output: {
      name: 'babel-rollup-jest-boilerplate',
      file: 'lib/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    external,
    plugins: plugins({ node: '8' })
  },
  {
    input: 'src/index.js',
    output: {
      name: 'babel-rollup-jest-boilerplate',
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true
    },
    external,
    plugins: plugins({ node: '6' })
  }
]
