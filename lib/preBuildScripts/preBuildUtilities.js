const dotenv = require("dotenv");
const fs = require("fs");
const https = require("https");
const axios = require("axios").default;
const { Jsona } = require("jsona");
const dataFormatter = new Jsona();

const generateStaticJson = (filename, newData) => {
  const staticPath = "./lib/preBuildScripts/static/";
  const filePath = staticPath + filename;

  // Attempt to read the existing data
  let existingData;
  try {
    existingData = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    existingData = null;
  }

  // If no existing data or data is different, write the new data
  if (existingData !== JSON.stringify(newData)) {
    console.log(`Generated new json file for \x1b[32m${filename}\x1b[0m`);
    fs.writeFileSync(filePath, JSON.stringify(newData));
  } else {
    console.log(`Skipping file write in \x1b[33m${filename}\x1b[0m.`);
  }
};

module.exports.preBuildDevelopment = async () => {
  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }

  // Form Setting
  const formSettingHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/settings/form"
  );
  const formSetting = dataFormatter.deserialize(formSettingHandler.data);

  // Locales
  const localesHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/locales"
  );
  const locales = localesHandler.data;

  // Form
  // const formHandler = await axios.get(
  //   envVars.NEXT_PUBLIC_TENANT_API + "/api/forms/get-in-touch?include=blueprint"
  // );
  // const form = dataFormatter.deserialize(formHandler.data);

  // Global Data
  const tenantDetailsHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/tenant-details"
  );
  const tenantDetails = dataFormatter.deserialize(tenantDetailsHandler.data);

  const logo = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/logo"
  );
  const logoDetails = dataFormatter.deserialize(logo.data);


  // /api/globals/logo

  // Menu Data
  // const menusHandler = await axios.get(
  //   envVars.NEXT_PUBLIC_TENANT_API +
  //   "/api/menus?include=nodes.children,parentNodes"
  // );
  // const menus = dataFormatter.deserialize(menusHandler.data);

  const menusDetails = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
    "/api/menus/navbar?include=nodes.children,parentNodes"
  );
  const menus = dataFormatter.deserialize(menusDetails.data);


  // /api/menus/navbar

  // Generate default Image
  const generateImage = (imageUrl, path) => {
    const file = fs.createWriteStream(path);
    https.get(imageUrl, function (response) {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Default Image Downloaded");
      });
    });
  };
  [].forEach((e, i) => {
    generateImage(e, `./public/image${i}.webp`);
  });

  // generateStaticJson("filename.json", yourData);
  generateStaticJson("globalData.json", {
    tenantDetails,
    menus,
    locales,
    formSetting,
  });
  generateStaticJson("menuNavbar.json", menus);
  generateStaticJson("logo.json", logoDetails);

  console.log("New Global Data Generated!");
};
