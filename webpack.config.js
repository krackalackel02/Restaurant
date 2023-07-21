const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
	  main: "./src/index.js",
	  styles: "./src/styles.scss",
	},
	output: {
	  path: path.resolve(__dirname, "dist"),
	  filename: "[name].js",
	  clean:true
	   // Use [name] placeholder for dynamic filenames
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			filename: "index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(css|scss)$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			  },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
