import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function RatingIcons({ rating }) {
  const convertedRating =
    rating > 0.5 && rating <= 1
      ? 1
      : rating > 1 && rating <= 1.5
        ? 1.5
        : rating > 1.5 && rating <= 2
          ? 2
          : rating > 2 && rating <= 2.5
            ? 2.5
            : rating > 2.5 && rating <= 3
              ? 3
              : rating > 3 && rating <= 3.5
                ? 3.5
                : rating > 3.5 && rating <= 4
                  ? 4
                  : rating > 4 && rating <= 4.5
                    ? 4.5
                    : 5;

  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {convertedRating === 1 ? (
        <>
          <FaStar />
        </>
      ) : convertedRating === 1.5 ? (
        <>
          <FaStar />
          <FaStarHalfAlt />
        </>
      ) : convertedRating === 2 ? (
        <>
          <FaStar />
          <FaStar />
        </>
      ) : convertedRating === 2.5 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      ) : convertedRating === 3 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ) : convertedRating === 3.5 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      ) : convertedRating === 4 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ) : convertedRating === 4.5 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      ) : (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      )}
    </div>
  );
}
