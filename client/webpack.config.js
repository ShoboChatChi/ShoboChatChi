
const StatsPlugin = require("stats-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                        loader: "ts-loader",
                    }
                ]
            },
        ]
    },
    output: {
        path: __dirname + "/public/dist/",
        filename: "bundle.js",
    },
    plugins: [
        new StatsPlugin("stats.json", {
            chunkModules: true,
        }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "@material-ui/core": "MaterialUI"
    }
};
