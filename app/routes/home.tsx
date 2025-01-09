import type { Route } from "./+types/home";

import type { Joke } from "~/types";
import { loader as getJokes } from "~/api/getJokes";
import JokeCard from "~/components/JokeCard";

export const loader = getJokes;

export default function Home({ loaderData }: Route.ComponentProps) {
  const jokes = loaderData as Joke[];

  return (
    <div className="container">
      <h1 className="title">Dad Jokes</h1>
      <div className="jokeList">
        {jokes.map((joke) => (
          <JokeCard key={joke.id} joke={joke.joke} />
        ))}
      </div>
    </div>
  );
}
