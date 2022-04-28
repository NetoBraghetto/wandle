import { Dialect } from "sequelize/types";

export type DatabaseConnections = keyof typeof database.connections;

export type DatabaseCofig = {
  default: DatabaseConnections,
  connections: Record<
    string,
    {
      dialect: Dialect,
      database: string,
      host?: string,
      port?: number,
      username?: string,
      password?: string,
      charset?: string,
      collation?: string,
      strict?: boolean,
      [key: string]: any,
    }
  >,
  migrations: string,
};

export const database: DatabaseCofig = {
  default: process.env.DB_CONNECTION || 'mysql',
  connections: {
    sqlite: {
      dialect: 'sqlite',
      database: process.env.DB_DATABASE || 'database.sqlite',
      foreign_key_constraints: process.env.DB_FOREIGN_KEYS || true,
    },
    mysql: {
      dialect: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: Number.parseInt(process.env.DB_PORT || '3306', 10),
      database: process.env.DB_DATABASE || 'wandle',
      username: process.env.DB_USERNAME || 'wandle',
      password: process.env.DB_PASSWORD || '',
      charset: 'utf8mb4',
      collation: 'utf8mb4_unicode_ci',
      strict: true,
    },
  },
  migrations: 'migrations',
};
