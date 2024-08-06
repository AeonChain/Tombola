"use client";
import Card, { CardData } from "./Card";

type props = {
  AvailableBeans?: Bean[];
};

export default function List({ AvailableBeans }: props) {
  if (!AvailableBeans || !AvailableBeans.length) {
    return (
      <div className="w-full flex">
        <div className="mt-6 w-11/12 text-center mx-auto bg-white">
          No beans available? How can this be!?
        </div>
      </div>
    );
  }

  const transformBeanDataForCard = (bean: Bean): CardData => {
    return {
      title: bean.name,
      description: bean.description,
      action: () => {
        ("");
        console.log(bean.id);
      },
    };
  };
  return (
    <div className="w-full flex justify-center mt-6">
      {AvailableBeans.map((x, i) => {
        return <Card key={i} data={transformBeanDataForCard(x)} />;
      })}
    </div>
  );
}
