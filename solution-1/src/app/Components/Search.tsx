import { useContext, useRef } from "react";
import FilterIcon from "./icons/FilterIcon";
import { SearchContext } from "../page";

export default function Search() {
  const ref = useRef<HTMLInputElement>(null);
  const context = useContext(SearchContext);
  return (
    <div className="w-full text-center text-lg bg-slate-600 pt-2 pb-4 rounded-b-2xl flex flex-wrap justify-around">
      <div className="w-9/12 text-lg bg-white py-1">
        <input
          ref={ref}
          placeholder="Search..."
          defaultValue={context.search}
        ></input>
      </div>
      <div
        className="w-2/12 bg-slate-50 rounded-2xl flex justify-around align-middle cursor-pointer transition-all duration-300 hover:bg-slate-500 hover:text-white"
        onClick={() => {
          context.setSearch(ref?.current?.value ?? "");
        }}
      >
        Filter <FilterIcon />
      </div>
    </div>
  );
}
