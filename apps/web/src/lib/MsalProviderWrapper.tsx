'use client';

import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../authConfig';

const pca = new PublicClientApplication(msalConfig);

export default function MsalProviderWrapper({ children }: { children: React.ReactNode }) {
  return <MsalProvider instance={pca}>{children}</MsalProvider>;
}
