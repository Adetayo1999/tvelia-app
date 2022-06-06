import React from "react";
import { FullStarIcon, HalfStarIcon } from "../../assets/svg";

type RatingType = { rating: number };

const Rating = ({ rating }: RatingType) => {
  return (
    <div className='flex w-[6rem] justify-between items-center'>
      {rating > 0 &&
        new Array(rating).fill("rating").map(() => (
          <React.Fragment key={Math.random() * Date.now()}>
            <FullStarIcon />
          </React.Fragment>
        ))}
      {5 - rating > 0 &&
        new Array(5 - rating).fill("rating").map(() => (
          <React.Fragment key={Math.random() * Date.now()}>
            <HalfStarIcon />
          </React.Fragment>
        ))}
    </div>
  );
};

export default Rating;
