/**
 * @typedef {Object} SignUpResponse
 */
interface SignUpResponse {
  data: object | null;
  error: object | null;
}

/**
 * 
 * @param supabase return of configEnv
 * @param email email connected to the account
 * @param password password connected to the account
 * @returns	{data: object | null, error: object | null}
 */
const signUpOAuth = async (supabase:any, email:string, password: string): Promise<SignUpResponse> => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return {
    data,
    error,
  };
};

export default signUpOAuth;
