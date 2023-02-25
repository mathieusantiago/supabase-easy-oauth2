/**
 * Signs up a new user with an email address and password.
 * @param {object} supabase - A Supabase client configured with the URL and API key.
 * @param {string} email - The email address of the user to sign up.
 * @param {string} password - The password of the user to sign up.
 * @throws {Error} If `email` or `password` is not a non-empty string.
 * @returns {object} An object with the response data or error from the `signUp` method.
 */

exports.signUpEmail = async (supabase, email, password) => {
  // Verifies that `email` is a non-empty string.
  if (typeof email !== "string" || email.trim() === "") {
    throw new Error("The email address must be a non-empty string.");
  }

  // Verifies that `password` is a non-empty string.
  if (typeof password !== "string" || password.trim() === "") {
    throw new Error("The password must be a non-empty string.");
  }
  // Sign up a new user with an email address and password.
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return {
    data,
    error,
  };
};
