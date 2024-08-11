"use client";
import Link from 'next/link';
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
			title: { title:'Name', content:bean.name },
			Columns: [
				{title:'Colour', content: bean.colour },
				{ title: 'Cost', content: bean.cost },
				{title:'Country', content:bean.country}
			],
      action: () => {
        console.log(bean.id);
      },
    };
  };
  return (
    <div className="w-full grid gap-4 justify-center mt-6">
      {AvailableBeans.map((x, i) => {
				return <Link key={i} href={`/bean/${x.id}`}><Card data={transformBeanDataForCard(x)} columns={5} /></Link>;
      })}
    </div>
  );
}
