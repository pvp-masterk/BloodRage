// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'https://smcteblolwhfxcpngmvd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtY3RlYmxvbHdoZnhjcG5nbXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0Nzk1MTUsImV4cCI6MjA3MDA1NTUxNX0.PWlZFiVv2E0Jah7tYGOGrbqkPwhxPoLhe0anINp0z3s';

const login = async (provider) => {
  const redirectTo = window.location.origin + '/me.html';

  const url = `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${encodeURIComponent(redirectTo)}`;

  window.location.href = url;
};
