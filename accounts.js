const SUPABASE_URL = "YOUR_PROJECT_URL_HERE";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY_HERE";

let supabaseClient = null;

async function initSupabase() {
    const { createClient } = supabase;

    supabaseClient = createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("Supabase connected!");
}

initSupabase();
