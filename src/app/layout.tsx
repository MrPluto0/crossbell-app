import "./globals.css";
import "@crossbell/connect-kit/colors.css";

import React from "react";

import { Providers } from "./providers";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
