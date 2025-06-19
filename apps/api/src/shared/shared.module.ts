import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { dataSourceOptions } from "./typeorm/typeorm"

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
})
export class SharedModule {}
