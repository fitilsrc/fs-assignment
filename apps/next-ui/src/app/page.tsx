"use client"

import { useEffect } from "react";
import { useAuth } from "../lib/hooks";
import { useDummies } from "../lib/hooks/useDummies";

export default function Home() {
  const { setUserInfo } = useAuth();
  const { data: dummies } = useDummies();

  useEffect(() => {
    setUserInfo();
  }, [])

  useEffect(() => {
    console.log('[log] dummies', dummies)
  }, [dummies])

  return (
    <>
      <div>Test</div>
    </>
  );
}
