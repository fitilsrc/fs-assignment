"use server";

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { UserType } from '../types/UserType';

export interface authToken {
  username: string,
  family_name: string,
  given_name: string,
}

export async function getUserInfoAction(): Promise<UserType | void> {
  const tokens = cookies().get('session')?.value;
  if (!tokens) return;
  const { username, family_name, given_name } = jwtDecode<authToken>(JSON.parse(tokens ?? "").access_token);

  const user = {
    username,
    family_name,
    given_name,
  }

  return user;
}
