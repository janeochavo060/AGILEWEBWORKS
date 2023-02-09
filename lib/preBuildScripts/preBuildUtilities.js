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
  // console.log({envVars});
  // console.log(envVars?.NEXT_PUBLIC_TENANT_API, 'test');
  const response = await axios.get(envVars.NEXT_PUBLIC_TENANT_API);
  // const data = response.data;
  // fs.writeFileSync("./lib/preBuildScripts/static/globalData.json", JSON.stringify(data))
  console.log("New Global Data Generated!");
}