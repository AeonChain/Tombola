import Header from './Components/Header';
import Search from './Components/Search';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-slate-400">
			<Header />
			<Search />
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

			</div>
		</main>
	);
}
