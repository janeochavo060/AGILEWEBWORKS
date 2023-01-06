import BaseApi from "./_base.api";
import UseSWR from "swr";

const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;

const BASEAPI = {
  get: async (URL) => {
    const res = await BaseApi.get(APIDOMAIN + URL);
    return res.data;
  },
  post: async (URL, data) => {
    const res = await BaseApi.post(APIDOMAIN + URL, data);
    return res.data;
  },
  put: async (URL, data) => {
    const res = await BaseApi.put(APIDOMAIN + URL, data);
    return res.data;
  },
  patch: async (URL, data) => {
    const res = await BaseApi.patch(APIDOMAIN + URL, data);
    return res.data;
  },
  swr: (URL, condition = true, options = {}) => {
    const fetcher = (link) => BaseApi.get(link);
    const { data, mutate, isValidating, error } = UseSWR(
      condition ? APIDOMAIN + URL : null,
      fetcher,
      options
    );
    return {
      data: data ? data.data : data,
      mutate,
      isValidating,
      error
    };
  },
};

export { BASEAPI };
