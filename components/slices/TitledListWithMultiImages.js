import React, { useState } from "react";

export default function TitledListWithMultiImages({ slice }) {
  const [active, setActive] = useState("");
  const stages = slice?.main?.stages || [];
  const stage = stages.find((stage) => stage?.name === active) || stages[0];
  return <></>;

  return (
    <div
      id={slice?.id}
      className="w-full max-w-screen-xl mx-auto py-8 space-y-4 px-8 xl:px-0"
    >
      <div>
        <div
          className="grid grid-flow-col md:flex flex-col gap-8 h-full w-full md:w-1/3"
          style={{
            gridTemplateRows: `repeat(${Math.ceil(stages.length / 2)}, 1fr)`,
          }}
        >
          {stages.map((item, i) => (
            <button
              key={item?.name}
              aria-label={item?.name}
              className={`text-left transition-all flex flex-col md:flex-row md:items-center gap-x-4 text-3xl font-bold`}
              onClick={() => setActive(item?.name)}
            >
              <span className="text-sm">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`underline-animation ${
                  stage?.name === item?.name && "underline-animation-active"
                }`}
              >
                {item?.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
