export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || "http://localhost:3001";
  const appId = import.meta.env.VITE_APP_ID || "elprofetino";
  const redirectUri = `${window.location.origin}/api/auth/callback`;
  return `${oauthPortalUrl}/login?appId=${appId}&redirectUri=${encodeURIComponent(redirectUri)}`;
};

export const getLogoutUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || "http://localhost:3001";
  const appId = import.meta.env.VITE_APP_ID || "elprofetino";
  const redirectUri = `${window.location.origin}`; // Redirect to home after logout
  return `${oauthPortalUrl}/logout?appId=${appId}&redirectUri=${encodeURIComponent(redirectUri)}`;
};
