"use client";

import { UserType } from "../lib/types/UserType";
import { Logo } from "./logo";
import { ModeToggle } from "./toggle-mode";
import { UserMenu } from "./user-menu";

interface HeaderProps {
  user?: UserType
}

export default function Header({
  user
}: HeaderProps) {

  const getAbbreviation = !user
    ? ""
    : `${user?.given_name.split("")[0].toUpperCase()}${user?.family_name
        .split("")[0]
        .toUpperCase()}`;

  return (
    <header className="w-full">
      <div className="flex h-16 items-center space-x-4 justify-between px-8 w-full">
        <div>
          <Logo />
        </div>
        <div className="flex gap-x-6 items-center">
          {!user ? null : <UserMenu abbreviation={getAbbreviation} />}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
