"use client";

import { Logo } from "./logo";
import { ModeToggle } from "./toggle-mode";
import { UserMenu } from "./user-menu";
import { useAppContext } from "./user-provider";

export default function Header() {
  const { state } = useAppContext();

  const getAbbreviation =
    state.user?.given_name && state.user?.family_name
      ? `${state.user.given_name.split("")[0].toUpperCase()}${state.user.family_name
          .split("")[0]
          .toUpperCase()}`
      : "";

  return (
    <header className="w-full">
      <div className="flex h-16 items-center space-x-4 justify-between px-8 w-full">
        <div>
          <Logo />
        </div>
        <div className="flex gap-x-6 items-center">
          {!state.isLoggedIn ? null : <UserMenu abbreviation={getAbbreviation} />}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
