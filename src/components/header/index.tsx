"use client";

import { useWeb2Url } from "@crossbell/ui";
import React from "react";

export function Header() {
  const logoUrl = useWeb2Url(
    "ipfs://bafkreidtjso4rkvefy2yd63p2r2fze74yxadnpc5wbrgrz5yunkd6tnxo4"
  );

  return (
    <div className="flex items-center justify-center p-6">
      <img src={logoUrl} alt="Crossbell Logo" />
    </div>
  );
}
