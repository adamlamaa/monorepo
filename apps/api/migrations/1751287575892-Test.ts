import { MigrationInterface, QueryRunner } from "typeorm"

export class Test1751287575892 implements MigrationInterface {
  name = "Test1751287575892"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "user" (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
              "name" character varying NOT NULL, 
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
              "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
              "deletedAt" TIMESTAMP, 
              CONSTRAINT "PK_Users_id" PRIMARY KEY ("id")
            )
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`)
  }
}
