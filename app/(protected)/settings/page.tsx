import { auth, signOut } from '@/server/auth';
import {} from 'next-auth/react';

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type="submit">Sing out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
