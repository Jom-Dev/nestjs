import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sysdev',
    database: 'nestjs',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    // migrations: [
    //   'dist/src/db/migrations/*.js'
    // ],
    /**
     * cli option somehow not working
     * found a workaround here
     * https://github.com/typeorm/typeorm/issues/8905
     */
    // cli: {
    //   migrationsDir: 'src/db/migrations'
    // }
}

export default config;