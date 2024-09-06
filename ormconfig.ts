import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'citc',
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