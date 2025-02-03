"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

interface ActionProps {
  page: number, 
  search: string | null
}

export const fetchAnime = async (params: ActionProps) => {  //api.nekosia.cat/api/v1
  const response = await fetch(`https://shikimori.one/api/animes?search=${params?.search}&limit=100&order=popularity`);

  const data = await response.json();
  console.log(data)
  console.log(params.page)
  console.log(params)

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
}