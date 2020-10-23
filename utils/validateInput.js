const core = require("@actions/core");

exports.validateInput = function () {
  requestMethodInput = core.getInput("request-method");
  if (!validateHttpMethod(requestMethodInput)) {
    const errorMessage = `Invalid request-method, recived: ${requestMethodInput}`;
    throw new Error(errorMessage);
  }
  if (!validateValidators()) {
    const errorMessage = `0 or more than 1 validator inputs are used, only 1 validator can be used per step`;
    throw new Error(errorMessage);
  }
};

function validateHttpMethod(requestMethodInput) {
  const validHttpMethods = ["GET", "POST", "PUT", "DELETE"];
  return validHttpMethods.some((validHttpMethod) => validHttpMethod.toLowerCase() === requestMethodInput.toLowerCase());
}

function validateValidators() {
  const validators = [core.getInput("validate-json"), core.getInput("validate-expression")];
  return (
    validators.filter((validator) => {
      if (validator) {
        return true;
      } else {
        return false;
      }
    }).length === 1
  );
}
