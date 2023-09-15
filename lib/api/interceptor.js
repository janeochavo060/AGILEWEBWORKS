// import { parseCookies } from "nookies";
export default function setup(axios) {
  axios.interceptors.request.use((config) => {
    // const token = parseCookies("token");
    // config.headers["Authorization"] = `Bearer ` + token?.token;
    config.headers["Strict-Transport-Security"] = "max-age=31536000";
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
