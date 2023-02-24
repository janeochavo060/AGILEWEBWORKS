import BaseApi from "@/lib/api/_base.api";

const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;

export default class COLLECTIONAPI {
  static async getCollections (id, params = '') {
    const res = await BaseApi.get(APIDOMAIN + `/api/collections/${id}/entries` + params);
    return res.data;
  }

  static async findEntry (collectionId, entryId, params = '') {
    const res = await BaseApi.get(APIDOMAIN + `/api/collections/${collectionId}/entries/${entryId}` + params);
    return res.data;
  }

  static async findCollection (id, params = '') {
    const res = await BaseApi.get(APIDOMAIN + `/api/collections/${id}` + params);
    return res.data;
  }

  static getCollectionsSwr (params = '', options = {}) {
    return BaseApi.swr(APIDOMAIN + `/api/collections` + params, options)
  }
};