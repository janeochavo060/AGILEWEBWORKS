import BaseApi from "@/lib/api/_base.api";
const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;
export default class LOCALEAPI {
  static async getLocales(params = "") {
    const res = await BaseApi.get(APIDOMAIN + `/api/locales` + params);
    return res.data;
  }

  static getLocalesSwr(params = "", options = {}) {
    return BaseApi.swr(APIDOMAIN + `/api/locales` + params, options);
  }
}
