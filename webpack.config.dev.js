const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base")
const devConfig = {
	mode: 'development',
	output: {
		filename: '[name].js',
		library: {
			name: "[name]",
			type: 'umd',
		}
	}
}

module.exports = merge(baseConfig,devConfig);
