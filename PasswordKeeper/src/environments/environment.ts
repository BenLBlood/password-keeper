// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDmYn7TRz8BjRdqmqM8zHJ2ud1riMzqOBU",
    authDomain: "bblood-password-keeper.firebaseapp.com",
    databaseURL: "https://bblood-password-keeper.firebaseio.com",
    projectId: "bblood-password-keeper",
    storageBucket: "bblood-password-keeper.appspot.com",
    messagingSenderId: "25225255815"
  }
};
