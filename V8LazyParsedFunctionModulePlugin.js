/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Authors: Sean Larkin @thelarkinn, Tobias Koppers @sokra
*/
var V8LazyParsedFunctionModuleTemplatePlugin = require("./V8LazyParsedFunctionModuleTemplatePlugin");
var FunctionExpressionDependency = require("./FunctionExpressionDependency");
var FunctionExpressionParserPlugin =require("./FunctionExpressionParserPlugin.js");



var RequestShortener = require("webpack/lib/RequestShortener");
var NullFactory = require("webpack/lib/NullFactory");

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

    compiler.plugin("compilation", function(compilation, params) {
        let normalModuleFactory = params.normalModuleFactory;

        compilation.dependencyFactories.set(FunctionExpressionDependency, new NullFactory());
        compilation.dependencyTemplates.set(FunctionExpressionDependency, new FunctionExpressionDependency.Template());

        normalModuleFactory.plugin("parser", function(parser, options) { 
          parser.apply(new FunctionExpressionParserPlugin());
        });


    });



};