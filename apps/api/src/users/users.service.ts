import { UserType } from '@app/shared';
import { Injectable } from '@nestjs/common';
import users from '@app/shared/data/users.json';

@Injectable()
export class UsersService {

  /**
   * Get unique user by username
   * @param username
   * @returns Promise<UserType | undefined>
   */
  async getUserByName(username: string): Promise<UserType | undefined> {
    return users.find(user => user.username === username)
  }
}
