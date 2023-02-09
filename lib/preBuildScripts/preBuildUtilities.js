// const fs = require('fs');
const dotenv = require('dotenv');
const fs = require('fs');
const axios = require('axios').default;
module.exports.preBuildDevelopment = async() => {
  // console.log(dotenv, 'dot')

  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }

  console.log({ envVars });
  // console.log(process.env.NEXT_PUBLIC_TENANT_API, 'test')
  // console.log(process.env, 'test')
  const API = `https://boilerplate.staging.saas.halcyondigitalhost.com/api/pages`;
  const response = await axios.get(API);
  const data = response.data;
  // fs.writeFileSync("./lib/preBuildScripts/static/globalData.json", JSON.stringify(data))
  console.log("New Global Data Generated!");
}