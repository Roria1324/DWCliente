import { createClient } from "@supabase/supabase-js";

const supabaseConexion = createClient(
  "https://abkyhfrhtqvbnaifuwcx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFia3loZnJodHF2Ym5haWZ1d2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MzYzMTYsImV4cCI6MjA4NDQxMjMxNn0.Fn7v1lHeJYDu1GG3PtDKAGbS_ukSIzZ7NSefK2ceDpw",
);

export { supabaseConexion };
