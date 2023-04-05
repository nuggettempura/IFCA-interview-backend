import { ApolloServer } from "apollo-server";
import env from "dotenv";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { DataSource } from "typeorm";
import { Employee } from "./entities/Employee";
import { EmployeeResolver } from "./resolvers/EmployeeResolver";
env.config();

const datasource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT as unknown as number,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Employee],
  synchronize: true,
});

datasource
  .initialize()
  .then(async () => {
    const schema = await buildSchema({
      resolvers: [EmployeeResolver],
    });
    const server = new ApolloServer({ schema });
    await server.listen(4000);
    console.log("server listening on port 4000");
  })
  .catch((e) => console.log("Error", e));
