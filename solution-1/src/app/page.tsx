"use client";
import { useEffect, useState, createContext } from "react";
import List from "./Components/List";
import PromotionBanner from "./Components/PromotionBanner";
import Search from "./Components/Search";
import BeanOfTheDay from "./Components/BeanOfTheDay";

export const SearchContext = createContext({
  search: "",
  setSearch: (_newSearchValue: string) => {},
});

export default function Home() {
  const [data, setData] = useState([] as Bean[]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = "/api/allBeans" + (search ? `?searchTerm=${search}` : "");
    fetch(url).then((x) =>
      x.json().then((x) => {
        console.log("new data", x.data);
        setData(x.data);
      }),
    );
  }, [search, setData]);

  return (
    <SearchContext.Provider
      value={{
        search: search,
        setSearch: (newSearchValue: string) => {
          setSearch(newSearchValue);
        },
      }}
    >
      <Search />
      <BeanOfTheDay />
      <List AvailableBeans={data} />
    </SearchContext.Provider>
  );
}
