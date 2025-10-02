// tests/handlers/server.ts
import { setupServer } from 'msw/node';

import { handlers } from './characters';

export const server = setupServer(...handlers);
