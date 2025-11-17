// /lib/auth.ts
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = cookies();
  const session = cookieStore.get("session");

  if (!session) return null;

  try {
    const user = JSON.parse(session.value);
    return user; // { id, email, name }
  } catch (e) {
    return null;
  }
}

// Helper to require login
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}
