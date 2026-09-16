const SUPABASE_URL = "https://pjxbbtamnbwvmemavzon.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_qlBUQwvxHeBJVnNF1fvqjw_gjXpU8a4";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
);

function showMessage(elementId, message) {
  const element = document.getElementById(elementId);

  if (!element) return;

  element.textContent = message;
  element.style.display = "block";
}

function clearMessage(elementId) {
  const element = document.getElementById(elementId);

  if (!element) return;

  element.textContent = "";
  element.style.display = "none";
}

async function requireSession() {
  const { data, error } = await window.supabaseClient.auth.getSession();

  if (error) {
    throw error;
  }

  if (!data.session) {
    window.location.href = "professional-login.html";
    return null;
  }

  return data.session;
}
