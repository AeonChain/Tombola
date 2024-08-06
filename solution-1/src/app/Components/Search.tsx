import FilterIcon from './icons/FilterIcon';

export default function Search() {
	return (
		<div className="w-full text-center text-lg bg-slate-600 pt-2 pb-4 rounded-b-2xl flex flex-wrap justify-around">
			<div className='w-9/12 text-lg bg-white py-1'><input placeholder='Search...'></input></div>
			<div className='w-1/12'><FilterIcon /></div>
		</div >
	);
};
