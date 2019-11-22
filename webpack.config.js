const path = require("path")

module.exports = {
    entry: {
        index: ["babel-polyfill", "./src/index.js"],
        edit: ["babel-polyfill", "./src/edit.js"]
    },
    output: {
        path: path.resolve(__dirname, "public/scripts"),
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/scripts/"
    },
    devtool: "source-map"
}

// the weird characters in test: the backslash makes it so the . is treated as a dot and the dollar sign marks the end of the string
// or regular expression as Andrew calls it

// Path needs to be absolute but everytime we would change this location or someone else has this project, we would have to change it
// /Users/Richard/Desktop/Coding/Web Development Notes/js_bootcamp/boilerplate/public/scripts
// Node.js has __dirname which leads you all the way up to the boilerplate file regardless of where to start
// We added the path library which is an object with a bunch of methods and with the resolve method we can now fix this

// We couldnt do __dirname + "public/scripts" because of different operating systems who work differently with paths,
// resolve however does work on everything

// devServer actually doesn't make a file when it's running (no bundle.js) it's all virtual
// this means that its very fast, its for development only, not production when you actually need the assets to put on the web

// devtool: source-map makes it so the browser dev tools show the pre-converted babel(source) code
// for example when debugging an error on line 10, this would've meant line 10 in the babel code not the original code which might be line 7