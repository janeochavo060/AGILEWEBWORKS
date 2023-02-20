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

  // Form
  const formHandler = await axios.get(envVars.NEXT_PUBLIC_TENANT_API + '/api/forms/contact?include=blueprint');
  const form = formHandler.data;

  // Global Data
  const tenantDetailsHandler = await axios.get(envVars.NEXT_PUBLIC_TENANT_API + '/api/globals/tenant-details');
  const tenantDetails = tenantDetailsHandler.data;

  // Pages
  const pagesHandler = await axios.get(envVars.NEXT_PUBLIC_TENANT_API + '/api/pages');
  const pages = pagesHandler.data;

  fs.writeFileSync("./lib/preBuildScripts/static/globalData.json", JSON.stringify({
    form,
    tenantDetails,
  }))

  fs.writeFileSync("./lib/preBuildScripts/static/pagesData.json", JSON.stringify({pages}))

  console.log("New Global Data Generated!");
}