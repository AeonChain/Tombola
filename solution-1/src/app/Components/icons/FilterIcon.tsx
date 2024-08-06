import React from "react";

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...html } = props;
  let heightToUse, widthToUse;
  if (!height && !width) {
    heightToUse = 40;
    widthToUse = 40;
  } else {
    heightToUse = height;
    widthToUse = width;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthToUse}
      height={heightToUse}
      viewBox="0 0 32 32"
      {...html}
    >
      <path d="M30 6.749H2a1.25 1.25 0 000 2.5h28a1.25 1.25 0 000-2.5zm-6 8.001H8a1.25 1.25 0 000 2.5h16a1.25 1.25 0 000-2.5zm-5 8h-6.053a1.25 1.25 0 000 2.5H19a1.25 1.25 0 000-2.5z"></path>
    </svg>
  );
}

export default FilterIcon;
