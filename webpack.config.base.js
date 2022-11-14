const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname,"./src/index.ts")
	},
	output: {
		library: {
			name: "[name]",
			type: 'var',
			// export: []
		},
		path: path.resolve(__dirname,"./Build"),
		scriptType: 'text/javascript',
	},
	resolve: {
		extensions: ['.ts','.js','.cjs','.json'] //配置文件引入时省略后缀名
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-typescript"]
						}
					},
					"ts-loader"
				],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ["css-loader"],
			}
		]
	},
	plugins: [
		new NodePolyfillPlugin()
	]
}
