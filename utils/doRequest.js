const core = require("@actions/core");
const axios = require("axios");

exports.doRequest = async function () {
  const headers = core.getInput("request-headers") ? { headers: JSON.parse(core.getInput("request-headers")) } : {};
  const data = core.getInput("request-body") ? { data: JSON.parse(core.getInput("request-body")) } : {};

  return axios({
    method: core.getInput("request-method"),
    url: core.getInput("request-url"),
    ...headers,
    ...data,
  });
};
