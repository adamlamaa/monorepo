import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from "./types/user.entity"
import { CreateUserDto } from "./types/create-user.dto"

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.repository.find()
  }

  async getUserById(id: string): Promise<User | null> {
    return this.repository.findOne({ where: { id } })
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this.repository.save(user)
  }
}
