import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserRepository } from "./user.repository"
import { UserController } from "./user.controller"
import { User } from "./types/user.entity"
import { UserService } from "./user.service"
import { WinstonModule } from "nest-winston"

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User]), WinstonModule],
  providers: [UserService, UserRepository],
})
export class UserModule {}
