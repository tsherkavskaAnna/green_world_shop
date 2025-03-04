'use client';
import React, { useTransition } from 'react';

import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { createNewReview } from '@/services/createNewReview';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function NewReview({
  productId,
  strapiToken,
}: {
  productId: string;
  strapiToken: string;
}) {
  const [review, setReview] = React.useState({
    comment: '',
    rating: 0,
    author: '',
  });
  const [hover, setHover] = React.useState<number | undefined>(undefined);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRatingClick = (selectedRating: number) => {
    setReview((prev) => ({
      ...prev,
      rating: selectedRating,
    }));
  };
  const handlePostReview = async (event: React.FormEvent) => {
    event.preventDefault();

    const newReview = await createNewReview(productId, review, strapiToken);

    if (newReview) {
      toast.success('Review submitted successfully!');
      setReview({ rating: 0, comment: '', author: '' });
      startTransition(() => {
        router.refresh();
      });
    } else {
      toast.error('Error submitting review.');
    }
  };

  return (
    <div className='my-4 hidden flex-col peer-checked:flex'>
      <form onSubmit={handlePostReview}>
        <div>
          {[1, 2, 3, 4, 5].map((star, index) => {
            return (
              <label key={index}>
                <input
                  type='radio'
                  name='rating'
                  value={star}
                  onChange={() => handleRatingClick(star)}
                />
                <span
                  className='star'
                  style={{
                    color:
                      star <= (hover ?? review.rating)
                        ? 'oklch(0.852 0.199 91.936)'
                        : 'oklch(0.707 0.022 261.325)',
                  }}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(undefined)}
                  onClick={() => handleRatingClick(star)}
                >
                  ★
                </span>
              </label>
            );
          })}
        </div>

        <Textarea
          className='my-4 bg-white text-slate-500'
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
        >
          Why do you recommend
        </Textarea>
        <Input
          placeholder='Author'
          value={review.author}
          className='text-slate-500'
          onChange={(e) => setReview({ ...review, author: e.target.value })}
        />
        <Button
          type='submit'
          size='sm'
          className='mt-4 w-24 justify-center bg-slate-400 p-4 text-white'
        >
          {isPending ? 'Posting...' : 'Post Review'}
        </Button>
      </form>
    </div>
  );
}

export default NewReview;
