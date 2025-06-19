import { DataSource, DataSourceOptions } from "typeorm"
import migrationModules from "../../../migrations"
import entities from "./entities"
import envTyped from "../envTyped"

export const dataSourceOptions = {
  type: "postgres",
  host: envTyped.database.host,
  port: envTyped.database.port,
  username: envTyped.database.username,
  password: envTyped.database.password,
  database: envTyped.database.name,
  synchronize: false,
  migrationsRun: false,
  entities: entities,
  migrations: migrationModules,
} satisfies DataSourceOptions

/**
 * TypeORM expects a DataSource instance export when running migrations in the config file
 * This should not be used for anything else
 */
export const migrationDataSource = new DataSource(dataSourceOptions)
