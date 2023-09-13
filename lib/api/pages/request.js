import BaseApi from "@/lib/api/_base.api";
const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;
const MICROSITE = process.env.NEXT_PUBLIC_MICROSITE_ID || "";
const RATE_LIMIT_KEY =
  process.env.RATE_LIMIT_KEY || "9itzbGPOyjBiP0zcbX7v1BfQJ9gg2B";
export default class PAGEAPI {
  static async getPages(params = "") {
    const queryParams = params
      ? params + `&filter[sites.id]=${MICROSITE}`
      : `?filter[sites.id]=${MICROSITE}`;
    const res = await BaseApi.get(APIDOMAIN + "/api/pages" + queryParams);
    return res.data;
  }

  static async findPage(id, params = "") {
    const res = await BaseApi.get(APIDOMAIN + "/api/pages/" + id + params);
    return res.data;
  }

  static async findPageByRoute(id, params = "") {
    const queryParams = params
      ? params + `&site=${MICROSITE}`
      : `?site=${MICROSITE}`;
    const res = await BaseApi.get(APIDOMAIN + "/api/route/" + id + queryParams);
    return res.data;
  }

  static getPagesSwr(params = "", options = {}) {
    const queryParams = params
      ? params + `&filter[sites.id]=${MICROSITE}`
      : `?filter[sites.id]=${MICROSITE}`;
    return BaseApi.swr(APIDOMAIN + "/api/pages" + queryParams, options);
  }

  static getFindPagesSwr(id, params = "", options = {}) {
    return BaseApi.swr(APIDOMAIN + "/api/pages/" + id + params, options);
  }

  static async findByRoute(id, params = "") {
    const queryParams = params
      ? params + `&site=${MICROSITE}`
      : `?site=${MICROSITE}`;
    const res = await BaseApi.customGet(
      APIDOMAIN + "/api/route/" + id + queryParams,
      {
        headers: {
          "x-rate-key": RATE_LIMIT_KEY,
        },
      }
    );
    return res.data;
  }
}
