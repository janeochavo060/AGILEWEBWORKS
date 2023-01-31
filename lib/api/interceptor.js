import { parseCookies } from "nookies";
export default function setup(axios) {
  axios.interceptors.request.use((config) => {
    const token = parseCookies("token");
    config.headers["Authorization"] = `Bearer ` + token?.token;
    config.headers["Content-Type"] = "application/json";
    config.headers["Strict-Transport-Security"] = "max-age=31536000";
    // config.headers["Cache-control"] = "no-store, no-cache";
    // config.headers["Expires"] = "0";
    // config.headers["Pragma"] = "no-cache";
    return config;
  });
  axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      // const { data, status, statusText } = error.response;
      // Error callback here
      // global popup notification
      return Promise.reject(error.response);
    }
  );
}
