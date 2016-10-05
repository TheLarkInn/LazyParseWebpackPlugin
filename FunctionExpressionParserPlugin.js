const FunctionExpressionDependency = require("./FunctionExpressionDependency.js");
const ConstDependency = require("webpack/lib/dependencies/ConstDependency");
const BasicEvaluatedExpression = require('webpack/lib/BasicEvaluatedExpression');

function FunctionExpressionParserPlugin() {};

module.exports = FunctionExpressionParserPlugin

FunctionExpressionParserPlugin.prototype.apply = function(parser) {
  debugger;
  parser.plugin('evaluate FunctionExpression', function(expr) {
    debugger;
    let dep = new FunctionExpressionDependency(expr.range);
    dep.loc = expr.loc;

    if(!this.state.module) return;

    this.state.current.addDependency(dep);


    return true;
  });
};


