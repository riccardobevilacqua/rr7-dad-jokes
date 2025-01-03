import React from "react";

interface JokeCardProps {
  joke: string;
}

const JokeCard: React.FC<JokeCardProps> = ({ joke }) => {
  return (
    <div className="jokeCard">
      {joke}
    </div>
  );
};

export default JokeCard; 