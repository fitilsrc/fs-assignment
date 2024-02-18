"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { TokensType } from '../types/TokensType';

export async function userLogoutAction() {
  const session = cookies().get('session')?.value;
  if (!session) return redirect('/');

  const tokens: TokensType = JSON.parse(session);
  const params: RequestInit = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token
    })
  };

  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/auth/logout`, params)
    if (!res.ok) throw new Error(res.status.toString());

    cookies().delete({
      name: 'session',
    });
  } catch (error) {
    console.log(error);
  }
}
