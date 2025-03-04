import { CartItem } from '@/interface/product';
import { urlBase } from '@/lib/urlBase';

export async function getUserCart(userId: string, strapiToken: string) {
  const response = await fetch(
    `${urlBase}/api/carts?populate[products][populate]=image&populate[user]=true&filters[user][id][$eq]=${userId}`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${strapiToken}, Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
}

export async function createUserCart(
  userId: string,
  cartItems: CartItem[],
  strapiToken: string
) {
  try {
    const bodyData = JSON.stringify({
      data: {
        user: userId,
        products: cartItems.map((item) => ({
          id: item.product.id,
          name: item.product.name,
          slug: item.product.slug,
          price: item.product.price,
        })),
      },
    });
    const response = await fetch(
      `${urlBase}/api/carts?populate[products][populate]=image&populate[user]=true&filters[user][id][$eq]=${userId}`,
      {
        method: 'POST',
        body: bodyData,
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${strapiToken}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
      }
    );

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

export async function updateUserCart(
  userId: string,
  cartItems: CartItem[],
  strapiToken: string
) {
  try {
    const userCart = await getUserCart(userId, strapiToken);

    if (!userCart || userCart.length === 0) {
      throw new Error('Carrello non trovato per questo utente.');
    }

    const bodyData = JSON.stringify({
      data: {},
    });
    const response = await fetch(
      `${urlBase}/api/carts?populate[products][populate]=image&populate[user]=true&filters[user][id][$eq]=${userId}`,
      {
        method: 'PUT',
        body: bodyData,
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${strapiToken}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
      }
    );

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

export async function deleteProductInCart(
  userId: string,
  strapiToken: string,
  cartItems: CartItem[]
) {
  const bodyData = {
    data: {
      user: userId,
      products: cartItems.map((item) => item.product.id),
    },
  };
  const response = await fetch(
    `${urlBase}/api/carts?populate[products][populate]=image&populate[user]=true&filters[user][id][$eq]=${userId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(bodyData),
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${strapiToken}, Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
}
