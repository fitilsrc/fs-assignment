import React from 'react'
import { DummyType } from '../lib/types/DummyType'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface DummyProps {
  dummy: DummyType;
}

export const Dummy = ({ dummy }: DummyProps) => {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="leading-8">{dummy.title}</CardTitle>
        <CardDescription>{dummy.tagline}</CardDescription>
      </CardHeader>
      <CardContent>
        {dummy.overview}
      </CardContent>
    </Card>
  );
}
