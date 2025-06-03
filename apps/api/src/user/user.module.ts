import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserRepository } from "./user.repository"
import { UserController } from "./user.controller"
import { User } from "./types/user.entity"
import { UserService } from "./user.service"

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRepository],
})
export class UserModule {}
