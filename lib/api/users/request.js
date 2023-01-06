import BaseApi from "@/lib/api/_base.api";

const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;

export default class USERAPI {
  static async getUsers (params = '', options) {
    const res = await BaseApi.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }
  static async findUser (id, params = '', options) {
    const res = await BaseApi.get('https://jsonplaceholder.typicode.com/users/' + id);
    return res.data;
  }

  static getUsersSwr (params = '', options = {}) {
    return BaseApi.swr('https://jsonplaceholder.typicode.com/users', options)
  }
};