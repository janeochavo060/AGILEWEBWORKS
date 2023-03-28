import Select from "@/components/forms/Select";
import useArticleFilterStore from "@/lib/store/articleFilter";
import { shallow } from "zustand/shallow";
export default function SectionFilter({ regions = [] }) {
  const [
    year,
    years,
    months,
    order,
    sortChanged,
    regionChanged,
    yearChanged,
    monthChanged,
  ] = useArticleFilterStore(
    (state) => [
      state.year,
      state.years,
      state.months,
      state.order,
      state.sortChanged,
      state.regionChanged,
      state.yearChanged,
      state.monthChanged,
    ],
    shallow
  );

  return (
    <div className="w-full xl:flex xl:justify-center">
      <div className="xl:w-[1345px] pt-4">
        <div className="bg-[#b1b1b1] h-[1px] w-full z-10 relative" />
        <div className="px-4 py-4 flex flex-nowrap justify-center lg:items-center">
          <div className="w-auto py-4 lg:py-0 text-sm">Filter:</div>
          <div className="w-auto flex flex-wrap">
            <div className="py-2 px-2 xl:px-4 w-1/2 lg:w-auto">
              <Select
                className="react-select min-w-[120px] cursor-pointer border-[1px] border-[#b3b3b3] rounded-md text-sm"
                placeholder="Year"
                isClearable={true}
                options={years()}
                onChange={yearChanged}
              />
            </div>
            <div className="py-2 px-2 xl:px-4 w-1/2 lg:w-auto">
              <Select
                className="react-select min-w-[120px] cursor-pointer border-[1px] border-[#b3b3b3] rounded-md text-sm"
                placeholder="Month"
                isClearable={true}
                options={months}
                isDisabled={!year}
                onChange={monthChanged}
              />
            </div>
            <div className="py-2 px-2 xl:px-4 w-1/2 lg:w-auto">
              <Select
                className="react-select min-w-[120px] cursor-pointer border-[1px] border-[#b3b3b3] rounded-md text-sm"
                placeholder="Region"
                isClearable={true}
                options={regions}
                onChange={regionChanged}
              />
            </div>
            <div className="py-2 px-2 xl:px-4 w-1/2 lg:w-auto">
              <Select
                className="react-select min-w-[120px] cursor-pointer border-[1px] border-[#b3b3b3] rounded-md text-sm"
                placeholder="Sort By"
                isClearable={true}
                onChange={sortChanged}
                options={order}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#b1b1b1] h-[1px] w-full" />
      </div>
    </div>
  );
}
