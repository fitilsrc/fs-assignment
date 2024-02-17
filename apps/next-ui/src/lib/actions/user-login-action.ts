"use server";

import { useToast } from '@ui/src/components/ui/use-toast';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function userLogin(formData: FormData): Promise<void> {

  console.log('[log]', formData);

  const params: RequestInit = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: formData.get('username'),
      password: formData.get('password')
    })
  };

  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/auth/login`, params)
    if (!res.ok) throw new Error(res.status.toString());
    const data = await res.json();

    cookies().set({
      name: 'session',
      value: JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }

  redirect('/');
}