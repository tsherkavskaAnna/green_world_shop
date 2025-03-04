import { NewReview } from '@/interface/review';
import { urlBase } from '@/lib/urlBase';

export async function createNewReview(
  productId: string,
  review: NewReview,
  strapiToken: string
) {
  try {
    const bodyData = JSON.stringify({
      data: {
        rating: review.rating,
        comment: review.comment,
        author: review.author,
        product: productId,
      },
    });

    const response = await fetch(`${urlBase}/api/reviews/`, {
      method: 'POST',
      body: bodyData,
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${strapiToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    new Error('Error fetching');
    return null;
  }
}
