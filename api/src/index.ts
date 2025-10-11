import 'module-alias/register';
import 'dotenv/config';
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import createDatabaseConnection from 'database/createConnection';
import { addRespondToResponse } from 'middleware/response';
import { authenticateUser } from 'middleware/authentication';
import { handleError } from 'middleware/errors';
import { RouteNotFoundError } from 'errors';

import { attachPublicRoutes, attachPrivateRoutes } from './routes';

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
  } catch (error) {
    console.log(error);
  }
};

const initializeExpress = (): void => {
  const app = express();

  app.use(
    cors({
      origin: process.env.CLIENT_URL || 'http://localhost:8080',
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use(express.urlencoded());

  app.use(addRespondToResponse);

  attachPublicRoutes(app);

  app.use('/', authenticateUser);

  attachPrivateRoutes(app);

  app.use((req: Request, _res: Response, next: NextFunction) =>
    next(new RouteNotFoundError(req.originalUrl)),
  );
  app.use(handleError);

  app.listen(process.env.PORT || 3000);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();

  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 3000}`);
};

initializeApp();
