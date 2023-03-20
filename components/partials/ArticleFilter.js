import Select from "@/components/forms/Select";
export default function SectionFilter() {
  const year = () => {
    const date = new Date();
    let currentYear = date.getFullYear();
    let y = [];
    for (let index = 1; index <= 10; index++) {
      y.push({
        value: currentYear,
        label: currentYear,
      });
      currentYear = --currentYear;
    }
    return y;
  };

  const months = [
    {
      value: 1,
      label: "January",
    },
    {
      value: 2,
      label: "February",
    },
    {
      value: 3,
      label: "March",
    },
    {
      value: 4,
      label: "April",
    },
    {
      value: 5,
      label: "May",
    },
    {
      value: 6,
      label: "June",
    },
    {
      value: 7,
      label: "July",
    },
    {
      value: 8,
      label: "August",
    },
    {
      value: 9,
      label: "September",
    },
    {
      value: 10,
      label: "October",
    },
    {
      value: 11,
      label: "November",
    },
    {
      value: 12,
      label: "December",
    },
  ];

  const order = [
    {
      value: 1,
      label: "Newest First",
    },
  ]

  const regions = [
    {
      value: 1,
      label: "Region I",
    },
    {
      value: 2,
      label: "Region II",
    },
    {
      value: 3,
      label: "Region III",
    },
    {
      value: 4,
      label: "Region IV",
    },
    {
      value: 5,
      label: "Region V",
    },
    {
      value: 6,
      label: "Region VI",
    },
  ]

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
                options={year()}
              />
            </div>
            <div className="py-2 px-2 xl:px-4 w-1/2 lg:w-auto">
              <Select
                className="react-select min-w-[120px] cursor-pointer border-[1px] border-[#b3b3b3] rounded-md text-sm"
                placeholder="Month"
                isClearable={true}
                options={months}
              />
            </div>
            <div className="py-2 px-2 xl:px-4 w-1/2 lg:w-auto">
              <Select
                className="react-select min-w-[120px] cursor-pointer border-[1px] border-[#b3b3b3] rounded-md text-sm"
                placeholder="Region"
                isClearable={true}
                options={regions}
              />
            </div>
            <div className="py-2 px-2 xl:px-4 w-1/2 lg:w-auto">
              <Select
                className="react-select min-w-[120px] cursor-pointer border-[1px] border-[#b3b3b3] rounded-md text-sm"
                placeholder="Sort By"
                isClearable={true}
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
