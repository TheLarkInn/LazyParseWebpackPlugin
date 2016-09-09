/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Authors: Sean Larkin @thelarkinn, Tobias Koppers @sokra
*/
var V8LazyParsedFunctionModuleTemplatePlugin = require("./V8LazyParsedFunctionModuleTemplatePlugin");
var RequestShortener = require("webpack/lib/RequestShortener");

function V8LazyParsedFunctionModulePlugin(options, requestShortener) {
	this.options = options;
	this.requestShortener = requestShortener;
}
module.exports = V8LazyParsedFunctionModulePlugin;
V8LazyParsedFunctionModulePlugin.prototype.apply = function(compiler) {
	compiler.plugin("this-compilation", function(compilation) {
		compilation.moduleTemplate.requestShortener = this.requestShortener || new RequestShortener(compiler.context);
		compilation.moduleTemplate.apply(new V8LazyParsedFunctionModuleTemplatePlugin());
	}.bind(this));
};
