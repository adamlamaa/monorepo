import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { UserService } from "./user.service"
import { UserDto } from "./types/user.dto"
import { CreateUserDto } from "./types/create-user.dto"
import { ApiOkResponse, ApiTags } from "@nestjs/swagger"

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({ type: [UserDto] })
  @Get()
  getUsers(): Promise<UserDto[]> {
    return this.userService.getUsers()
  }

  @ApiOkResponse({ type: UserDto })
  @Get(":id")
  getUserById(@Param("id") id: string): Promise<UserDto> {
    return this.userService.getUserById(id)
  }

  @ApiOkResponse({ type: UserDto })
  @Post()
  createUser(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(user)
  }
}
