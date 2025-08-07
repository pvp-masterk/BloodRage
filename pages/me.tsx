// pages/me.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';

export default function Me() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/');
        return;
      }

      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (!profile) {
        // First-time user, insert default row
        await supabase.from('users').insert([
          {
            id: session.user.id,
            username: session.user.user_metadata?.name?.replace(/\s+/g, '').toLowerCase() || 'user',
            avatar_url: session.user.user_metadata?.avatar_url || '',
            bio: 'This is my BloodRage profile.'
          }
        ]);
        router.reload(); // Reload to fetch new profile
      } else {
        setUser(profile);
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto bg-zinc-900 p-6 rounded-xl space-y-4 text-center">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-2xl font-bold">@{user.username}</h2>
        <p className="text-gray-400">{user.bio}</p>
        <a
          href={`/${user.username}`}
          className="text-indigo-400 underline"
          target="_blank"
        >
          View Public Profile
        </a>
      </div>
    </main>
  );
}
