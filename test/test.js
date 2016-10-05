import test from 'ava';
import webpack from 'webpack';
import config from './webpack.config.js';

async function webpackRun(webpackCompiler, configObject) {
  const compiler = webpackCompiler(config);
  let lastHash;
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {

      if (err) {
        lastHash = null;
        console.error(err.details || err);
        reject(err.details || err);
      }

      if (stats.hash !== lastHash) {
        lastHash = stats.hash;
        process.stdout.write(stats.toString(webpackOutputOptions) + '\n');
      }
      resolve(true);
    });
  });
}



test('webpack runs successfully', t => {
  const run = webpackRun(webpack, config);

  run.then((results) => {
    t.true(results);
  })  
});