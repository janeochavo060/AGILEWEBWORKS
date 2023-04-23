import * as React from "react";

const FilterIcon = ({ width = 20, height = 14 }) => (
    <svg width={width} height={height} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.889 1H16.11c.236 0 .462.095.629.264a.91.91 0 0 1 .26.639v1.432a.91.91 0 0 1-.26.639l-5.703 5.791a.91.91 0 0 0-.26.639v5.693a.915.915 0 0 1-.341.712.882.882 0 0 1-.763.164l-1.778-.452a.888.888 0 0 1-.485-.32.912.912 0 0 1-.188-.556v-5.241a.91.91 0 0 0-.26-.639L1.26 3.974A.91.91 0 0 1 1 3.335V1.903c0-.24.094-.47.26-.639A.882.882 0 0 1 1.89 1Z"
            stroke="#034F8B"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default FilterIcon;
