import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterTablePersonUniqueCpf1777408444519 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE person 
        ADD CONSTRAINT person_unique_cpf UNIQUE (cpf)`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE person
        DROP CONSTRAINT IF EXISTS person_unique_cpf
        `,
    )
  }
}
