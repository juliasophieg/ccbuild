import connect from "./app/lib/db.js";

export async function register() {
  await connect();
}
