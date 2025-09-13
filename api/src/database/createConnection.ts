import 'reflect-metadata';
import { DataSource } from 'typeorm';

// import { createConnection, Connection } from 'typeorm';

import * as entities from 'entities';

// const createDatabaseConnection = (): Promise<Connection> =>
//   createConnection({
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     entities: Object.values(entities),
//     synchronize: true,
//   });

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: Object.values(entities),
  synchronize: true,
});

const createDatabaseConnection = async (): Promise<void> => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.info('✨ Database connection established !');
      console.info('🔒 Database name:', AppDataSource.options.database);
      //console.info('📜 Database schema:', AppDataSource.options.entities);
    }
  } catch (error) {
    console.log('🐛 Error during DataSource initialization: ', error);
  }
};
export default createDatabaseConnection;
