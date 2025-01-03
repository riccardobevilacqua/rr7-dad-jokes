// This import brings in TypeScript type definitions from a local types file
// It imports the Route type which defines the expected types for:
// - Route.LoaderArgs - Arguments passed to the loader function
// - Route.ComponentProps - Props passed to the Home component
import type { Route } from "./+types/home";
import JokeCard from "~/components/JokeCard";

interface Joke {
  id: string;
  joke: string;
}

export async function loader({}: Route.LoaderArgs) {
  const response = await fetch("https://icanhazdadjoke.com/search?limit=5", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data.results;
}

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
