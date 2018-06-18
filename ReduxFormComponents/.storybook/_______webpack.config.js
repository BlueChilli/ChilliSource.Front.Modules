const path = require("path");
const fs = require('fs');

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env, defaultConfig) => {


  defaultConfig.module.rules = defaultConfig.module.rules.map(rule => {
    if (rule.test.toString().includes(".jsx")) {
      rule.include = fs.realpathSync(process.cwd() + "/../lib/");
      //delete(rule.include);
    }
    return rule;
  });


  console.log("woooaot", defaultConfig.module.rules);

  return defaultConfig;
};