import React from "react";

import { Header } from "@/components/header";
import { Connection } from "@/components/connection";
import { Feed } from "@/components/feed";
import { Note } from "@/components/note";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-row gap-20 px-20 relative">
        <div className="basis-1/4 max-w-sm w-full sticky h-screen top-10 pl-10">
          <Connection />
          <Note />
        </div>
        <div className="basis-3/4 pl-20">
          <Feed />
        </div>
      </div>
    </div>
  );
}
