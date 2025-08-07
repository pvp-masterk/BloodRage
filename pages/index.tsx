// pages/index.tsx
import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

const supabase = createClient(
  'https://smcteblolwhfxcpngmvd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtY3RlYmxvbHdoZnhjcG5nbXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0Nzk1MTUsImV4cCI6MjA3MDA1NTUxNX0.PWlZFiVv2E0Jah7tYGOGrbqkPwhxPoLhe0anINp0z3s'
);

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/me');
      }
    });
  }, []);

  const handleLogin = async (provider: 'google' | 'discord') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: 'https://bloodrage.vercel.app/me',
      },
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center space-y-6 p-6">
        <h1 className="text-4xl font-bold">Welcome to BloodRage</h1>
        <p className="text-lg text-gray-400">
          Create your own profile and share it like guns.lol
        </p>

        <div className="space-y-3">
          <button
            onClick={() => handleLogin('discord')}
            className="bg-[#5865F2] hover:bg-[#4752C4] px-6 py-3 rounded-xl text-white font-medium transition"
          >
            Continue with Discord
          </button>

          <button
            onClick={() => handleLogin('google')}
            className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-medium transition"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
}
