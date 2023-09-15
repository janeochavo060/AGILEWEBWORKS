import axios from "axios";
import interceptorSetup from "./interceptor";
import UseSWR from "swr";
interceptorSetup(axios);
const basicAxios = axios.create();
export default class BaseApi {
  static async get(URL) {
    return await axios.get(URL);
  }
  static async post(URL, data) {
    return await axios.post(URL, data).then(
      (response) => {
        return response;
      },
      (error) => {
        throw error;
      }
    );
  }
  static async put(URL, data) {
    return await axios.put(URL, data).then(
      (response) => {
        return response;
      },
      (error) => {
        throw error;
      }
    );
  }
  static async patch(URL, data) {
    return await axios.patch(URL, data).then(
      (response) => {
        return response;
      },
      (error) => {
        throw error;
      }
    );
  }

  static async delete(URL) {
    return await axios.delete(URL).then(
      (response) => {
        return response;
      },
      (error) => {
        throw error;
      }
    );
  }

  // Documentation: https://swr.vercel.app/docs/api
  static swr(URL, options = {}) {
    const fetcher = (link) => this.get(link);
    const render = options.hasOwnProperty("render") ? options.render : true;
    const { data, mutate, isValidating, error } = UseSWR(
      render ? URL : null,
      fetcher,
      options
    );
    return {
      data: data ? data.data : data,
      mutate,
      isValidating,
      error,
    };
  }

  // No Interceptor
  static async customGet(URL, headers) {
    return basicAxios.get(URL, headers);
  }

  static async customPut(URL, data, headers) {
    return basicAxios.put(URL, data, headers);
  }
}
