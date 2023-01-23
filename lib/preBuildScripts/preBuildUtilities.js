const fs = require('fs');
const axios = require('axios').default;
module.exports.preBuildDevelopment = async() => {
  const API = `https://boilerplate.staging.saas.halcyondigitalhost.com/api/pages`;
  const response = await axios.get(API);
  const data = response.data;
  // fs.writeFileSync("./lib/preBuildScripts/static/globalData.json", JSON.stringify(data))
  console.log("New Global Data Generated!");
}