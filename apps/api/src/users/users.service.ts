import { UserType } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly mockUsers = [
    {
      id: 1,
      username: "admin",
      password: "admin",
      given_name: "John",
      family_name: "Doe",
    },
    {
      id: 2,
      username: "user",
      password: "user",
      given_name: "Hannah",
      family_name: "Doe",
    }
  ]

  async getUserByName(username: string): Promise<UserType | undefined> {
    return this.mockUsers.find(user => user.username === username)
  }
}
