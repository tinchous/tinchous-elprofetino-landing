import { Express } from 'express';
import { Server } from 'http';

import { Express } from 'express';
import { Server } from 'http';
import path from 'path';
import { createServer as createViteServer } from 'vite';

export function serveStatic(app: Express) {
  app.use(express.static(path.resolve(__dirname, '../../dist')));
  app.use('*', express.static(path.resolve(__dirname, '../../dist/index.html')));
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: { server } },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}
