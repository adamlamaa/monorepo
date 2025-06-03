import { Injectable } from "@nestjs/common"
import { UserDto } from "./types/user.dto"
import { CreateUserDto } from "./types/create-user.dto"
import { UserRepository } from "./user.repository"

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.getUsers()
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }))
  }

  async getUserById(id: string): Promise<UserDto> {
    const user = await this.userRepository.getUserById(id)

    if (!user) {
      throw new Error(`User with id ${id} not found`)
    }

    return {
      id: user.id,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }

  async createUser(user: CreateUserDto): Promise<UserDto> {
    const userCreated = await this.userRepository.createUser(user)

    return {
      id: userCreated.id,
      name: userCreated.name,
      createdAt: userCreated.createdAt,
      updatedAt: userCreated.updatedAt,
    }
  }
}
