import { UserType } from '@app/shared';
import { Injectable } from '@nestjs/common';
import * as users from '@app/shared/data/users.json';

@Injectable()
export class UsersService {
  users: UserType[];

  constructor() {
    this.users = users
  }
  /**
   * Get unique user by username
   * @param username
   * @returns Promise<UserType | undefined>
   */
  async getUserByName(username: string): Promise<UserType | undefined> {
    return this.users.find(user => user.username === username)
  }
}
