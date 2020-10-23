const core = require("@actions/core");

exports.validateResult = function (response) {
  if (core.getInput("validate-json")) {
    if (!validateJson(response)) {
      const errorMessage = `Requestresult does not match expected JSON, recived: ${JSON.stringify(response)}, expected: ${core.getInput("validate-json")}`;
      throw new Error(errorMessage);
    }
  }
  if (core.getInput("validate-expression")) {
    var validResult = false;
    try {
      validResult = validateExpression(response);
    } catch (error) {
      const errorMessage = `Invalid expression: ${core.getInput("validate-expression")}, errorMessage: ${error.message}`;
      throw new Error(errorMessage);
    }
    if (!validResult) {
      const errorMessage = `Expression ${core.getInput("validate-expression")} returned false`;
      throw new Error(errorMessage);
    }
  }
};

function validateJson(response) {
  return JSON.stringify(response) === JSON.stringify(JSON.parse(core.getInput("validate-json")));
}

function validateExpression(response) {
  return eval(core.getInput("validate-expression"));
}
