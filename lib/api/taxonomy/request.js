import BaseApi from "@/lib/api/_base.api";

const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;

export default class TAXONOMYAPI {
  static async getTaxonomies(params = "") {
    const res = await BaseApi.get(APIDOMAIN + "/api/taxonomies" + params);
    return res.data;
  }

  static async findTaxonomy(id, params = "") {
    const res = await BaseApi.get(
      APIDOMAIN +
        "/api/taxonomies/" +
        id +
        `?include=parentTerms.children,parentTerms.taxonomy,taxonomyTerms.children,taxonomyTerms.taxonomy${params}`
    );
    return res.data;
  }

  static findTaxonomySwr(id, params = "", options = {}) {
    return BaseApi.swr(
      APIDOMAIN +
        "/api/taxonomies/" +
        id +
        `?include=parentTerms.children,parentTerms.taxonomy,taxonomyTerms.children,taxonomyTerms.taxonomy${params}`,
      options
    );
  }
}
