import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { ProductStore } from '@/interface/product';

export async function POST(req: Request) {
  const { items } = await req.json();

  const headersList = await headers();
  const origin = headersList.get('origin') || 'http://localhost:3000';
  const line_items = items.map((item: ProductStore) => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name,
        images: Array.isArray(item.image)
          ? [item.image[0]?.url || '']
          : [item.image.url],
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/?canceled=true`,
  });

  return NextResponse.json(
    { url: session.url },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
