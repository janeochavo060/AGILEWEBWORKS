const dotenv = require('dotenv');
const fs = require('fs');
const axios = require('axios').default;
module.exports.preBuildDevelopment = async() => {
  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }
  const formHandler = await axios.get(envVars.NEXT_PUBLIC_TENANT_API + '/api/forms/contact?include=blueprint');
  const form = formHandler.data;

  fs.writeFileSync("./lib/preBuildScripts/static/globalData.json", JSON.stringify({
    form
  }))
  console.log("New Global Data Generated!");
}