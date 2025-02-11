import dynamic from "next/dynamic";

export const components = {
  TestComponent1: dynamic(() =>
    import("@/components/blocks/TestComponent1").then(
      (module) => module.default
    )
  ),
  TestComponent2: dynamic(() =>
    import("@/components/blocks/TestComponent2").then(
      (module) => module.default
    )
  ),
  Contact: dynamic(() =>
    import("@/components/blocks/Contact").then((module) => module.default)
  ),
  TaxonomyCollection: dynamic(() =>
    import("@/components/blocks/TaxonomyCollection").then(
      (module) => module.default
    )
  ),
  Slider: dynamic(() =>
    import("@/components/blocks/Slider").then((module) => module.default)
  ),
  Gallery: dynamic(() =>
    import("@/components/blocks/Gallery").then((module) => module.default)
  ),
  SampleGridBlock: dynamic(() =>
    import("@/components/blocks/SampleGridBlock").then(
      (module) => module.default
    )
  ),
  Bannerblock: dynamic(() =>
    import("@/components/blocks/Bannerblock").then((module) => module.default)
  ),
  Secondbanner: dynamic(() =>
    import("@/components/blocks/Secondbanner").then((module) => module.default)
  ),
  ClientBlock: dynamic(() =>
    import("@/components/blocks/ClientBlock").then((module) => module.default)
  ),
  Website: dynamic(() =>
    import("@/components/blocks/Website").then((module) => module.default)
  ),
  WebsiteFeatures: dynamic(() =>
    import("@/components/blocks/WebsiteFeatures").then((module) => module.default)
  ),
  Saas: dynamic(() =>
    import("@/components/blocks/Saas").then((module) => module.default)
  ),
  Projects: dynamic(() =>
    import("@/components/blocks/Projects").then((module) => module.default)
  ),


};
