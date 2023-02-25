const createClient = require("@supabase/supabase-js").createClient;

/**
 * Sets up the Supabase environment by creating a client from the given URL and key.
 * @param {string} url - The URL of your Supabase project.
 * @param {string} key - The API key for your Supabase project.
 * @throws {Error} If `url` or `key` is not a non-empty string.
 * @returns {object} A Supabase client configured with the given URL and key.
 */

exports.configEnv = (url, key)=> {
  // Verify that `url` is a non-empty string.
  if (typeof url !== "string" || url.trim() === "") {
    throw new Error("L'URL doit être une chaîne de caractères non vide.");
  }
  // Verify that `key` is a non-empty string.
  if (typeof key !== "string" || key.trim() === "") {
    throw new Error("La clé doit être une chaîne de caractères non vide.");
  }
  //creating a client from the given URL and key
  const supabase = createClient(url, key);
  return supabase;
};

