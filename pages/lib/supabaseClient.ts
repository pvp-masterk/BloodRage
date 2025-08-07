import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://smcteblolwhfxcpngmvd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtY3RlYmxvbHdoZnhjcG5nbXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0Nzk1MTUsImV4cCI6MjA3MDA1NTUxNX0.PWlZFiVv2E0Jah7tYGOGrbqkPwhxPoLhe0anINp0z3s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
