const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base")
const prodConfig = {
	mode: 'production',
	output: {
		filename: "[name].min.js"
	},

}

module.exports = merge(baseConfig,prodConfig);
