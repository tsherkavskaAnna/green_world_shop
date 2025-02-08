export const loginWithCredentials = async (email: string, password: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`;

  console.log('Login request:', { email, password });

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ identifier: email, password }),
  });
  const data = await response.json();
  console.log('Response from Strapi:', data);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.error?.message || 'Errore durante il login in middlaware'
    );
  }

  return data;
};
