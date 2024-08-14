"use client";
import { useEffect, useState } from "react";
import PromotionBanner from "./PromotionBanner";

export default function BeanOfTheDay() {
  const [botd, setBotd] = useState<Bean>();

  useEffect(() => {
    fetch("/api/beanOfTheDay").then((x) =>
      x.json().then((x) => setBotd(x.data)),
    );
    console.log("Beanof the day");
  }, [setBotd]);

  return (
    <>
      {botd && (
        <PromotionBanner
          image={botd.image}
          imageAlt="Image showing our Bean of the day"
          title="Have a look our Bean of the day!"
          description={`The bean of the day is: ${botd.name} Click anywhere in this banner to find out more!`}
          destination={`/bean/${botd.id}`}
        />
      )}
    </>
  );
}
