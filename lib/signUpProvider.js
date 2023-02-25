/**
 * Signs up a new user with a third-party authentication provider.
 * @param {object} supabase - A Supabase client configured with the URL and API key.
 * @param {string} provider - The name of the third-party authentication provider to use.
 * @throws {Error} If `provider` is not a non-empty string.
 * @returns {object} An object with the response data or error from the `signInWithOAuth` method.
 */

exports.signUpProvider = async (supabase, provider) => {
  // Verifies that `provider` is a non-empty string.
  if (typeof provider !== "string" || provider.trim() === "") {
    throw new Error("The provider must be a non-empty string.");
  }
  // Sign up a new user with a authentication provider.
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
  });
  return {
    data,
    error,
  };
};
