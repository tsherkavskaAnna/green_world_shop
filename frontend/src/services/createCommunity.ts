import { Community } from '@/interface/community';
import { urlBase } from '@/lib/urlBase';

export async function createNewCommunity(user: Community) {
  const bodyData = JSON.stringify({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: Number(user.phone),
      message: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: user.message || '',
            },
          ],
        },
      ],
    },
  });

  const response = await fetch(`${urlBase}/api/communities`, {
    method: 'POST',
    body: bodyData,
    cache: 'no-store',
    headers: {
      Authorization: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
    },
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
}
