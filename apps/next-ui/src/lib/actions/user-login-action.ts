"use server";

import { cookies } from 'next/headers';
import { TokensType } from '../types/TokensType';

export interface userLoginProps {
  username: string,
  password: string
};

export async function userLoginAction({ username, password }: userLoginProps): Promise<TokensType | void> {
  const params: RequestInit = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/auth/login`, params);
    if (!res.ok) throw new Error(res.status.toString());
    const data = await res.json();

    cookies().set({
      name: 'session',
      value: JSON.stringify(data)
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
