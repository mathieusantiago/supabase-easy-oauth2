# supabase-easy-oauth2
===========
[![npm version](https://badge.fury.io/js/react-datepicker.svg)](https://badge.fury.io/js/react-datepicker)
[![Test suite](https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml/badge.svg)](https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/Hacker0x01/react-datepicker/branch/master/graph/badge.svg)](https://codecov.io/gh/Hacker0x01/react-datepicker)
[![Downloads](https://img.shields.io/npm/dm/react-datepicker.svg)](https://npmjs.org/package/react-datepicker)
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

