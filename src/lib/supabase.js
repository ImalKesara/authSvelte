import { createClient } from '@supabase/supabase-js';
const supabaseurl = 'https: //kjhkydduvetojwahrxws.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqaGt5ZGR1dmV0b2p3YWhyeHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzOTA5NzksImV4cCI6MjA0MDk2Njk3OX0.ayjzdqZvTSEfrXk4rnyN6CpN_aJjBAl5f_XWPMzEPq0';
export const supabase = createClient(supabaseurl, supabaseKey);
