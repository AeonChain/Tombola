"use client";
import { useEffect, useState } from "react";
import List from "./Components/List";
import PromotionBanner from "./Components/PromotionBanner";
import SkeletonBlock from "./Components/SkeletonBlock";

export default function Home() {
  const [data, setData] = useState([] as Bean[]);
  const [botd, setBotd] = useState<Bean>();

  useEffect(() => {
    fetch("/api/allBeans").then((x) => x.json().then((x) => setData(x.data)));
  }, []);

  useEffect(() => {
    fetch("/api/BeanOfTheDay").then((x) =>
      x.json().then((x) => setBotd(x.data)),
    );
  }, []);

  return (
    <>
      {botd && (
        <PromotionBanner
          image={botd.image}
          imageAlt="Image showing our Bean of the day"
          title="Have a look our Bean of the day!"
          description="Click anywhere in this banner to find out more!"
          destination={`/bean/${botd.id}`}
        />
      )}
      <List AvailableBeans={data} />
    </>
  );
}
