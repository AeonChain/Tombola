
import Header from './Components/Header';
import List from './Components/List';
import Search from './Components/Search';

export default function Home() {
	const beans: Bean[] = [{ name: "coffee", description: "drink go brrr the quick brown fox jumped over the lazy dog", availability: 99, cost: 5, id: '000000-0000-0000-000000' }];
	return (
		<main className="flex min-h-screen flex-col items-center bg-slate-400">
			<Header />
			<Search />
			<List AvailableBeans={beans} />
		</main>
	);
}
