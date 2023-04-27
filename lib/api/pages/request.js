import BaseApi from "@/lib/api/_base.api";

const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;

export default class PAGEAPI {
  static async getPages(params = "") {
    const res = await BaseApi.get(APIDOMAIN + "/api/pages" + params);
    return res.data;
  }

  static async findPage(id, params = "") {
    const res = await BaseApi.get(APIDOMAIN + "/api/pages/" + id + params);
    return res.data;
  }

  static async findPageByRoute(id, params = "") {
    const res = await BaseApi.get(APIDOMAIN + "/api/route/" + id + params);
    return res.data;
  }

  static getPagesSwr(params = "", options = {}) {
    return BaseApi.swr(APIDOMAIN + "/api/pages" + params, options);
  }

  static getFindPagesSwr(id, params = "", options = {}) {
    return BaseApi.swr(APIDOMAIN + "/api/pages/" + id + params, options);
  }
}
