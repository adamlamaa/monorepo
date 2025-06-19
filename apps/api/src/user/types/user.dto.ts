import { IsDate, IsString, IsUUID } from "@nestjs/class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
  @ApiProperty({
    description: "User ID",
    example: "adca0281-d014-4e1b-862f-ee57dc42b2da",
  })
  @IsUUID()
  id: string

  @ApiProperty({
    description: "The name of the user",
    example: "John Doe",
  })
  @IsString()
  name: string

  @ApiProperty({
    description: "Date user was created",
  })
  @IsDate()
  createdAt: Date

  @ApiProperty({
    description: "Date user was last updated",
  })
  @IsDate()
  updatedAt: Date
}
