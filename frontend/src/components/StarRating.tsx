'use client';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className='flex'>
      {Array.from({ length: maxRating }, (_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-yellow-500' : 'text-gray-400'}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
