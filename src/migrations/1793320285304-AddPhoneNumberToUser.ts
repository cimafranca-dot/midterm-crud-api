import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneNumberToUser1716161616100 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users ADD COLUMN phoneNumber VARCHAR(20) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users DROP COLUMN phoneNumber`);
    }
}