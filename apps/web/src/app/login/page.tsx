'use client';

import { useMsal } from '@azure/msal-react';

export default function LoginPage() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance
      .loginPopup({
        scopes: ['openid', 'profile', 'email'],
      })
      .catch((e) => console.error(e));
  };

  if (accounts.length > 0) {
    return (
      <div>
        <p>Welcome, {accounts[0].username}</p>
        {/* Optionally add logout */}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl mb-4">Staff & Teacher Login</h1>
      <button onClick={handleLogin} className="bg-primary text-white py-3 px-6 rounded">
        Sign in with Microsoft
      </button>
    </div>
  );
}
