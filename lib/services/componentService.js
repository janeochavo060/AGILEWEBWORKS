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
};
