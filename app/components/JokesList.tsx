import React from 'react';
import type { Joke } from '~/types';
import JokeCard from '~/components/JokeCard';

type JokesListProps = {
  jokes: Joke[];
};

const JokesList: React.FC<JokesListProps> = ({ jokes }) => {
  return (
    <div className="jokeList">
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke.joke} />
      ))}
    </div>
  );
};

export default JokesList;
