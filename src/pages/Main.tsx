import React, { Dispatch, SetStateAction } from 'react';
import Home from '../sections/Home';
import Data from '../sections/Data';
import Place from '../sections/Place';
import Food from '../sections/Food';
import Send from '../sections/Send';
import ReservePDF from './Reserve';

interface MainProps {
  data: {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    artist: string;
    setArtist: Dispatch<SetStateAction<string>>;
  };
  place: {
    place: string;
    setPlace: Dispatch<SetStateAction<string>>;
  };
  food: {
    food: string;
    setFood: Dispatch<SetStateAction<string>>;
  };
}

const Main = ({ data, place, food }: MainProps) => {
  return (
    <div>
      <Home />
      <Data
        name={data.name}
        setName={data.setName}
        artist={data.artist}
        setArtist={data.setArtist}
      />
      <Place place={place.place} setPlace={place.setPlace} />
      <Food food={food.food} setFood={food.setFood} />
      <Send
        name={data.name}
        artist={data.artist}
        place={place.place}
        food={food.food}
      />
      <ReservePDF
        name={data.name}
        artist={data.artist}
        place={place.place}
        food={food.food}
      />
    </div>
  );
};

export default Main;
