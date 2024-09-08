import { MigrationInterface, QueryRunner } from "typeorm";

export class NextMigration1725678553498 implements MigrationInterface {
    name = 'NextMigration1725678553498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
