import { getServerSession } from 'next-auth';

import MainLayout from '@/app/layout';
import SessionWrapper from '@/context/sessionProvider';

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <SessionWrapper session={session}>
      <div>{children}</div>
    </SessionWrapper>
  );
}
