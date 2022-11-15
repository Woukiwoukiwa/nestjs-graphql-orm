import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['dist/**/*.model.js'],
    synchronize: false,
}