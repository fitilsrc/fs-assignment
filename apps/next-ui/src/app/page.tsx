"use client";

import { useEffect } from "react";
import { useAuth } from "../lib/hooks";
import { useDummies } from "../lib/hooks/useDummies";
import { Loader } from "../components/ui/loader";
import { Dummy } from "../components/dummy";
import { ErrorAlert } from "../components/ui/error";

export default function Home() {
  const { setUserInfo } = useAuth();
  const { data: dummies, isLoading, isError, error } = useDummies();

  useEffect(() => {
    setUserInfo();
  }, [])

  if (isLoading) return <Loader />
  if (isError) return <ErrorAlert message={error.message} />

  return (
    <div className="flex flex-wrap gap-4">
      {dummies && dummies.map((dummy) => (
        <Dummy dummy={dummy} key={`dummy-${dummy.id}`} />
      ))}
    </div>
  );
}
