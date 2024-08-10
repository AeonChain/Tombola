'use server'
import Header from "./Components/Header";
import List from "./Components/List";
import Search from "./Components/Search";


export default async function Home() {
		const route = process.env.ALL_BEANS_ROUTE;
	if (!route) {
		throw Error("No 'ALL_BEANS_ROUTE' enviroment variableSet");
	}
	const response = await fetch(route);
	const data: Bean[] = await response.json();
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-400">
      <Header />
      <Search />
      <List AvailableBeans={data} />
    </main>
  );
}
