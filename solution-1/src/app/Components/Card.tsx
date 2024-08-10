export type CardData = {
	title: { title:string, content:string };
	Columns: { title: string, content: string; hideOnMobile?:boolean}[];
  //going to see how this feels where the full card is clickable
  // actionText: string,
  action: () => void;
};

type props = {
	data: CardData;
	columns: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export default function Card({ data,  columns}: props) {
	console.log(data);
  return (
    <div
			className={`bg-white grid grid-cols-${columns} cursor-pointer justify-evenly p-2 group`}
      onClick={() => {
        data.action();
      }}
    >
      <div className="border-r col-span-2 border-r-gray-500 text-center transition-all duration-300 ease-in-out group-hover:font-semibold">
					<div className='border-b mr-2 font-bold border-b-gray-800'>{data.title.title}</div>
					<div>{data.title.content}</div>
      </div>
			{data?.Columns?.map((x,i) => {
				return (<div key={i} className="text-center">
					<div className='border-b ml-2 font-bold border-b-gray-800'>{x.title}</div>
					<div>{x.content}</div>
				</div>)
			})}
    </div>
  );
}
