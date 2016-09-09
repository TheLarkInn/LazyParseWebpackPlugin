# V8LazyParseWebpackPlugin

This is a webpack plugin designed to exploit the V8 engines treatment of functions with parens wrapped around them. This lazy loads the parsing decreasing initial load time. 

# EXPERIMENTAL WIP: this is highly experimental so please report issues for whatever you come across. 

## Install

To install run the following npm install command: 

```shell
npm install v8-lazy-parse-webpack-plugin --save-dev 
```

## Usage

**webpack.config.js**

```javascript
const V8LazyParseWebpackPlugin = require(v8-lazy-parse-webpack-plugin);

module.exports = config;

let config = {
	/*...*/	
	plugins: [
		new V8LazyParseWebpackPlugin();
	]
};
```

## Disclaimer

This plugin is desgined specifically for the V8 engine, so don't expect to have the same effect on all browsers or JS engines. 


## Further Reading

- [Initial discussion in Rollup Repository](https://github.com/rollup/rollup/pull/774)
