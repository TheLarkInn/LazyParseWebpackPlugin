var NullDependency = require("webpack/lib/dependencies/NullDependency");
var ConcatSource = require("webpack-sources").ConcatSource;
var Template = require("webpack/lib/Template");

function FunctionExpressionDependency(range) {
    NullDependency.call(this);
    this.range = range;
}

module.exports = FunctionExpressionDependency;

FunctionExpressionDependency.prototype = Object.create(NullDependency.prototype);
FunctionExpressionDependency.prototype.constructor = FunctionExpressionDependency;
FunctionExpressionDependency.prototype.type = "function expression tobewrapped";

FunctionExpressionDependency.prototype.updateHash = function(hash) {
  hash.update(this.range + "");
  hash.update(this.expression + "");
};


FunctionExpressionDependency.Template = function FunctionExpressionDependencyTemplate() {};

FunctionExpressionDependency.Template.prototype.apply = function(dep, source, outputOptions) {
  debugger;
  var content = "";
};