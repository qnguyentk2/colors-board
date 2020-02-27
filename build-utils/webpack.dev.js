const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
		main: [
			'@babel/polyfill',
			'./src/index.js',
		]
	},
  mode: 'development',
  plugins: [
    new Dotenv({
      path: './env/.env.development',
    }),
  ],
};
