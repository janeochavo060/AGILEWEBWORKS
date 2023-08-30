import BaseApi from "@/lib/api/_base.api";
const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;
const MICROSITE = process.env.NEXT_PUBLIC_MICROSITE_ID || "";
export default class CONTENTAPI {
  static async getContents(id, params = "") {
    const queryParams = params
      ? params + `&filter[sites.id]=${MICROSITE}`
      : `?filter[sites.id]=${MICROSITE}`;
    const res = await BaseApi.get(
      APIDOMAIN + `/api/contents/${id}/entries` + queryParams
    );
    return res.data;
  }

  static async findEntry(contentId, entryId, params = "") {
    const res = await BaseApi.get(
      APIDOMAIN + `/api/contents/${contentId}/entries/${entryId}` + params
    );
    return res.data;
  }

  static async findContent(id, params = "") {
    const res = await BaseApi.get(APIDOMAIN + `/api/contents/${id}` + params);
    return res.data;
  }

  static getContentsSwr(params = "", options = {}) {
    const queryParams = params
      ? params + `&filter[sites.id]=${MICROSITE}`
      : `?filter[sites.id]=${MICROSITE}`;
    return BaseApi.swr(APIDOMAIN + `/api/contents` + queryParams, options);
  }
}
