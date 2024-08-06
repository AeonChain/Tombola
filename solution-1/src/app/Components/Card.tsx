export type CardData = {
  title: string;
  description: string;
  //going to see how this feels where the full card is clickable
  // actionText: string,
  action: () => void;
};

type props = {
  data: CardData;
};

export default function Card({ data }: props) {
  return (
    <div
      className="bg-white w-11/12 flex cursor-pointer justify-evenly p-2 group"
      onClick={() => {
        data.action();
      }}
    >
      <div className="border-r border-r-gray-500 text-center align-middle w-1/3 transition-all duration-300 ease-in-out group-hover:font-semibold">
        {data.title}
      </div>
      <div className="text-center break-words w-1/3">{data.description}</div>
    </div>
  );
}
