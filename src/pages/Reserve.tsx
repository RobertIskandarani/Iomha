import React from 'react';

interface ReserveProps {
  name: string;
  artist: string;
  place: string;
  food: string;
}

const Reserve = ({ name, artist, place, food }: ReserveProps) => {
  return (
    <div>
      {name}
      {artist}
      {place}
      {food}
    </div>
  );
};

export default Reserve;
