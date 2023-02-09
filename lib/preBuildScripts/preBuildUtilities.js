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
  const response = await axios.get(envVars.NEXT_PUBLIC_TENANT_API + '/api/pages');
  const data = response.data;
  fs.writeFileSync("./lib/preBuildScripts/static/globalData.json", JSON.stringify(data))
  console.log("New Global Data Generated!");
}