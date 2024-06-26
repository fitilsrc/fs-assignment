"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/src/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/src/components/ui/form";
import { Input } from "@ui/src/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@ui/src/components/ui/button";
import { useAuth } from "@ui/src/lib/hooks/useAuth";

const formSchema = z.object({
  username: z.string(),
  password: z.string()
})

export default function SignIn() {
  const { userLogin } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    userLogin(values);
  }

  return (
    <section className="flex justify-center items-center h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login to your account</CardTitle>
              <CardDescription>
                Enter your username and password below to sign in
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Login</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  )
}