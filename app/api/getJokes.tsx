import type { Joke } from "~/types";

export async function loader(): Promise<Joke[]> {
  const response = await fetch("https://icanhazdadjoke.com/search?limit=5", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  return data.results;
}
