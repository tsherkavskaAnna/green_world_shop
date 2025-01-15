export const loginWithCredentials = async (email: string, password: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Errore durante il login');
  }

  return response.json();
};
