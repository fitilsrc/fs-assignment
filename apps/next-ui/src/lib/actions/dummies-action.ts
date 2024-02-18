"use server";

import { cookies } from 'next/headers';
import { TokensType } from '../types/TokensType';
import { DummyType } from '../types/DummyType';
import { redirect } from 'next/navigation';

export async function getDummiesAction(): Promise<DummyType[] | undefined> {
  const session = cookies().get('session')?.value;
  if (!session) return redirect('/login');

  const tokens: TokensType = JSON.parse(session);

  const params: RequestInit = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${tokens.access_token}`
    }
  };

  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/dummy`, params)
    if (!res.ok) throw new Error(res.status.toString());
    const data: DummyType[] = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
