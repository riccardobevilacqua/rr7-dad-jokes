import type { Route } from "./+types/home";

import { loader as getJokes } from "~/api/getJokes";
import JokesList from "~/components/JokesList";

export const loader = getJokes;

export default function Home({ loaderData }: Route.ComponentProps) {
  const jokes = loaderData;

  return (
    <div className="container">
      <h1 className="title">Dad Jokes</h1>
      <JokesList jokes={jokes} />
    </div>
  );
}
