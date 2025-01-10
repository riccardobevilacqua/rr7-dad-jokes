import type { Route } from "./+types/home";

import type { Joke } from "~/types";
import JokesList from "~/components/JokesList";

export async function loader(): Promise<Joke[]> {
  const response = await fetch("https://icanhazdadjoke.com/search?limit=5", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  return data.results;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const jokes = loaderData;

  return (
    <div className="container">
      <h1 className="title">Dad Jokes</h1>
      <JokesList jokes={jokes} />
    </div>
  );
}
