# V8LazyParseWebpackPlugin

This is a webpack plugin designed to exploit the V8 engines treatment of functions with parens wrapped around them. This lazy loads the parsing decreasing initial load time. This is experimental.

## Install


To install run the following npm install command: 
```shell
npm install v8-lazy-parse-webpack-plugin --save-dev 
```

## Usage

**webpack.config.js**

```javascript
const V8LazyParseWebpackPlugin = require('v8-lazy-parse-webpack-plugin');

module.exports = config;

let config = {
	/*...*/	
	plugins: [
		new V8LazyParseWebpackPlugin(),
	]
};
```

## Disclaimer

This plugin is desgined specifically for the V8 engine, so don't expect to have the same effect on all browsers or JS engines. 

## Report your findings
I'm very curious what the performance increase is for this for larger applications. If you find success from this, please submit an issue with before and after photos of your chrome dev tool timelines, I'll include it somehwere in the readme etc.

## UglifyJSPlugin

If you are using UglifyJsPlugin, you must set compress option `negate_iife` to false if you are going to minimize your code. 

```javascript
new webpack.optimize.UglifyJsPlugin({
    output: {
        comments: false
    },
    compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
    }
})

```

## Further Reading

- [Initial discussion in Rollup Repository](https://github.com/rollup/rollup/pull/774)
