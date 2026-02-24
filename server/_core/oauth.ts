import { Express } from 'express';

export function registerOAuthRoutes(app: Express) {
  // Placeholder for OAuth routes
  app.get('/api/auth/login', (req, res) => {
    const oauthPortalUrl = process.env.VITE_OAUTH_PORTAL_URL || "http://localhost:3001";
    const appId = process.env.VITE_APP_ID || "elprofetino";
    const redirectUri = `${process.env.APP_URL}/api/auth/callback`;
    const loginUrl = `${oauthPortalUrl}/login?appId=${appId}&redirectUri=${encodeURIComponent(redirectUri)}`;
    res.redirect(loginUrl);
  });

  app.get('/api/auth/logout', (req, res) => {
    const oauthPortalUrl = process.env.VITE_OAUTH_PORTAL_URL || "http://localhost:3001";
    const appId = process.env.VITE_APP_ID || "elprofetino";
    const redirectUri = `${process.env.APP_URL}`; // Redirect to home after logout
    const logoutUrl = `${oauthPortalUrl}/logout?appId=${appId}&redirectUri=${encodeURIComponent(redirectUri)}`;
    res.redirect(logoutUrl);
  });

  app.get('/api/auth/callback', async (req, res) => {
    const { code } = req.query;
    const oauthPortalUrl = process.env.VITE_OAUTH_PORTAL_URL || "http://localhost:3001";
    const appId = process.env.VITE_APP_ID || "elprofetino";

    if (!code) {
      return res.status(400).send('Authorization code not provided.');
    }

    try {
      const tokenExchangeResponse = await fetch(`${oauthPortalUrl}/api/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          appId,
          redirectUri: `${process.env.APP_URL}/api/auth/callback`,
        }),
      });

      if (!tokenExchangeResponse.ok) {
        const errorData = await tokenExchangeResponse.json();
        throw new Error(errorData.message || 'Failed to exchange code for tokens');
      }

      const { accessToken, refreshToken, user } = await tokenExchangeResponse.json();

      // In a real application, you would store these tokens securely (e.g., in http-only cookies)
      // For this example, we'll simulate setting a session cookie.
      // IMPORTANT: This is a simplified example. Production apps need robust session management.
      res.cookie('access_token', accessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
      res.cookie('refresh_token', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
      res.cookie('user_data', JSON.stringify(user), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });

      res.redirect('/'); // Redirect to home page after successful login

    } catch (error: any) {
      console.error('OAuth callback error:', error);
      res.status(500).send(`Authentication failed: ${error.message}`);
    }
  });
}
