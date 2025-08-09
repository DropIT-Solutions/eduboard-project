export const msalConfig = {
  auth: {
    clientId: 'bcd05946-fee1-45b3-8c8a-0445decb51a8', // from Azure App Registration
    authority: 'https://login.microsoftonline.com/9063058f-0728-4d56-bec9-2823e9100da0', // or B2C authority URL
    redirectUri: 'http://localhost:3000', // must match Azure portal
    postLogoutRedirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'sessionStorage', // or "localStorage"
    storeAuthStateInCookie: false, // set true if on IE11/Edge
  },
};

export const loginRequest = {
  scopes: ['User.Read'], // permissions your app needs
};
