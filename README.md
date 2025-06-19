# monorepo
Testing pattern for monorepo with [Turborepo](https://turborepo.com/docs)

# Dependencies

This will install, yarn, turbo and nestjs cli's globally.
```bash
npm install -g yarn
yarn global add turbo
yarn global add @nestjs/cli
```

# DB

Setup docker-compose to run the database.
```bash
cd apps/api
docker-compose up -d
```

# Running the project
```bash
yarn install
yarn dev
```

# Create new migrations
```bash
typeorm migration:create ./apps/api/migrations/{NameOfMigration}
```


# Project resources overview

| Resource    | Description          | Technology  | Address                   |
|-------------|----------------------|-------------|---------------------------|
| Portal      | Monorepo Portal      | React       | http://localhost:4000     |
| API         | Monorepo API         | NestJS      | http://localhost:4001     |
| API Swagger | Monorepo API Swagger | Swagger     | http://localhost:4001/api |
| DB          | Monorepo Database    | PostgresSQL | localhost:5432            |