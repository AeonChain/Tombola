"use client";
import { useEffect, useState, createContext } from "react";
import List from "./Components/List";
import PromotionBanner from "./Components/PromotionBanner";
import Search from "./Components/Search";

export const SearchContext = createContext({
  search: "",
  setSearch: (_newSearchValue: string) => {},
});

// export const BasketContext = createContext({
//   basket: [],
//   addToBasket: (bean: Bean) => {},
//   removeFromBasket: (id: Bean) => {},
// });

export default function Home() {
  const [data, setData] = useState([] as Bean[]);
  const [botd, setBotd] = useState<Bean>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = "/api/allBeans" + (search ? `?searchTerm=${search}` : "");
    fetch(url).then((x) =>
      x.json().then((x) => {
        console.log("new data", x.data);
        setData(x.data);
      }),
    );
  }, [search]);

  useEffect(() => {
    fetch("/api/beanOfTheDay").then((x) =>
      x.json().then((x) => setBotd(x.data)),
    );
  }, []);

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
      {botd && (
        <PromotionBanner
          image={botd.image}
          imageAlt="Image showing our Bean of the day"
          title="Have a look our Bean of the day!"
          description={`The bean of the day is: ${botd.name} Click anywhere in this banner to find out more!`}
          destination={`/bean/${botd.id}`}
        />
      )}
      <List AvailableBeans={data} />
    </SearchContext.Provider>
  );
}
