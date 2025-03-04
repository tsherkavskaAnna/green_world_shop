'use client';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
}: StarRatingProps) => {
  return (
    <div className='flex'>
      {Array.from({ length: maxRating }, (_, i) => (
        <span key={i}>
          <Star
            size={20}
            color={
              i < rating
                ? 'oklch(0.852 0.199 91.936)'
                : 'oklch(0.707 0.022 261.325)'
            }
            fill={
              i < rating
                ? 'oklch(0.852 0.199 91.936)'
                : 'oklch(0.707 0.022 261.325)'
            }
          />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
