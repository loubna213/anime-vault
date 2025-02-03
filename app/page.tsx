import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";
import SearchForm from "@/components/SearchForm";

async function Home({ searchParams}: { searchParams: Promise<{query?: string | undefined}>}) {
  const query = (await searchParams).query;
  const params = { page: 1, search: query || null };

  const data = await fetchAnime(params)

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <SearchForm query={query} />
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;