module.exports = {
  // plugins: [
  //   ['@babel/plugin-transform-runtime',
  //     {
  //       "regenerator": true
  //     }
  //   ]
  // ],
  env: {
    test: {
      presets: [
        [
            '@babel/preset-env',
            {
                modules: 'commonjs',
                debug: false
            }
        ],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-es2015-modules-commonjs'
      ]
    },
    production: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-es2015-modules-commonjs',
      ]
    },
    development: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-es2015-modules-commonjs',
      ]
    }
  }
};