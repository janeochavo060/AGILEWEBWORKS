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
  FormContact: dynamic(() =>
    import("@/components/blocks/FormContact").then((module) => module.default)
  ),
  DrupalBlock: dynamic(() =>
    import("@/components/blocks/DrupalBlock").then((module) => module.default)
  ),
  SecondPageDrupal: dynamic(() =>
    import("@/components/blocks/SecondPageDrupal").then((module) => module.default)
  ),
  CaseStudies: dynamic(() =>
    import("@/components/blocks/CaseStudies").then((module) => module.default)
  ),
  PortfolioWeb: dynamic(() =>
    import("@/components/blocks/PortfolioWeb").then((module) => module.default)
  ),






};
