import { Logger } from 'tslog';

const createLogger = (name = 'Client') =>
  new Logger({ name, hideLogPositionForProduction: true });

export const log = createLogger();
