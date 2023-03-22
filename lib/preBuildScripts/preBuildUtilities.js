const dotenv = require("dotenv");
const fs = require("fs");
const axios = require("axios").default;
module.exports.preBuildDevelopment = async () => {
  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }

  // Form
  const formHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/forms/contact?include=blueprint"
  );
  const form = formHandler.data;

  // Global Data
  const tenantDetailsHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/tenant-details"
  );
  const tenantDetails = tenantDetailsHandler.data;

  // Menu Data
  const menusHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/header?include=nodes.children,parentNodes"
  );
  const menus = menusHandler.data;

  fs.writeFileSync(
    "./lib/preBuildScripts/static/globalData.json",
    JSON.stringify({
      form,
      tenantDetails,
      menus,
    })
  );

  console.log("New Global Data Generated!");
};
