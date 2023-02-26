# supabase-easy-oauth2

This npm package simplifies authentication with Supabase Auth2, making it easier to connect with popular social media platforms such as Google, GitHub, Facebook, Twitter, and more.easy

Installation
============== 

    $ npm install supabase-easy-oauth2 @supabase/supabase-js

Examples
==========

## OAuth2.0

```javascript
import {configEnv, signUpEmail, signUpGitHub} from 'supabase-easy-oauth2';

// Create a single supabase client for interacting with your database
const supabase = configEnv('https://xyzcompany.supabase.co', 'public-anon-key');
// Define a function that signs up with email
const email = async ()=> {
    // Call the `signUpEmail` function with the Supabase client and email/password credentials.
    signUpEmail(supabase, '<email@gmail.com>', '<password>').then((res)=> {
        console.log(res);
    });
}

// Define a function that signs up with GitHub
const gitHub = async ()=> {
     // Call the `signUpGitHub` function with the Supabase client and the `github, facebook, google` provider.
    signUpGitHub(supabase, 'github').then((res)=> {
        console.log(res);
    })
}
```

