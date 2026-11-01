const SUPABASE_URL = "https://jfyklshgxltoexjduahf.supabase.co";
const SUPABASE_KEY = "sb_publishable_eHGIuMGuUo36UenD4TE9Sw_M1-nSIgN";

let supabaseClient = null;

async function initSupabase() {
    const { createClient } = supabase;

    supabaseClient = createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("✅ Supabase connected!");
}

initSupabase();

async function signUp(email, password) {
    const { data, error } =
        await supabaseClient.auth.signUp({
            email,
            password
        });

    if (error) {
        console.error(error);
        alert(error.message);
        return;
    }

    alert("📧 Check your email for the verification link!");
    return data;
}

async function login(email, password) {
    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

    if (error) {
        console.error(error);
        alert(error.message);
        return;
    }

    alert("✅ Logged in!");
    return data;
}

async function logout() {
    await supabaseClient.auth.signOut();
    alert("👋 Logged out!");
}
