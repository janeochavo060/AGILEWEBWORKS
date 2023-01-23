import BaseApi from "@/lib/api/_base.api";

const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;

export default class FORMAPI {
  static async getPages (params = '') {
    const res = await BaseApi.get(APIDOMAIN + '/api/pages' + params);
    return res.data;
  }

  static async findForm (id, params = '') {
    const res = await BaseApi.get(APIDOMAIN + '/api/forms/' + id + params);
    return res.data;
  }

  static findFormsSwr (params = '', options = {}) {
    return BaseApi.swr(APIDOMAIN + '/api/forms' + params, options)
  }

  static getFormsSwr (params = '', options = {}) {
    return BaseApi.swr(APIDOMAIN + '/api/pages' + params, options)
  }
};