const core = require("@actions/core");
const github = require("@actions/github");
const validateInput = require("./utils/validateInput.js");
const doRequest = require("./utils/doRequest.js");
const validateResult = require("./utils/validateResult.js");

async function index() {
  try {
    validateInput.validateInput();
    const response = await doRequest.doRequest();
    try {
      validateResult.validateResult(response.data);
    } catch (error) {
      if (!core.getInput("should-fail")) {
        throw error;
      }
    }
    core.setOutput("valid", true);
  } catch (error) {
    core.setOutput("valid", false);
    core.setFailed(error.message);
  }
}

index();
